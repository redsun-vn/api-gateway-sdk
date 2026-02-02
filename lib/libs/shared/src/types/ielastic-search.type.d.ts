export declare namespace IElastic {
    type CustomDataType = {
        [key: string]: unknown;
    };
    interface BaseResponse {
        id: number | string;
        createdAt: string;
        updatedAt: string;
        deletedAt?: string;
        createdById?: number | string | null;
        updatedById?: number | string | null;
    }
    interface IResponse<T> {
        errorCode?: number | string | null;
        data: T;
        message?: string | Array<string>;
        statusCode?: number;
    }
    interface IBulkIndex {
        _index: string;
        _id: number | string;
    }
    interface IBulkInputObject {
        id: number | string;
        [key: string]: any;
    }
    interface IBulkOutputData {
        index: string;
        body: unknown;
    }
    interface IRequestBase<T> {
        index: string;
        type?: string;
        body: T;
    }
    interface BaseProfileResponse {
        phone?: string | null;
        country?: string | null;
        province?: string | null;
        ward?: string | null;
        district?: string | null;
        city?: string | null;
        state?: string | null;
        address1?: string | null;
        email?: string | null;
    }
    interface ISorting {
        property: string;
        direction: string;
    }
    interface IFiltering {
        property: string;
        rule: string;
        value: string;
    }
    interface IFilteringMultiple {
        andFilter: IFiltering[];
        orFilter: IFiltering[];
    }
    interface ISearch {
        s: string;
        properties: string[];
    }
    interface IPaginationOptions {
        limit: number | string;
        page: number | string;
    }
    interface ISeachOptions {
        pagination?: IPaginationOptions;
        sort?: ISorting;
        filter?: IFiltering;
        filters?: IFilteringMultiple;
        search?: ISearch;
        shopId?: string;
        script?: string;
        scriptShould?: string;
    }
    namespace IPage {
        interface IMeta {
            totalItems: number;
            itemCount: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
        }
    }
    interface IResponsePagination<T> {
        items: T[];
        meta: IPage.IMeta;
    }
    interface IResponseSearch {
        _index: string;
        _id: string;
        _score: unknown | null;
        _source: unknown;
    }
}
