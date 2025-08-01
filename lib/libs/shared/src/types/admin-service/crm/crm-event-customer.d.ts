import { IAdminCustomer } from '../icustomer';
export interface IEventCustomerEntity {
    id: number | string;
    customer: IAdminCustomer.IResponse;
}
