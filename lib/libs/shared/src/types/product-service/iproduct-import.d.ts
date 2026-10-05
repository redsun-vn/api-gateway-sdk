export declare namespace IProductImport {
    type State = 'parsing' | 'previewed' | 'committed' | 'processing' | 'done' | 'failed' | 'expired';
    type PreviewTab = 'errors' | 'warnings' | 'toCreate' | 'products';
    interface IPreviewQuery {
        tab: PreviewTab;
        page?: number;
        limit?: number;
    }
    interface IPreviewResponse {
        importId: string;
        state: 'parsing';
    }
    interface IStatus {
        importId: string;
        state: State;
        failedReason?: string;
        totalRows: number;
        validRows: number;
        processedRows: number;
        successRows: number;
        failedRows: number;
        counts: {
            errors: number;
            warnings: number;
            toCreate: number;
            products: number;
        };
    }
    interface IRowIssue {
        row: number;
        column: string;
        value: string;
        message: string;
        code: string;
    }
    interface IToCreateItem {
        kind: 'category' | 'brand' | 'tag' | 'supplier';
        name: string;
        rows: number[];
    }
    interface IProductItem {
        name: string;
        sku: string;
        category: string;
        variantCount: number;
        rows: number[];
        action: 'create' | 'update';
    }
    type ITabItem = IRowIssue | IToCreateItem | IProductItem;
    interface IPreviewPage {
        items: ITabItem[];
        total: number;
        stored: number;
        page: number;
        limit: number;
    }
    interface ICommitResponse {
        importId: string;
        state: State;
    }
    interface IErrorFile {
        fileName: string;
        file: string;
    }
}
