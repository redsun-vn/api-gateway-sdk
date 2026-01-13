export declare enum ReportPeriod {
    DAY = "day",
    WEEK = "week",
    MONTH = "month",
    QUARTER = "quarter",
    YEAR = "year",
    CUSTOM = "custom"
}
export declare enum ReportGroupBy {
    PRODUCT = "product",
    CATEGORY = "category",
    BRAND = "brand",
    TYPE = "type"
}
export declare enum ReportMetric {
    REVENUE = "revenue",
    PROFIT = "profit",
    QUANTITY = "quantity"
}
export declare namespace IReportProduct {
    interface IDateRangeFilter {
        startDate?: Date;
        endDate?: Date;
        period?: 'day' | 'week' | 'month' | 'quarter' | 'year' | 'custom';
    }
    interface IShopFilter {
        shopId: number;
    }
    interface IBaseReportFilter extends IShopFilter, IDateRangeFilter {
    }
    interface ICategoryDistributionRequest extends IBaseReportFilter {
        includeInactive?: boolean;
    }
    interface ICategoryDistributionItem {
        categoryId: number | string;
        categoryName: string;
        icon?: string | null;
        productCount: number;
        totalRevenue: number;
        percentage: number;
        color?: string | null;
    }
    interface ICategoryDistributionResponse {
        items: ICategoryDistributionItem[];
        totalProducts: number;
        totalCategories: number;
        totalRevenue: number;
        generatedAt: string | null;
    }
    enum ProductLifecycleStage {
        GROWTH = "growth",
        MATURITY = "maturity",
        DECLINE = "decline",
        REPLACEMENT = "replacement"
    }
    interface IProductLifecycleRequest extends IBaseReportFilter {
        growthThreshold?: number;
        declineThreshold?: number;
        replacementThreshold?: number;
    }
    interface IProductLifecycleItem {
        productId: number | string;
        productName: string;
        sku: string;
        barcode?: string;
        icon?: string | null;
        stage: ProductLifecycleStage;
        currentSales: number;
        previousSales: number;
        growthRate: number;
        createdAt: Date | string;
        daysSinceCreation: number;
    }
    interface IProductLifecycleSummary {
        stage: ProductLifecycleStage;
        stageName: string;
        productCount: number;
        percentage: number;
        color: string | null;
    }
    interface IProductLifecycleResponse {
        summary: IProductLifecycleSummary[];
        products: IProductLifecycleItem[];
        totalProducts: number;
        generatedAt: string | null;
    }
    enum ProfitabilityLevel {
        HIGH = "high",
        MEDIUM = "medium",
        LOW = "low"
    }
    interface IProfitabilityRequest extends IBaseReportFilter {
        groupBy: 'product' | 'category';
        highProfitThreshold?: number;
        lowProfitThreshold?: number;
    }
    interface IProductProfitabilityItem {
        productId: number | string;
        productName: string;
        sku: string;
        categoryId?: number | string;
        categoryName?: string;
        icon?: string | null;
        revenue: number;
        cost: number;
        profit: number;
        profitMargin: number;
        level: ProfitabilityLevel;
        quantitySold: number;
    }
    interface ICategoryProfitabilityItem {
        categoryId: number | string;
        categoryName: string;
        icon?: string | null;
        productCount: number;
        totalRevenue: number;
        totalCost: number;
        totalProfit: number;
        avgProfitMargin: number;
        level: ProfitabilityLevel;
    }
    interface IProfitabilitySummary {
        level: ProfitabilityLevel;
        levelName: string;
        productCount: number;
        percentage: number;
        thresholdDescription: string;
        color: string | null;
    }
    interface IScatterDataPoint {
        x: number;
        y: number;
        productId?: number | string;
        productName?: string;
    }
    interface IProfitabilityByProductResponse {
        summary: IProfitabilitySummary[];
        products: IProductProfitabilityItem[];
        scatterData: IScatterDataPoint[];
        totalProducts: number;
        totalRevenue: number;
        totalProfit: number;
        avgProfitMargin: number;
        generatedAt: string | null;
    }
    interface IProfitabilityByCategoryResponse {
        summary: IProfitabilitySummary[];
        categories: ICategoryProfitabilityItem[];
        scatterData: IScatterDataPoint[];
        totalCategories: number;
        totalRevenue: number;
        totalProfit: number;
        avgProfitMargin: number;
        generatedAt: string | null;
    }
    type IProfitabilityResponse = IProfitabilityByProductResponse | IProfitabilityByCategoryResponse;
    type IProductOverviewRequest = IBaseReportFilter;
    interface IProductOverviewResponse {
        totalProducts: number;
        activeProducts: number;
        newProductsThisMonth: number;
        topSellingCount: number;
        lowStockCount: number;
        avgProfitMargin: number;
        profitMarginChange: number;
        generatedAt: string | null;
    }
    interface IProductPerformanceRequest extends IBaseReportFilter {
        groupBy: 'category' | 'brand' | 'type';
        metric: 'revenue' | 'profit' | 'quantity';
    }
    interface IPerformanceItem {
        id: number | string;
        name: string;
        value: number;
        color: string | null;
    }
    interface IProductPerformanceResponse {
        items: IPerformanceItem[];
        totalValue: number;
        generatedAt: string | null;
    }
    interface ITopSellingRequest extends IBaseReportFilter {
        limit?: number;
    }
    interface BaseReportDto {
        shopId: number;
        startDate?: Date;
        endDate?: Date;
        period?: ReportPeriod;
    }
    interface CategoryDistributionRequest extends BaseReportDto {
        includeInactive?: boolean;
    }
    interface ProductLifecycleRequest extends BaseReportDto {
        growthThreshold?: number;
        declineThreshold?: number;
        replacementThreshold?: number;
    }
    interface ProfitabilityRequest extends BaseReportDto {
        groupBy: 'product' | 'category';
        highProfitThreshold?: number;
        lowProfitThreshold?: number;
    }
    type ProductOverviewRequest = BaseReportDto;
    interface ProductPerformanceRequest extends BaseReportDto {
        groupBy?: 'category' | 'brand' | 'type';
        metric?: 'revenue' | 'profit' | 'quantity';
    }
    interface BaseReportQuery {
        shopId?: string;
        startDate?: string;
        endDate?: string;
        period?: ReportPeriod;
    }
    interface CategoryDistributionQuery extends BaseReportQuery {
        includeInactive?: string;
    }
    interface ProductLifecycleQuery extends BaseReportQuery {
        growthThreshold?: string;
        declineThreshold?: string;
        replacementThreshold?: string;
    }
    interface ProfitabilityQuery extends BaseReportQuery {
        groupBy?: string;
        highProfitThreshold?: string;
        lowProfitThreshold?: string;
    }
    type ProductOverviewQuery = BaseReportQuery;
    interface ProductPerformanceQuery extends BaseReportQuery {
        groupBy?: string;
        metric?: string;
    }
}
