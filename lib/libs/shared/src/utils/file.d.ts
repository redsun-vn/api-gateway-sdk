/// <reference types="node" />
import { Express } from 'express';
export declare const IMAGE_MIME_TYPES: string[];
export declare const PUBLIC_FOLDER = "public";
export declare const UPLOADS_FOLDER = "uploads";
export declare const UPLOADS_PATH = "public/uploads/";
export declare const IMAGE_MAX_FILE_SIZE = 5000000;
export declare const formatDate: () => string;
export declare const randomString: (size?: number) => string;
export declare const generateFilename: (file: Express.Multer.File) => string;
export declare const generateFullUploadPath: () => string;
export declare const generateUploadPath: () => string;
export declare const generateUploadFilePath: (file: Express.Multer.File) => string;
export declare const generateFullUploadPathByType: () => string;
export declare const isNumber: (str: any) => boolean;
export declare const hashString: (string: string) => string;
export declare const padNumber: (number: any, padding?: number) => string;
export declare const fileCanUpload: (fileBuffer: Buffer) => boolean;
