export enum Status {
	ACTIVE = 'active',
	INACTIVE = 'inactive',
}

export enum ProductStatus {
	ACTIVE = 'active',
	INACTIVE = 'inactive',
	OUT_OF_STOCK = 'out_of_stock',
	DELETED = 'deleted',
}

export enum ProductType {
	NORMAL = 'normal',
	COMBO = 'combo',
	GIFT = 'gift',
	VIRTUAL = 'virtual',
	BUNDLED = 'bundle',
}

// loai dieu kien: tags, categories, products, uom
export enum ConditionType {
	TAG = 'tag',
	CATEGORY = 'category',
	PRODUCT = 'product',
	UOM = 'uom',
}

export enum CollectionType {
	MANUAL = 'manual',
	AUTO = 'auto',
}

export enum PriceBookRuleType {
	FIXED = 'fixed',
	DISCOUNT = 'discount',
	RECIPE = 'recipe',
}

export enum PriceBookRuleStayOn {
	ORTHER = 'orther',
	ORIGIN_PRICE = 'origin_price',
	SALE_PRICE = 'sale_price',
}

export enum PriceBookRuleReferentType {
	ALL = 'all',
	CATEGORY = 'category',
	PRODUCT = 'product',
	VARIANT = 'variant',
}

export enum Week {
	SUNDAY = 'Sunday',
	MONDAY = 'Monday',
	TUESDAY = 'Tuesday',
	WEDNESDAY = 'Wednesday',
	THURSDAY = 'Thursday',
	FRIDAY = 'Friday',
	SATURDAY = 'Saturday',
}

export enum UomType {
	BIGGER = 'bigger',
	REFERENT = 'referent',
	SMALLER = 'smaller',
}
