/* eslint-disable */
import { BadRequestException } from '@nestjs/common';
import { ERRORS_DICTIONARY, FilterRule, PAGINATE_LIMIT_NUMBER } from '../const';
import {
	IFiltering,
	IFilteringMultiple,
	IPaginationOptions,
	IQuery,
	ISearch,
	ISorting,
} from '../types';

const OR_PREFIX = 'OR';
const AND_PREFIX = 'AND';

const OR_REPLACE = '%';
const AND_REPLACE = '@';

export class ValidQuery {
	private query: IQuery;

	constructor(query: IQuery) {
		this.query = query;
	}

	/**
	 * Hàm này sẽ sử dụng để thay thế các từ AND_PREFIX và OR_PREFIX thành các kí tự OR_REPLACE và AND_REPLACE.
	 * Thay thế sẽ dựa vào key ngay sau đó để thay thế. Chính vì thế sẽ không bị thay thế nhầm với dữ liệu mà vô tình có chữ AND và OR trong đó
	 * Sau đó mình sẽ dựa vào OR_REPLACE hay AND_REPLACE đê xử lý
	 * @param input là chuôi string truyền vào từ query
	 * @param params là  mảng chứa các key hỗ trợ filter
	 *
	 */
	private handleReplacePrefixByParams = (
		input: string,
		params: string[],
	): string => {
		if (input.split(':').length > 3) {
			const regex = new RegExp(
				`(${params.join(
					'|',
				)})\\:(\\w+)\\:([\\w\\d]+)(${AND_PREFIX}|${OR_PREFIX})`,
				'g',
			);
			const res = input.replace(
				regex,
				(match, param, operation, value, operator) => {
					const changePrefix =
						operator === OR_PREFIX ? OR_REPLACE : AND_REPLACE;
					let res = `${param}:${operation}:${value}${changePrefix}`;
					return res;
				},
			);

			return res;
		}
		return input;
	};

	private parseConditionsFilter(
		input: string,
		params: string[],
	): IFilteringMultiple {
		input = this.handleReplacePrefixByParams(input, params);
		const conditionPattern: RegExp = new RegExp(
			`(?:${AND_REPLACE}|${OR_REPLACE})?([^${AND_REPLACE}${OR_REPLACE}]+)`,
			'g',
		);
		let matches: RegExpMatchArray[] = [...input.matchAll(conditionPattern)];
		const { andFilter, orFilter } = matches.reduce(
			(result, match) => {
				const condition: string = match[1]?.trim();
				if (condition) {
					this.validFilterQuery(condition, params);

					const [property, rule, value] = condition.split(':');

					const data = { property, rule, value } as never;

					const isOrCondition = match[0].includes(OR_REPLACE);
					const isAndCondition = match[0].includes(AND_REPLACE);
					const isNextOrCondition =
						matches.length > 1 && matches[1][0].includes(OR_REPLACE);
					const isNextAndCondition =
						matches.length > 1 && matches[1][0].includes(AND_REPLACE);

					if (isOrCondition) {
						result.orFilter.push(data);
					} else if (isAndCondition) {
						result.andFilter.push(data);
					} else if (isNextOrCondition) {
						result.orFilter.push(data);
					} else if (isNextAndCondition) {
						result.andFilter.push(data);
					} else {
						result.andFilter.push(data);
					}
				}
				return result;
			},
			{ andFilter: [], orFilter: [] },
		);

		return { andFilter, orFilter };
	}

	private validFilterQuery(filter: string, params: string[]) {
		if (
			!filter.match(
				/.*^[a-zA-Z0-9._]+:(eq|neq|gt|gte|lt|lte|like|nlike|in|nin):[a-zA-Z0-9_,]+.*$/,
			) &&
			!filter.match(/^[a-zA-Z0-9_]+:(isnull|isnotnull)$/)
		) {
			throw new BadRequestException({
				message: 'Invalid filter parameter',
				errorCode: ERRORS_DICTIONARY.FILTERS_PARAMS_INVALID_EXCEPTION,
			});
		}
		const [property, rule, value] = filter.split(':');

		if (!params.includes(property))
			throw new BadRequestException(`Invalid filter property: ${property}`);
		if (!Object.values(FilterRule).includes(rule as FilterRule))
			throw new BadRequestException({
				message: `Invalid filter rule: ${rule}`,
				errorCode: ERRORS_DICTIONARY.FILTERS_PARAMS_INVALID_EXCEPTION,
			});
	}

