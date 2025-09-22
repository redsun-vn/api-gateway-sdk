export const parseToken = (token: string): any => {
	if (!token || typeof token !== 'string') {
		return null;
	}

	const parts = token.split('.');
	if (parts.length !== 3 || !parts[1]) {
		return null;
	}

	try {
		return JSON.parse(Buffer.from(parts[1], 'base64').toString());
	} catch (error) {
		return null;
	}
};

export const getKeyCacheStaffByShop = (
	staffId: string,
	shopId: string,
): string => {
	return `cache:StaffByShop:${shopId}:${staffId}`;
};

export const getKeyCacheUserDeviceByShop = (
	shopId: string,
	staffId: string,
): string => {
	return `cache:UserDeviceByShop:${shopId}:${staffId}`;
};
