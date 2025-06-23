/// <reference types="node" />
/// <reference types="multer" />
import { FileStatus } from '../const';
import { BaseResponse } from './common.type';
export declare namespace IFile {
    interface File {
        originalname: string;
        mimetype: string;
        size: number;
        filename: string;
        path: string;
        buffer: Buffer;
    }
    interface IBase {
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
    interface IReqUpload {
        branch_id?: number | null;
        parent_id?: number | null;
        fileUpload: Express.Multer.File;
    }
    interface IAdminReqUpload {
        user_id: string;
        parent_id?: number | null;
        fileUpload: Express.Multer.File;
    }
    interface IUpload extends IReqUpload {
        user_id: string;
        shop_id: number | null;
    }
    interface IUploadAdmin {
        fileUpload: Express.Multer.File;
        title: string;
        mime: string;
        ext: string;
        path: string;
        size: string | number;
        user_id: string;
        alt: string | null;
    }
    interface IUploadAdminToService extends Omit<IUploadAdmin, 'fileUpload'> {
        buffer: ArrayBuffer;
    }
    interface IUploadToService extends IFile.IBase {
        parent_id?: string | number | null;
        buffer: ArrayBuffer;
    }
    interface IResponse extends IFile.IBase, BaseResponse {
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
