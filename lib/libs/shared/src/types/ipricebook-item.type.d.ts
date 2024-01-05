export declare namespace IPricebookItem {
    interface IPricebookItemResponse {
        shop_id: string | number;
        price_book_id: string | number;
        price_book_rule_id: string | number;
        variant_id: string | number;
        referent_id?: string | number | null;
        variantPrice: number | string;
        variantOriginPrice: number | string;
        salePrice: number | string | null;
        priceBookName: string | null;
        foundAt: string | null;
        foundDate: string | null;
        priceBookEffectiveAt: string | null;
        priceBookExpiredAt: string | null;
        referentType: string | null;
        ruleReferentValue: string | null;
        ruleEffectiveHour: string | null;
        ruleRecipeFee: string | number;
        ruleType: string | null;
        ruleStayOn: string | null;
        ruleExpiredAt: string | null;
        ruleEffectiveAt: string | null;
        ruleValue: string | number;
    }
}
