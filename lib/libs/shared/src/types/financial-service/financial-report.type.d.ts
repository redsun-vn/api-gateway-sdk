export declare namespace IFinancialReport {
    interface IDateRangeQuery {
        shop_id: number;
        branch_id?: number;
        startDate: string;
        endDate: string;
        currency?: string;
    }
    interface IProfitLossReport {
        revenue: IRevenueSection;
        costOfGoodsSold: ICostSection;
        grossProfit: IProfitMetric;
        operatingExpenses: IOperatingExpensesSection;
        netProfit: IProfitMetric;
        period: IPeriodInfo;
    }
    interface IRevenueSection {
        total: number;
        salesRevenue: number;
        otherRevenue: number;
        breakdown: ILineItem[];
    }
    interface ICostSection {
        total: number;
        materials: number;
        directLabor: number;
        breakdown: ILineItem[];
    }
    interface IProfitMetric {
        amount: number;
        marginPercentage: number;
        changeFromPrevious?: number;
    }
    interface IOperatingExpensesSection {
        total: number;
        salesExpenses: number;
        adminExpenses: number;
        financialExpenses: number;
        breakdown: ILineItem[];
    }
    interface ICashFlowReport {
        operatingActivities: ICashFlowSection;
        investingActivities: ICashFlowSection;
        financingActivities: ICashFlowSection;
        netCashChange: number;
        openingBalance: number;
        closingBalance: number;
        period: IPeriodInfo;
    }
    interface ICashFlowSection {
        total: number;
        items: ILineItem[];
    }
    interface ILineItem {
        name: string;
        amount: number;
        categoryId?: number;
        percentage?: number;
    }
    interface IPeriodInfo {
        startDate: string;
        endDate: string;
        description: string;
    }
    interface IReceivableReport {
        totalReceivable: number;
        byAging: IAgingAnalysis;
        topDebtors: IDebtorInfo[];
        averageDso: number;
        period: IPeriodInfo;
    }
    interface IPayableReport {
        totalPayable: number;
        byAging: IAgingAnalysis;
        byCategory: ICategoryBreakdown[];
        averageDpo: number;
        upcomingPayments: IUpcomingPayment[];
        period: IPeriodInfo;
    }
    interface IAgingAnalysis {
        current: IAgingBucket;
        days31To60: IAgingBucket;
        days61To90: IAgingBucket;
        over90: IAgingBucket;
    }
    interface IAgingBucket {
        amount: number;
        count: number;
        percentage: number;
    }
    interface IDebtorInfo {
        partnerUuid: string;
        partnerName: string;
        amount: number;
        daysOverdue: number;
        status: string;
    }
    interface ICategoryBreakdown {
        categoryName: string;
        amount: number;
        percentage: number;
    }
    interface IUpcomingPayment {
        dueDate: string;
        rangeLabel: string;
        totalAmount: number;
        items: IPaymentItem[];
    }
    interface IPaymentItem {
        name: string;
        amount: number;
        partnerName?: string;
    }
    interface IProfitabilityRatios {
        grossProfitMargin: IRatio;
        netProfitMargin: IRatio;
        roa: IRatio;
        roe: IRatio;
    }
    interface ILiquidityRatios {
        currentRatio: IRatio;
        quickRatio: IRatio;
        inventoryTurnover: IRatio;
        daysSalesOutstanding: IRatio;
        daysPayableOutstanding: IRatio;
    }
    interface IRatio {
        value: number;
        changeFromPrevious?: number;
        status?: string;
        unit?: string;
    }
    interface IFinancialSummary {
        totalRevenue: number;
        grossProfit: number;
        netProfit: number;
        availableCash: number;
        totalReceivable: number;
        totalPayable: number;
        averageDso: number;
        averageDpo: number;
        period: IPeriodInfo;
    }
}
