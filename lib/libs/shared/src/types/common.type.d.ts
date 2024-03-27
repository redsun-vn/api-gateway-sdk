import { tags } from 'typia';
export type CustomDataType = {
    [key: string]: string | string[] | boolean | number | undefined;
};
export interface BaseResponse {
    id: number | string | null;
    createdAt: string | null;
    updatedAt: string | null;
    deletedAt?: string | null;
}
export interface ISorting {
    property: string;
    direction: string;
}
export interface IFiltering {
    property: string;
    rule: string;
    value: string;
}
export interface IFilteringMultiple {
    andFilter: IFiltering[];
    orFilter: IFiltering[];
}
export interface ISearch {
    s: string;
    properties: string[];
}
export interface IPaginationOptions {
    limit: number | string;
    page: number | string;
}
export interface ISearchOptions {
    pagination?: IPaginationOptions;
    sort?: ISorting;
    filter?: IFiltering;
    filters?: IFilteringMultiple;
    search?: ISearch;
    shopId?: string;
}
export declare namespace IPage {
    interface IRequestFindAll {
        pagination: IPaginationOptions;
        query?: CustomDataType;
    }
    interface IMeta {
        totalItems: number & tags.Type<'uint64'>;
        itemCount: number & tags.Type<'uint64'>;
        itemsPerPage: number & tags.Type<'uint64'>;
        totalPages: number & tags.Type<'uint64'>;
        currentPage: number & tags.Type<'uint64'>;
    }
}
export interface IResponsePagination<T> {
    items: T[];
    meta: IPage.IMeta;
    links?: unknown;
}
export interface IResponse<T> {
    errorCode?: number | string | null;
    data: T;
    message?: string | Array<string>;
    statusCode?: number & tags.Type<'uint64'>;
}
export declare enum SORT_TYPE {
    'DESC' = "desc",
    'ASC' = "acs"
}
export type FindAllResponse<T> = {
    count: number;
    items: T[];
};
export type SortParams = {
    sort_by: string;
    sort_type: SORT_TYPE;
};
export type PaginateParams = {
    page: number;
    limit: number;
};
export interface BaseProfile {
    phone?: string & tags.Pattern<'^(0[0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$'>;
    country?: string;
    province?: string;
    ward?: string;
    district?: string;
    city?: string;
    state?: string;
    address1?: string;
    email?: string & tags.Format<'email'>;
}
export interface BaseProfileResponse {
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
export interface IQuery {
    page?: number;
    limit?: number;
    filter?: string;
    filters?: string;
    search?: string;
    sort?: string;
}
