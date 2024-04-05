export declare namespace IGlobalConfig {
    interface ICreate {
        fieldKey: string;
        fieldValue?: string;
        fieldType?: string;
    }
    interface IDataCreate {
        data: ICreate[];
    }
    interface IResponse {
        id: number | string;
        fieldKey: string;
        fieldValue?: string;
        fieldType?: string;
    }
}
