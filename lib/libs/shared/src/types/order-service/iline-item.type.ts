/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse, ITimeSlot } from '../common.type';
import { KitchenProcessingStatus, OrderFulfillmentStatus } from '../../enum';
import { ILineItemTaxLine } from './iline-item-tax-line.type';
import { IOrder } from './iorder.type';
import { IDrafOrder } from './idraf-order.type';
import { ILineItemSelectionGroup } from './iline-item-selection-group.type';
import { ISaleOrder } from './isale-order';

export namespace ILineItem {
	export interface IInputLineItem {
		product_id: number & tags.Type<'uint64'>;
		variant_id: number & tags.Type<'uint64'>;
		uom_uom_id: number & tags.Type<'uint64'>;
		stock_take_id?: (number & tags.Type<'uint64'>) | null;
		kds_area_id?: (number & tags.Type<'uint64'>) | null;
		fulfillment_provider_id?: (number & tags.Type<'uint64'>) | null;
		reward_id?: (number & tags.Type<'uint64'>) | null;
		imgae_id?: (number & tags.Type<'uint64'>) | null;
		kitchenProcessingStatus?: KitchenProcessingStatus | null;
		fulfillmentStatus?: OrderFulfillmentStatus | null;
		isGiftcard?: boolean;
		isGift?: boolean;
		isReturn?: boolean;
		isRequiredShipping?: boolean;
		isPrioritize?: boolean;
		refundable?: boolean;
		taxable?: boolean;
		needToCook?: boolean;
		variantTitle?: string | null;
		title?: string | null;
		uuid?: string & tags.Format<'uuid'>;
		sku?: string | null;
		barcode?: string | null;
		description?: string | null;
		note?: string | null;
		quantity: number;
		uomRatio?: number;
		unitPrice?: number;
		price?: number;
		originPrice?: number;
		discountTotal?: number;
		returnedQuantity?: number;
		refundedTotal?: number;
		gram?: number;
		giftCardQuantity?: number;
		processedAt?: (string & tags.Format<'date-time'>) | null;
		completedAt?: (string & tags.Format<'date-time'>) | null;
		sequenece?: number;
		lineItemTaxLines?: ILineItemTaxLine.IInputLineItemTaxLine[] | null;
		selectionGroups?:
			| ILineItemSelectionGroup.IInputLineItemSelectionGroup[]
			| null;
		isCalculatedByHour?: boolean;
		isRecurring?: boolean;
		recurrencePeriod?: string;
		recurrenceDuration?: number | string;
		tableId?: number & tags.Type<'uint64'>;
		roomId?: number & tags.Type<'uint64'>;
		timeSlots?: ITimeSlot[];
	}

	export interface ICreateLineItem extends IInputLineItem {
		order_id?: number & tags.Type<'uint64'>;
		draf_order_id?: number & tags.Type<'uint64'>;
		sale_order_id?: number & tags.Type<'uint64'>;
		subscription_id?: number & tags.Type<'uint64'>;
	}

	export interface ICreateLineItemKafka extends ICreateLineItem {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateLineItem {
		id?: number | string | null;
		reward_id?: number;
		kitchenProcessingStatus?: string;
		fulfillmentStatus?: string;
		isGiftcard?: boolean;
		isGift?: boolean;
		isReturn?: boolean;
		isRequiredShipping?: boolean;
		isPrioritize?: boolean;
		refundable?: boolean;
		taxable?: boolean;
		needToCook?: boolean;
		variantTitle?: string;
		title?: string;
		sku?: string;
		image?: string;
		description?: string;
		note?: string;
		quantity?: number;
		price?: number;
		gram?: number;
		fulfillableQuantity?: number;
		returnedQuantity?: number;
		refundedTotal?: number;
		shippedQuantity?: number;
		subTotal?: number;
		taxTotal?: number;
		originPrice?: number;
		discountTotal?: number;
		paidTotal?: number;
		giftCardQuantity?: number;
		processedAt?: (string & tags.Format<'date-time'>) | null;
		completedAt?: (string & tags.Format<'date-time'>) | null;
		sequenece?: number;
		userId?: string;
		isCalculatedByHour?: boolean;
		isRecurring?: boolean;
		recurrencePeriod?: string;
		recurrenceDuration?: number | string;
		tableId?: number & tags.Type<'uint64'>;
		roomId?: number & tags.Type<'uint64'>;
		timeSlots?: ITimeSlot[];
	}

