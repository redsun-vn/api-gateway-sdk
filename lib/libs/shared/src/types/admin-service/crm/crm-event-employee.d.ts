import { IAdminUser } from '../iuser';
export interface IEventEmployeeEntity {
    id: number | string;
    employee: IAdminUser.IResponse;
}
