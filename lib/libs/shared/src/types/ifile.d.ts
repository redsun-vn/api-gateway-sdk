/// <reference types="multer" />
import { FileStatus } from '../const';
export declare namespace IFile {
    interface IBase {
        title: string;
        mime: string;
        ext: string;
        path: string;
        size: string | number;
        user_id: string;
        shop_id: string | number | null;
        branch_id: string | number | null;
        alt: string | null;
        caption: string | null;
        width: string | number | null;
        height: string | number | null;
        metadata?: null | {
            [key: string]: string | string[] | boolean | number | undefined;
        };
    }
    interface IUpload {
        user_id: string;
        shop_id: number | null;
        branch_id: number | null;
        parent_id: number | null;
        fileUpload: Express.Multer.File;
    }
    interface IUploadToService extends IFile.IBase {
        parent_id?: string | number | null;
        buffer: ArrayBuffer;
    }
    interface IResponse extends IFile.IBase {
        id: string | number;
        status: FileStatus;
        url?: string | null | undefined;
        is_folder: boolean;
        parent?: unknown;
        createdAt: string;
        updatedAt: string;
    }
}
