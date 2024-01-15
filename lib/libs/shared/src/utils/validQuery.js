"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidQuery = void 0;
const common_1 = require("@nestjs/common");
const const_1 = require("../const");
const OR_PREFIX = 'OR';
const AND_PREFIX = 'AND';
const OR_REPLACE = '%';
const AND_REPLACE = '@';
class ValidQuery {
    constructor(query) {
        this.handleReplacePrefixByParams = (input, params) => {
            if (input.split(':').length > 3) {
                const regex = new RegExp(`(${params.join('|')})\\:(\\w+)\\:([\\w\\d]+)(${AND_PREFIX}|${OR_PREFIX})`, 'g');
                const res = input.replace(regex, (match, param, operation, value, operator) => {
                    const changePrefix = operator === OR_PREFIX ? OR_REPLACE : AND_REPLACE;
                    let res = `${param}:${operation}:${value}${changePrefix}`;
                    return res;
                });
                return res;
            }
            return input;
        };
        this.query = query;
    }
    parseConditionsFilter(input, params) {
        input = this.handleReplacePrefixByParams(input, params);
        const conditionPattern = new RegExp(`(?:${AND_REPLACE}|${OR_REPLACE})?([^${AND_REPLACE}${OR_REPLACE}]+)`, 'g');
        let matches = [...input.matchAll(conditionPattern)];
        const { andFilter, orFilter } = matches.reduce((result, match) => {
            const condition = match[1]?.trim();
            if (condition) {
                this.validFilterQuery(condition, params);
                const [property, rule, value] = condition.split(':');
                const data = { property, rule, value };
                const isOrCondition = match[0].includes(OR_REPLACE);
                const isAndCondition = match[0].includes(AND_REPLACE);
                const isNextOrCondition = matches.length > 1 && matches[1][0].includes(OR_REPLACE);
                const isNextAndCondition = matches.length > 1 && matches[1][0].includes(AND_REPLACE);
                if (isOrCondition) {
                    result.orFilter.push(data);
                }
                else if (isAndCondition) {
                    result.andFilter.push(data);
                }
                else if (isNextOrCondition) {
                    result.orFilter.push(data);
                }
                else if (isNextAndCondition) {
                    result.andFilter.push(data);
                }
                else {
                    result.andFilter.push(data);
                }
            }
            return result;
        }, { andFilter: [], orFilter: [] });
        return { andFilter, orFilter };
    }
    validFilterQuery(filter, params) {
        if (!filter.match(/.*^[a-zA-Z0-9._]+:(eq|neq|gt|gte|lt|lte|like|nlike|in|nin):[a-zA-Z0-9_,]+.*$/) &&
            !filter.match(/^[a-zA-Z0-9_]+:(isnull|isnotnull)$/)) {
            throw new common_1.BadRequestException({
                message: 'Invalid filter parameter',
                errorCode: const_1.ERRORS_DICTIONARY.FILTERS_PARAMS_INVALID_EXCEPTION,
            });
        }
        const [property, rule, value] = filter.split(':');
        if (!params.includes(property))
            throw new common_1.BadRequestException(`Invalid filter property: ${property}`);
        if (!Object.values(const_1.FilterRule).includes(rule))
            throw new common_1.BadRequestException({
                message: `Invalid filter rule: ${rule}`,
                errorCode: const_1.ERRORS_DICTIONARY.FILTERS_PARAMS_INVALID_EXCEPTION,
            });
    }
    validParams(params, type) {
        if (typeof params != 'object')
            throw new common_1.BadRequestException({
                message: `Invalid ${type} parameter`,
                errorCode: const_1.ERRORS_DICTIONARY.PARAMS_INVALID_EXCEPTION,
            });
    }
    sort(params) {
        let sort = this.query.sort;
        if (!sort) {
            sort = 'createdAt:desc';
            const [property, direction] = sort.split(':');
            return { property, direction };
        }
        this.validParams(params, 'sort');
        const sortPattern = /^([a-zA-Z0-9_]+):(asc|desc)$/;
        if (!sort.match(sortPattern))
            throw new common_1.BadRequestException({
                message: 'Invalid sort parameter',
                errorCode: const_1.ERRORS_DICTIONARY.SORTING_PARAMS_INVALID_EXCEPTION,
            });
        const [property, direction] = sort.split(':');
        if (!params.includes(property))
            throw new common_1.BadRequestException({
                message: `Invalid sort property: ${property}`,
                errorCode: const_1.ERRORS_DICTIONARY.SORTING_PARAMS_INVALID_EXCEPTION,
            });
        return { property, direction };
    }
    pagination() {
        const page = this.query.page || 1;
        const limit = this.query.limit || 10;
        if (isNaN(+page) || +page < 0 || isNaN(+limit) || +limit < 0) {
            throw new common_1.BadRequestException('Invalid pagination params');
        }
        if (+limit > 100) {
            throw new common_1.BadRequestException('Invalid pagination params: Max limit is 100');
        }
        return { page, limit };
    }
    search(params) {
        const search = this.query.search;
        if (!search)
            return undefined;
        this.validParams(params, 'search');
        return {
            s: search,
            properties: params,
        };
    }
    filter(params) {
        const filter = this.query.filter;
        if (!filter)
            return undefined;
        this.validParams(params, 'filter');
        const [property, rule, value] = filter.split(':');
        this.validFilterQuery(filter, params);
        return { property, rule, value };
    }
    filters(params) {
        const filters = this.query.filters;
        if (!filters)
            return undefined;
        this.validParams(params, 'filters');
        const { andFilter, orFilter } = this.parseConditionsFilter(filters, params);
        return {
            andFilter,
            orFilter,
        };
    }
}
exports.ValidQuery = ValidQuery;
//# sourceMappingURL=validQuery.js.map