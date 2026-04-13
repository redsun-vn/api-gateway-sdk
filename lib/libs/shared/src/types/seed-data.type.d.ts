import { CATEGORY_BUSINESS_TYPE_ENUMS, SeedDataModule } from '../enum';
export declare namespace ISeedData {
    interface SeedRequestBody {
        business_type: CATEGORY_BUSINESS_TYPE_ENUMS;
        modules?: SeedDataModule[];
        payload?: {
            staffId?: number;
            branchId?: number;
            warehouseId?: number;
            dateFrom?: string;
            dateTo?: string;
        };
    }
}
