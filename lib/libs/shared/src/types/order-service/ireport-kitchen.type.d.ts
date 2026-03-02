export declare namespace IReportKitchen {
    interface IKitchenPerformanceRequest {
        branch_id?: number;
        from_date?: string;
        to_date?: string;
    }
    interface IKitchenPerformanceByHour {
        hour: string;
        avgPrepTimeMinutes: number;
        completedCount: number;
    }
    interface IKdsStateDistribution {
        state: string;
        label: string;
        color: string;
        count: number;
        percentage: number;
    }
    interface ITopDishPerformance {
        title: string;
        totalQuantity: number;
        avgPrepTimeMinutes: number;
        completedCount: number;
        canceledCount: number;
    }
    interface IServiceQuality {
        avgServingTimeMinutes: number;
        totalCompleted: number;
        totalCanceled: number;
        totalRecalled: number;
        completionRate: number;
        cancelRate: number;
        recallRate: number;
    }
    interface IKitchenStaffPerformance {
        staffId: number;
        completedItems: number;
        avgPrepTimeMinutes: number;
    }
    interface IKitchenReportData {
        generatedAt: string;
        shopId: number | string;
        branchId?: number | string | null;
        dateRange?: {
            from?: string;
            to?: string;
        };
        kitchenPerformanceByHour: IKitchenPerformanceByHour[];
        kdsStateDistribution: IKdsStateDistribution[];
        topDishPerformance: ITopDishPerformance[];
        serviceQuality: IServiceQuality;
        kitchenStaffPerformance: IKitchenStaffPerformance[];
        kpiSummary: {
            totalItemsToday: number;
            completedItemsToday: number;
            avgPrepTimeMinutes: number;
            kitchenEfficiency: number;
            priorityItemsCount: number;
        };
    }
}
