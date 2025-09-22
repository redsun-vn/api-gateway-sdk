/* eslint-disable @typescript-eslint/no-namespace */
import { FileStatus } from '../const';
import { BaseResponse } from './common.type';

export namespace IFile {
	export interface File {
		/** Name of the file on the uploader's computer. */
		originalname: string;
		/** Value of the `Content-Type` header for this file. */
		mimetype: string;
		/** Size of the file in bytes. */
		size: number;
		/** `DiskStorage` only: Name of this file within `destination`. */
		filename: string;
		/** `DiskStorage` only: Full path to the uploaded file. */
		path: string;
		/** `MemoryStorage` only: A Buffer containing the entire file. */
		buffer: Buffer;
	}

	export interface IBase {
		title: string;
		mime: string;
		ext: string;
		path: string;
		size: string | number;
		user_id: string;
		shop_id?: string | number | null;
		branch_id?: string | number | null;
		alt: string | null;
		caption: string | null;
		width: string | number | null;
		height: string | number | null;
		metadata?: null | {
			[key: string]: string | string[] | boolean | number | undefined;
		};
	}

	export interface IReqUpload {
		branch_id?: number | null;
		parent_id?: number | null;
		fileUpload: Express.Multer.File;
	}

	export interface IAdminReqUpload {
		user_id: string;
		parent_id?: number | null;
		fileUpload: Express.Multer.File;
	}

	export interface IUpload extends IReqUpload {
		user_id: string;
		shop_id: number | null;
	}

	export interface IUploadAdmin {
		fileUpload: Express.Multer.File;
		title: string;
		mime: string;
		ext: string;
		path: string;
		size: string | number;
		user_id: string;
		alt: string | null;
	}

	export interface IUploadAdminToService
		extends Omit<IUploadAdmin, 'fileUpload'> {
		buffer: ArrayBuffer;
	}

	export interface IUploadToService extends IFile.IBase {
		parent_id?: string | number | null;
		buffer: ArrayBuffer;
	}
	export interface IResponse extends IFile.IBase, BaseResponse {
		status: FileStatus;
		parent_id?: string | number | null;
		url?: string | null | undefined;
		is_folder: boolean;
		slug?: string;
		parent?: IResponse | null;
	}
}

export interface EditorJsUploadResponse {
	success: number;
	file: {
		url: string;
		[key: string]: any;
	};
}

export interface EditorJsUrlRequest {
	url: string;
	additionalRequestData?: any;
}

export interface EditorJsUploadInput {
	shop_id: number;
	user_id: string;
	branch_id?: number;
}
