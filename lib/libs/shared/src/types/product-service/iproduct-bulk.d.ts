import { tags } from 'typia';
import { IProduct } from './iproduct';
export declare namespace IProductBulk {
    type ProductIds = string[] & tags.MinItems<1> & tags.MaxItems<100>;
    interface IBulkUpdateStatus {
        ids: ProductIds;
        active: boolean;
    }
    interface IBulkAssignCategories {
        ids: ProductIds;
        categoryIds: (number & tags.Type<'uint32'>)[] & tags.MinItems<1> & tags.MaxItems<50>;
    }
    interface IBulkAssignSalesChannels {
        ids: ProductIds;
        salesChannel: IProduct.ISalesChannel[] & tags.MinItems<1> & tags.MaxItems<20>;
    }
    interface IBulkDelete {
        ids: ProductIds;
    }
    interface IBulkError {
        id: string;
        name: string | null;
        message: string;
        errorCode?: string;
    }
    interface IBulkResult {
        total: number;
        successIds: string[];
        errors: IBulkError[];
        esSyncFailed?: boolean;
    }
}
