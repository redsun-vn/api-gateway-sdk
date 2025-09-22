// import * as crypto from 'node:crypto';
// import slugify from 'slugify';
import { customAlphabet } from 'nanoid';
// export const autoGenerateCode = (
// 	prefix: string,
// 	shopId: string,
// 	name: string,
// ): string => {
// 	const randomByte = crypto.randomBytes(64).toString('hex'); // Generate 6 bytes of randomness
// 	const trimName = name.replace(/\s/g, '').toLowerCase();
// 	const stringNoAccents = slugify(trimName, { replacement: '', locale: 'en' });
// 	const str = stringNoAccents.substring(
// 		stringNoAccents.length / 2,
// 		stringNoAccents.length / 2 + 2,
// 	); // random string
// 	return `${prefix}${shopId}${str}${randomByte}`.substring(0, 16).toUpperCase(); // Trim to 16 characters
// };

export const autoGenerateCode = (
	prefix: string,
	shopId: string,
	customText = '',
	length = 7,
) => {
	const customTextNotWhiteSpace = customText.replaceAll(' ', '');
	const text =
		`${shopId}A0123456789BCDEFGHIJKLMNOPQRSTUVWXYZ${customTextNotWhiteSpace.replace(
			/[^\w\s]/gi,
			'',
		)}`
			.substring(0, 250)
			.toUpperCase(); // remove all special characters

	const nanoid = customAlphabet(text, length);
	const randomByte = nanoid();

	return `${prefix}${randomByte}`;
};
