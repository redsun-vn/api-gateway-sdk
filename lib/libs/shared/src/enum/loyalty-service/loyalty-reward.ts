export enum LOYALTY_REWARD_TYPE_ENUM {
	PRODUCT = 'free_product',
	DISCOUNT = 'discount',
	SHIPPING = 'free_shipping',
	POINTS = 'points',
}

export enum LOYALTY_REWARD_DISCOUNT_MODE_ENUM {
	PERCENT = 'percent',
	PER_POINT = 'vnd_per_point',
	PER_ORDER = 'vnd_per_order',
}

export enum LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM {
	ORDER = 'order',
	CHEAPEST = 'cheapest_product',
	SPECIFIC = 'specific_product',
}
