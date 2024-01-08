export declare namespace IPricebookItem {
    interface IPricebookItemResponse {
        shop_id: string | number;
        price_book_id: string | number;
        variant_id: string | number;
        variantPrice: number | string;
        variantOriginPrice: number | string;
        salePrice: number | string | null;
        priceBookName: string | null;
        foundAtWithoutTz: string | null;
        ruleReferentValue: string | null;
        ruleDaysOfTheWeek: string | null;
        ruleEffectiveHour: string | null;
        ruleExpiredAt: string | null;
        ruleEffectiveAt: string | null;
    }
}