	private validParams(params: string[], type: string) {
		if (typeof params != 'object')
			throw new BadRequestException({
				message: `Invalid ${type} parameter`,
				errorCode: ERRORS_DICTIONARY.PARAMS_INVALID_EXCEPTION,
			});
	}

	public sort(params: string[]): ISorting {
		let sort = this.query.sort as string;

		if (!sort) {
			sort = 'createdAt:desc';
			const [property, direction] = sort.split(':');
			return { property, direction };
		}

		// check if the valid params sent is an array
		this.validParams(params, 'sort');

		// check the format of the sort query param
		const sortPattern = /^([a-zA-Z0-9_]+):(asc|desc)$/;
		if (!sort.match(sortPattern))
			throw new BadRequestException({
				message: 'Invalid sort parameter',
				errorCode: ERRORS_DICTIONARY.SORTING_PARAMS_INVALID_EXCEPTION,
			});

		// extract the property name and direction and check if they are valid
		const [property, direction] = sort.split(':');
		if (!params.includes(property))
			throw new BadRequestException({
				message: `Invalid sort property: ${property}`,
				errorCode: ERRORS_DICTIONARY.SORTING_PARAMS_INVALID_EXCEPTION,
			});

		return { property, direction };
	}

	public pagination(): IPaginationOptions {
		const page = (this.query.page as number) || 1;
		const limit = (this.query.limit as number) || 10;
		if (isNaN(+page) || +page < 0 || isNaN(+limit) || +limit < 0) {
			throw new BadRequestException('Invalid pagination params');
		}

		if (+limit > PAGINATE_LIMIT_NUMBER) {
			throw new BadRequestException(
				`Invalid pagination params: Max limit is ${PAGINATE_LIMIT_NUMBER}`,
			);
		}

		return { page, limit };
	}

	public search(params: string[]): ISearch | undefined {
		const search = this.query.search as string;
		if (!search) return undefined;

		this.validParams(params, 'search');

		return {
			s: search,
			properties: params,
		};
	}

	public filter(params: string[]): IFiltering | undefined {
		const filter = this.query.filter;

		if (!filter) return undefined;

		this.validParams(params, 'filter');

		const [property, rule, value] = filter.split(':');
		this.validFilterQuery(filter, params);

		return { property, rule, value };
	}

	public filters(params: string[]): IFilteringMultiple | undefined {
		const filters = this.query.filters;
		if (!filters) return undefined;
		this.validParams(params, 'filters');

		const { andFilter, orFilter } = this.parseConditionsFilter(filters, params);
		return {
			andFilter,
			orFilter,
		};
	}

	public groupBy(groups: string[]): string | undefined {
		const keys = (this.query.groupBy && this.query.groupBy.split(',')) || [];
		for (const key of keys) {
			if (!groups.includes(key))
				throw new BadRequestException(`Invalid filter property: ${key}`);
		}
		return this.query.groupBy;
	}

	// Enhanced methods for product-specific validation based on mapping
	public productSearch(): ISearch | undefined {
		const search = this.query.search as string;
		if (!search) return undefined;

		// Based on mapping: text fields with esm_vi_analyzer
		const productSearchProperties = [];

		return {
			s: search,
			properties: productSearchProperties,
		};
	}

