import { IFilteringMultiple, IPaginationOptions, ISearch, ISorting } from '../common.type';
export interface IClinicSearchParams {
    shopId: string;
    pagination?: IPaginationOptions;
    sort?: ISorting;
    search?: ISearch;
    filters?: IFilteringMultiple;
    hasPhiAccess: boolean;
}
