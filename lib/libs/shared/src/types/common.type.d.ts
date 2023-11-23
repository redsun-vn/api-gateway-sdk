import { tags } from 'typia';
export type CustomDataType = {
    [key: string]: string | string[] | boolean | number | undefined;
};
export interface BaseResponse {
    id: number | string | null;
    createdAt: Date | string | null;
    updatedAt: Date | string | null;
    deletedAt?: Date | string | null;
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
    search?: ISearch;
    shopId?: string;
}
export declare namespace IPage {
    interface IRequestFindAll {
        pagination: IPaginationOptions;
        query?: CustomDataType;
    }
    interface IMeta {
        totalItems: number & tags.Type<'uint32'>;
        itemCount: number & tags.Type<'uint32'>;
        itemsPerPage: number & tags.Type<'uint32'>;
        totalPages: number & tags.Type<'uint32'>;
        currentPage: number & tags.Type<'uint32'>;
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
    statusCode?: number & tags.Type<'uint32'>;
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
    city?: string;
    state?: string;
    address1?: string;
    email?: string & tags.Format<'email'>;
}
export interface BaseProfileResponse {
    phone?: string | null;
    country?: string | null;
    province?: string | null;
    city?: string | null;
    state?: string | null;
    address1?: string | null;
    email?: string | null;
}
