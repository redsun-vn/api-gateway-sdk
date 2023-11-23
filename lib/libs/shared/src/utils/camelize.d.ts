type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}` ? `${P1}${Uppercase<P2>}${CamelCase<P3>}` : S;
type CamelizeObject<T, S = false> = {
    [K in keyof T as Uncapitalize<CamelCase<string & K>>]: T[K] extends Date ? T[K] : T[K] extends RegExp ? T[K] : T[K] extends Array<infer U> ? U extends unknown | undefined ? Array<CamelizeObject<U>> : T[K] : T[K] extends unknown | undefined ? S extends true ? T[K] : CamelizeObject<T[K]> : T[K];
};
export type Camelize<T, S = false> = T extends Array<infer U> ? Array<CamelizeObject<U, S>> : CamelizeObject<T, S>;
export declare function camelize<T extends Record<string, any>, S extends boolean = false>(obj: T, shallow?: S): T extends string ? string : Camelize<T, S>;
export {};
