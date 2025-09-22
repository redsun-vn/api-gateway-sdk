/* eslint-disable @typescript-eslint/no-namespace */
export namespace IGlobalConfig {
	export interface ICreate {
		fieldKey: string;
		fieldValue?: string;
		fieldType?: string;
		companyId?: string;
	}
	export interface IDataCreate {
		data: ICreate[];
	}
	export interface IResponse {
		id: number | string;
		fieldKey: string;
		fieldValue?: string;
		fieldType?: string;
		companyId?: string;
	}
}
