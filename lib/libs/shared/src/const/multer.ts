import { IMAGE_MAX_FILE_SIZE, IMAGE_MIME_TYPES } from '../utils';
import { BadRequestException } from '@nestjs/common';
import { extname } from 'path';
import { ERRORS_DICTIONARY } from './errors';

// Multer upload options
export const multerOptionsAPIGateway = {
	// Enable file size limits
	limits: {
		fileSize: IMAGE_MAX_FILE_SIZE,
	},
	// Check the mimetypes to allow for upload
	fileFilter: async (req: any, file: any, cb: any) => {
		if (IMAGE_MIME_TYPES.includes(file.mimetype)) {
			// Allow storage of file
			cb(null, true);
		} else {
			// Reject file
			throw new BadRequestException({
				message: `Unsupported file type ${extname(file.originalname)}`,
				errorCode: ERRORS_DICTIONARY.FILE_UNSUPPORTED_FILE_MIMETYPE_EXCEPTION,
			});
		}
	},
};