	public productFilters(): IFilteringMultiple | undefined {
		const filters = this.query.filters;
		if (!filters) return undefined;

		// Updated filter fields based on actual Elasticsearch mapping
		const allowedFilterParams = [
			// Basic product fields (root level)
			'id',
			'shop_id',
			'tax_id',
			'partner_id',
			'manufacturer_id',
			'brand_id',
			'image_id',
			'product_brand_id',
			'active',
			'barcode',
			'sku',
			'icon',
			'type',
			'isFeature',
			'needToCook',
			'isManageInventory',
			'isCalculatedByHour',
			'isRecurring',
			'lowLimit',
			'totalInventory',
			'availableStock',
			'productSlug',
			'price',
			'originPrice',
			'salePrice',
			'ordered',
			'liked',
			'createdAt',
			'updatedAt',
			'deletedAt',
			'createdBy',
			'updatedBy',
			'description',

			// Flattened fields (categories, collections, tags)
			'categories.id',
			'categories.name',
			'collections.name',
			'collections.id',
			'tags',
			'tags.id',

			// Nested object fields - productBrand
			'productBrand.id',
			'productBrand.name',
			'productBrand.brandSlug',
			'productBrand.active',
			'productBrand.shop_id',
			'productBrand.createdAt',
			'productBrand.updatedAt',

			// Nested object fields - salesChannel
			'salesChannel.id',
			'salesChannel.name',
			'salesChannel.code',

			// Nested object fields - tax
			'tax.id',
			'tax.name',
			'tax.code',
			'tax.description',
			'tax.rate',
			'tax.ratePercentage',
			'tax.active',
			'tax.shop_id',
			'tax.createdAt',
			'tax.updatedAt',

			// Nested object fields - productImages
			'productImages.id',
			'productImages.image_id',
			'productImages.image_url',
			'productImages.isShow',
			'productImages.aliasName',
			'productImages.product_id',
			'productImages.shop_id',
			'productImages.createdAt',
			'productImages.updatedAt',

			// Nested object fields - variants
			'variants.id',
			'variants.name',
			'variants.sku',
			'variants.barcode',
			'variants.active',
			'variants.price',
			'variants.originPrice',
			'variants.compareAtPrice',
			'variants.quantityAvailable',
			'variants.totalInventory',
			'variants.availableForSale',
			'variants.currentlyNotInStock',
			'variants.isSaleOnline',
			'variants.requiredShipping',
			'variants.icon',
			'variants.image_id',
			'variants.unit_id',
			'variants.weight',
			'variants.product_id',
			'variants.shop_id',
			'variants.createdAt',
			'variants.updatedAt',
			'variants.createdBy',
			'variants.updatedBy',
			'variants.expiredAt',

			// Nested object fields - variants.selectedOptions
			'variants.selectedOptions.id',
			'variants.selectedOptions.name',
			'variants.selectedOptions.attribute_id',
			'variants.selectedOptions.variant_id',
			'variants.selectedOptions.active',
			'variants.selectedOptions.sequence',
			'variants.selectedOptions.shop_id',
			'variants.selectedOptions.createdAt',
			'variants.selectedOptions.updatedAt',

			// Nested object fields - variants.unit
			'variants.unit.id',
			'variants.unit.conversion',
			'variants.unit.factor',
			'variants.unit.rounding',
			'variants.unit.isDefault',
			'variants.unit.uom_uom_id',
			'variants.unit.product_id',
			'variants.unit.shop_id',
			'variants.unit.createdAt',
			'variants.unit.updatedAt',

			// Nested object fields - productOptions
			'productOptions.id',
			'productOptions.name',
			'productOptions.attribute_id',
			'productOptions.variant_id',
			'productOptions.active',
			'productOptions.sequence',
			'productOptions.shop_id',
			'productOptions.createdAt',
			'productOptions.updatedAt',

			// Nested object fields - selectionGroups
			'selectionGroups.id',
			'selectionGroups.name',
			'selectionGroups.active',
			'selectionGroups.sequence',
			'selectionGroups.shop_id',
			'selectionGroups.createdAt',
			'selectionGroups.updatedAt',
			'selectionGroups.createdBy',
			'selectionGroups.updatedBy',

			// Nested object fields - selectionGroups.selections
			'selectionGroups.selections.id',
			'selectionGroups.selections.name',
			'selectionGroups.selections.price',
			'selectionGroups.selections.originPrice',
			'selectionGroups.selections.active',
			'selectionGroups.selections.selection_group_id',
			'selectionGroups.selections.shop_id',
			'selectionGroups.selections.createdAt',
			'selectionGroups.selections.updatedAt',

			// Nested object fields - productPackages
			'productPackages.id',
			'productPackages.price',
			'productPackages.unitPrice',
			'productPackages.quantity',
			'productPackages.product_id',
			'productPackages.variant_id',
			'productPackages.shop_id',
			'productPackages.createdAt',
			'productPackages.updatedAt',

			// Nested object fields - productPackages.variant (same structure as variants)
			'productPackages.variant.id',
			'productPackages.variant.name',
			'productPackages.variant.sku',
			'productPackages.variant.barcode',
			'productPackages.variant.active',
			'productPackages.variant.price',
			'productPackages.variant.originPrice',
			'productPackages.variant.compareAtPrice',
			'productPackages.variant.quantityAvailable',
			'productPackages.variant.totalInventory',
			'productPackages.variant.availableForSale',
			'productPackages.variant.currentlyNotInStock',
			'productPackages.variant.isSaleOnline',
			'productPackages.variant.requiredShipping',
		];

		this.validParams(allowedFilterParams, 'filters');

		const { andFilter, orFilter } = this.parseConditionsFilter(
			filters,
			allowedFilterParams,
		);
		return {
			andFilter,
			orFilter,
		};
	}
}
