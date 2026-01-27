export declare namespace IDashboardReport {
    interface IPartnerDashboard {
        satisfactionTrend: ISatisfactionTrendItem;
        customerAnalysis: ICustomerAnalysis;
    }
    interface ISatisfactionTrendItem {
        data: Array<{
            month: string;
            avgRating: number;
            count: number;
        }>;
        summary: {
            totalMonths: number;
            overallAvg: number;
        };
    }
    interface ICustomerAnalysis {
        data: Array<{
            level: string;
            customerCount: number;
            totalPoints: number;
            availablePoints: number;
            avgPoints: number;
        }>;
        summary: {
            totalCustomers: number;
            totalLevels: number;
        };
    }
}
