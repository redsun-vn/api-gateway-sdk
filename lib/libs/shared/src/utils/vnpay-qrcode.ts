/**
 * Validate if the date is match with format `yyMMddHHmm` or not
 * @param date The date to be validated
 * @returns True if the date is valid, false otherwise
 */
export function isValidVnpayQRCodeDateFormat(dtStr: string): boolean {
	// Biểu thức chính quy để kiểm tra định dạng
	const regex =
		/^(?:\d{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])$/;
	return regex.test(dtStr);
}
