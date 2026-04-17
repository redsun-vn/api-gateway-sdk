export interface IIcd10Code {
    code: string;
    name: string;
}
export interface IIcd10ListQuery {
    page?: number;
    limit?: number;
}
export interface IIcd10SearchQuery {
    q: string;
}
export interface IIcd10AllResponse {
    items: IIcd10Code[];
    total: number;
    etag: string;
}
export interface IIcd10PaginationMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}
export interface IIcd10ListData {
    items: IIcd10Code[];
    meta: IIcd10PaginationMeta;
}
