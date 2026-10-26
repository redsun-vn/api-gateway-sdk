import { ISubscription } from '../isubscription';
export declare namespace IMktOs {
    interface IEntitlementResponse {
        mkt_os: ISubscription.IControllerEntitlement;
        crm_package: ISubscription.IControllerEntitlement;
        has_crm_package: boolean;
    }
}
