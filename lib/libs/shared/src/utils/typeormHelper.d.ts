import { IFiltering, ISorting } from '../types';
export declare const getOrder: (sort?: ISorting) => {
    [x: string]: string;
};
export declare const getWhere: (filter?: IFiltering) => {
    [x: string]: import("typeorm").FindOperator<any>;
} | {
    [x: string]: string;
} | undefined;