	export interface IDetailLineItemResponse extends BaseResponse {
		shop_id: number | string | null;
		product_id: number | string | null;
		variant_id: number | string | null;
		uom_uom_id?: number | string | null;
		stock_take_id?: number | string | null;
		image_id?: string | number | null;
		kds_area_id?: number | string | null;
		fulfillment_provider_id?: number | string | null;
		reward_id?: number | string | null;
		order_id?: number | string | null;
		draf_order_id?: number | string | null;
		sale_order_id?: number | string | null;
		isGiftcard?: boolean;
		isGift?: boolean;
		isReturn?: boolean;
		isRequiredShipping?: boolean;
		isPrioritize?: boolean;
		needToCook?: boolean;
		sku?: string | null;
		barcode?: string | null;
		uuid: string | null;
		variantTitle?: string | null;
		title?: string | null;
		description?: string | null;
		note?: string | null;
		kitchenProcessingStatus?: string | null; // Trạng thái lên món của nhà bếp
		fulfillmentStatus?: string | null; // trạng thái fulfillment
		refundable?: boolean; // line hàng hóa đã refunded (không cần truyền nếu chưa có nhu cầu sử dungj)
		taxable?: boolean; // line hàng hóa có tính thuế (taxTotal sẽ luôn = 0 nếu field này == false)
		uomRatio?: number | string; // tỉ lệ quy đổi so với barcode cơ bản (variant.unit.ratio)
		quantity?: number | string; // số lượng hàng hóa
		unitPrice?: number | string; // đơn giá 1 hàng hóa (theo bảng giá được chọn)
		price?: number | string; // tổng giá hàng hóa (unitPrice * price)
		originPrice?: number | string; // giá gốc của hàng hóa, (variant.originPrice)
		subTotal?: number | string; // tổng giá ban đầu (chưa sử dụng)
		taxTotal?: number | string; // tổng tiền thuế của line
		discountTotal?: number | string; // tổng tiền khuyến mãi của line
		paidTotal?: number | string; // tổng tiền thanh toán [ paidTotal = price + (taxTotal || 0) - (discountTotal || 0) ]
		gram?: number | string; // khối lượng hàng hóa
		fulfillableQuantity?: number | string; // số lượng hàng hóa được fill (không cần truyền nếu chưa có nhu cầu sử dungj)
		shippedQuantity?: number | string; // số lượng hàng hóa đã delivered (không cần truyền nếu chưa có nhu cầu sử dungj)
		giftCardQuantity?: number | string; // số lượng thẻ quà tặng (không cần truyền nếu chưa có nhu cầu sử dungj)
		returnedQuantity?: number | string; // số lượng hàng hóa bị trả trong line (không cần truyền nếu chưa có nhu cầu sử dungj)
		refundedTotal?: number | string;
		processedAt?: string | null;
		completedAt?: string | null;
		sequenece?: number | string;
		order?: IOrder.IDetailOrderResponse | null;
		drafOrder?: IDrafOrder.IDetailDrafOrderResponse | null;
		lineItemTaxLines?: ILineItemTaxLine.IDetailLineItemTaxLineResponse[] | null;
		selectionGroups?:
			| ILineItemSelectionGroup.IDetailLineItemSelectionGroupResponse[]
			| null;
		saleOrder?: ISaleOrder.IResponse | null;
		isCalculatedByHour?: boolean;
		isRecurring?: boolean;
		recurrencePeriod?: string;
		recurrenceDuration?: number | string;
		subscription_id?: number | string | null;
		tableId?: number | string | null;
		roomId?: number | string | null;
		timeSlots?: ITimeSlot[] | null;
	}

	export interface IDetailLineItemPublicResponse extends BaseResponse {
		shop_id: number | string | null;
		product_id: number | string | null;
		variant_id: number | string | null;
		uom_uom_id?: number | string | null;
		image_id?: string | number | null;
		kds_area_id?: number | string | null;
		fulfillment_provider_id?: number | string | null;
		reward_id?: number | string | null;
		order_id?: number | string | null;
		draf_order_id?: number | string | null;
		sale_order_id?: number | string | null;
		isGiftcard?: boolean;
		isGift?: boolean;
		isReturn?: boolean;
		isRequiredShipping?: boolean;
		isPrioritize?: boolean;
		needToCook?: boolean;
		sku?: string | null;
		barcode?: string | null;
		uuid: string | null;
		variantTitle?: string | null;
		title?: string | null;
		description?: string | null;
		note?: string | null;
		kitchenProcessingStatus?: string | null; // Trạng thái lên món của nhà bếp
		fulfillmentStatus?: string | null; // trạng thái fulfillment
		refundable?: boolean; // line hàng hóa đã refunded (không cần truyền nếu chưa có nhu cầu sử dungj)
		taxable?: boolean; // line hàng hóa có tính thuế (taxTotal sẽ luôn = 0 nếu field này == false)
		uomRatio?: number | string; // tỉ lệ quy đổi so với barcode cơ bản (variant.unit.ratio)
		quantity?: number | string; // số lượng hàng hóa
		unitPrice?: number | string; // đơn giá 1 hàng hóa (theo bảng giá được chọn)
		price?: number | string; // tổng giá hàng hóa (unitPrice * price)
		discountTotal?: number | string; // tổng tiền khuyến mãi của line
		paidTotal?: number | string; // tổng tiền thanh toán [ paidTotal = price + (taxTotal || 0) - (discountTotal || 0) ]
		gram?: number | string; // khối lượng hàng hóa
		processedAt?: string | null;
		completedAt?: string | null;
		sequenece?: number | string;
		isCalculatedByHour?: boolean;
		isRecurring?: boolean;
		recurrencePeriod?: string;
		recurrenceDuration?: number | string;
	}
}
