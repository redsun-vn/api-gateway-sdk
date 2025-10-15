/// <reference types="node" />
/// <reference types="multer" />
import { FileSpaceType, FileStatus } from '../const';
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
        space_id?: number | null;
        fileUpload: Express.Multer.File;
    }
    interface IAdminReqUpload {
        user_id: string;
        parent_id?: number | null;
        fileUpload: Express.Multer.File;
        shop_id?: number | null;
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
        space_id?: string | number | null;
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
export declare namespace ISpace {
    interface IBase {
        type?: FileSpaceType;
        name?: string;
        description?: string | null;
        owner_id?: string;
        shop_id?: number | null;
        parent_id?: number | null;
        storage_limit?: number | null;
        storage_used?: number | null;
        is_active?: boolean | null;
        is_limited?: boolean | null;
    }
    interface ICreate extends IBase {
        type?: FileSpaceType;
    }
    interface IUpdate extends Partial<ICreate> {
        id: number;
    }
    interface IResponse extends BaseResponse {
        type: FileSpaceType;
        name: string;
        description?: string | null;
        owner_id: string;
        shop_id: number | null;
        parent_id?: number | null;
        storage_limit?: number | null;
        storage_used?: number | null;
        is_active?: boolean;
        is_limited?: boolean;
    }
}
