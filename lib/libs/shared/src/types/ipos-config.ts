/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IPaymentMethod } from './ipayment-method';
import { IPosPrinter } from './ipos-printer';
export namespace IPosConfig {
	export enum POSTaxDisplay {
		total = 'total',
		subtotal = 'subtotal',
	}
	export enum POSMethodOfOperation {
		PAIDFIRST = 'paid_first', // Order is paid first, then prepared and delivered
		PREPARATIONFIRST = 'preparation_first', // Order is prepared first, then paid and delivered
	}
	export interface ICreate {
		branch_id: number & tags.Type<'int32'>;
		printer_id?: number & tags.Type<'int32'>;
		kitchen_printer_id?: number & tags.Type<'int32'>;
		warehouse_id?: number & tags.Type<'int32'>;
		tax_id?: number & tags.Type<'int32'>;
		name: string;
		active?: boolean;
		picking_type_id?: number & tags.Type<'int32'>;
		currencyCode?: string;
		number_of_open_session?: number & tags.Type<'int32'>;
		current_session_id?: number & tags.Type<'int32'>;
		use_pricelist?: boolean;
		pricelist_id?: number & tags.Type<'int32'>;
		limit_collections?: boolean;
		is_table_management?: boolean;
		global_discount?: boolean;
		manual_discount?: boolean;
		iface_tax_included?: POSTaxDisplay;
		iface_customer_facing_display?: boolean;
		iface_splitbill?: boolean;
		iface_printbill?: boolean;
		iface_orderline_notes?: boolean;
		iface_noti_kitchen?: boolean;
		iface_change_table?: boolean;
		iface_pay?: boolean;
		iface_request_pay?: boolean;
		is_kitchen?: boolean;
		is_kiosk_mode?: boolean;
		available_pricelist_ids?: string[];
		available_collections_ids?: string[];
		available_floor_ids?: string[];
		available_staff_ids?: string[];
		available_payment_method_ids?: string[];
		methodOfOperation?: POSMethodOfOperation;
	}
	export interface IUpdate
		extends Omit<Partial<ICreate>, 'shop_id' | 'branch_id'> {}
	export interface IPosConfigResponse extends BaseResponse {
		posPrinter?: null | IPosPrinter.IPosPrinterResponse;
		posKitchenPrinter?: null | IPosPrinter.IPosPrinterResponse;
		warehouse_id?: null | number | string;
		tax_id?: null | number | string;
		branch_id: number | string;
		shop_id: number | string;
		name: string;
		active?: boolean;
		picking_type_id?: null | number | string;
		currencyCode?: string;
		number_of_open_session?: number | string;
		current_session_id?: null | number | string;
		use_pricelist?: boolean;
		pricelist_id?: null | number | string;
		limit_collections?: boolean;
		is_table_management?: boolean;
		global_discount?: boolean;
		manual_discount?: boolean;
		iface_tax_included?: POSTaxDisplay;
		iface_customer_facing_display?: boolean;
		iface_splitbill?: boolean;
		iface_printbill?: boolean;
		iface_orderline_notes?: boolean;
		iface_noti_kitchen?: boolean;
		iface_change_table?: boolean;
		iface_pay?: boolean;
		iface_request_pay?: boolean;
		is_kitchen?: boolean;
		is_kiosk_mode?: boolean;
		// posSessions?: null | IPosSession.IPosSessionResponse[];
		available_pricelist_ids?: null | string[];
		available_collections_ids?: null | string[];
		available_floor_ids?: null | string[];
		available_staff_ids?: null | string[];
		availablePaymentMethods?: null | IPaymentMethod.IPaymentMethodResponse[];
		methodOfOperation?: POSMethodOfOperation;
	}
}
