import { Express } from 'express';
import * as crypto from 'crypto';
import { extname } from 'path';
import { detectFile } from 'file-type-checker';

export const IMAGE_MIME_TYPES = [
	'image/png',
	'image/jpeg',
	'image/jpg',
	'image/webp',
	'image/gif',
	'text/csv',
	'application/zip',
	'application/msword',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'image/vnd.microsoft.icon',
	'application/json',
	'application/pdf',
	'image/svg+xml',
	'application/vnd.ms-excel',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];
export const PUBLIC_FOLDER = 'public';
export const UPLOADS_FOLDER = 'uploads';
export const UPLOADS_PATH = `${PUBLIC_FOLDER}/${UPLOADS_FOLDER}/`;
export const IMAGE_MAX_FILE_SIZE = 5000000;

export const formatDate = () => {
	const d = new Date();
	let month = '' + (d.getMonth() + 1);
	let day = '' + d.getDate();
	const year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('/');
};

export const randomString = (size = 16) => {
	return crypto.randomBytes(size).toString('hex');
};

export const generateFilename = (file: Express.Multer.File): string => {
	return `${Date.now()}-${String(randomString()).toLowerCase()}${extname(
		file.originalname,
	)}`;
};

export const generateFullUploadPath = (): string => {
	return `${UPLOADS_PATH}${formatDate()}`;
};

export const generateUploadPath = (): string => {
	return `${UPLOADS_FOLDER}/${formatDate()}`;
};

export const generateUploadFilePath = (file: Express.Multer.File): string => {
	return `${generateUploadPath()}${generateFilename(file)}`;
};

export const generateFullUploadPathByType = (): string => {
	return `${UPLOADS_PATH}/${formatDate()}`;
};

export const isNumber = (str: any): boolean => {
	if (typeof str !== 'string') {
		return false;
	}

	if (str.trim() === '') {
		return false;
	}

	return !Number.isNaN(Number(str));
};

export const hashString = (string: string) => {
	const hmac = crypto.createHmac('sha256', randomString());
	return hmac.update(string).digest('hex');
};

export const padNumber = (number: any, padding: number = 6) => {
	return String(number).padStart(padding, '0');
};

export const fileCanUpload = (fileBuffer: Buffer): boolean => {
	// Detect and validate file types by their signatures (magic numbers)
	// Link https://en.wikipedia.org/wiki/Magic_number_(programming)
	const detectedFile = detectFile(fileBuffer);
	if (
		detectedFile?.mimeType &&
		IMAGE_MIME_TYPES.includes(detectedFile?.mimeType)
	) {
		return true;
	}
	return false;
};
