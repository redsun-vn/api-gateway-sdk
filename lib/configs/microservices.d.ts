import { tags } from 'typia';
export interface IService {
    id: string & tags.MinLength<4>;
    name: string & tags.MinLength<4>;
    groupId: string & tags.MinLength<4>;
    topics?: string[];
}
export interface IMicroserviceName {
    shop: IService;
    attachment: IService;
    product: IService;
    order: IService;
    partner: IService;
    inventory: IService;
    report: IService;
    loyalty: IService;
    activity: IService;
    comment: IService;
    fulfillment: IService;
    reservations: IService;
    search: IService;
}
export declare const SHOP_MICROSERVICE: IService;
export declare const ATTACHMENT_MICROSERVICE: IService;
export declare const PRODUCT_MICROSERVICE: IService;
export declare const ORDER_MICROSERVICE: IService;
export declare const PARTNER_MICROSERVICE: IService;
export declare const INVENTORY_MICROSERVICE: IService;
export declare const REPORT_MICROSERVICE: IService;
export declare const LOYALTY_MICROSERVICE: IService;
export declare const ACTIVITY_MICROSERVICE: IService;
export declare const COMMENT_MICROSERVICE: IService;
export declare const FULFILLMENT_MICROSERVICE: IService;
export declare const RESERVATIONS_MICROSERVICE: IService;
export declare const SEARCH_MICROSERVICE: IService;
export declare const ESM_MICROSERVICES_NAME: Readonly<IMicroserviceName>;
