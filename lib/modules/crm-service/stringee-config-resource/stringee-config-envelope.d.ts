export interface IStringeeEnvelope<T> {
    code: number;
    message: string;
    data: T;
}
export declare function stringeeEnvelope<T>(data: T): IStringeeEnvelope<T>;
