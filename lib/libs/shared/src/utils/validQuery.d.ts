import { IFiltering, IFilteringMultiple, IPaginationOptions, IQuery, ISearch, ISorting } from '../types';
export declare class ValidQuery {
    private query;
    constructor(query: IQuery);
    private handleReplacePrefixByParams;
    private parseConditionsFilter;
    private validFilterQuery;
    private validParams;
    sort(params: string[]): ISorting;
    pagination(): IPaginationOptions;
    search(params: string[]): ISearch | undefined;
    filter(params: string[]): IFiltering | undefined;
    filters(params: string[]): IFilteringMultiple | undefined;
    groupBy(groups: string[]): string | undefined;
}
