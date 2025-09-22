/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';
import { IPrintTemplate } from './iprint_template';

export namespace ICategoryPrintTemplate {
	export interface ICreate {
		name: string;
		type: string;
		active?: boolean;
	}

	export interface IUpdate extends Partial<ICreate> {}

	export interface ICategoryPrintTemplateResponse extends BaseResponse {
		name: string;
		type: string;
		active: boolean;
		printTemplate?: IPrintTemplate.IPrintTemplateResponse[];
	}
}
