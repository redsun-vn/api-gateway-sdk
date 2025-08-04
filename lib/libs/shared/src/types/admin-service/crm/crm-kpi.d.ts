import { KPI_HIERARCHY_LEVEL, KPI_PERIOD, KPI_STATUS, KPI_TYPE, KPI_UNIT } from '../../../enum';
import { BaseResponse } from '../../common.type';
export declare namespace ICRMKPI {
    interface ICreate {
        name: string;
        code?: string;
        description?: string;
        type: string & KPI_TYPE;
        period: string & KPI_PERIOD;
        unit?: string & KPI_UNIT;
        targetValue: number;
        weight?: number;
        startDate: string;
        endDate: string;
        hierarchyLevel: string & KPI_HIERARCHY_LEVEL;
        parentKpiId?: number;
        teamId?: number;
        userId?: number;
        roleRequired?: string;
        autoCalculate?: boolean;
        calculationFormula?: string;
        dataSource?: string;
        warningThreshold?: number;
        criticalThreshold?: number;
        tags?: string[];
        customFields?: Record<string, any>;
        cascadeToChildren?: boolean;
    }
    interface IUpdate {
        name?: string;
        description?: string;
        targetValue?: number;
        actualValue?: number;
        weight?: number;
        status?: string;
        autoCalculate?: boolean;
        calculationFormula?: string;
        dataSource?: string;
        warningThreshold?: number;
        criticalThreshold?: number;
        tags?: string[];
        customFields?: Record<string, any>;
        notes?: string;
    }
    interface IResponse extends BaseResponse {
        id: number | string;
        name: string;
        code?: string | null;
        description: string | null;
        type: string & KPI_TYPE;
        status: string & KPI_STATUS;
        period: string & KPI_PERIOD;
        unit: string & KPI_UNIT;
        targetValue: number | string;
        actualValue: number | string;
        achievementRate: number | string;
        weight: number | string;
        startDate: string | null;
        endDate: string | null;
        hierarchyLevel: string & KPI_HIERARCHY_LEVEL;
        parentKpiId: number | null;
        teamId: number | null;
        userId: number | null;
        team: any | null;
        user: any | null;
        parentKpi: any | null;
        childKpis?: any[] | null;
        createdAt: string;
        updatedAt: string;
    }
    interface IFilter {
        hierarchyLevel?: string;
        teamId?: number;
        userId?: number;
        type?: string;
        status?: string;
        period?: string;
        fiscalYear?: number;
        fiscalQuarter?: number;
        fiscalMonth?: number;
    }
    interface IHierarchyResponse {
        id: number | string;
        name: string;
        type: string;
        targetValue: number | string;
        actualValue: number | string;
        achievementRate: number | string;
        hierarchyLevel: string;
        teamName?: string | null;
        userName?: string | null;
        children?: IHierarchyResponse[] | null;
    }
    interface IKPIStats {
        totalKPIs?: number | string;
        activeKPIs?: number | string;
        averageAchievementRate?: number | string;
        onTrackKPIs?: number | string;
        atRiskKPIs?: number | string;
        overdueKPIs?: number | string;
    }
    interface CascadeKPIRequest {
        targetTeamIds?: number[];
        targetUserIds?: number[];
    }
    interface IUpdateProgressRequest {
        actualValue: number;
        notes?: string;
    }
    interface IDashboardAnalytics {
        stats: IKPIStats;
        topPerformers: ITopPerformer[];
        needingAttention: IResponse[];
        performanceDistribution: IPerformanceDistribution;
        trends: ITrendData[];
    }
    interface ITopPerformer {
        id: number;
        name: string;
        achievementRate: number;
        targetValue: number;
        actualValue: number;
        hierarchyLevel: string;
        userName?: string;
        userEmail?: string;
        teamName?: string;
    }
    interface IPerformanceDistribution {
        excellent: number;
        good: number;
        warning: number;
        critical: number;
        total: number;
    }
    interface ITrendData {
        period: string;
        avgAchievementRate: number;
        totalTarget: number;
        totalActual: number;
    }
    interface IBulkUpdateResult {
        successful: Array<{
            id: string;
            oldValue: number;
            newValue: number;
            achievementRate: number;
        }>;
        failed: Array<{
            id: string;
            reason: string;
        }>;
        totalProcessed: number;
    }
    interface ITeamComparison {
        teamId: number;
        teamName: string;
        avgAchievementRate: number;
        totalActual: number;
        totalTarget: number;
        totalKPIs: number;
        efficiency: number;
        ranking: number;
    }
    interface IExportResult {
        filename: string;
        data: any;
        downloadUrl: string;
    }
    interface IPerformanceAlert {
        type: 'critical' | 'warning' | 'overdue';
        kpi: IResponse;
        achievementRate?: number;
        threshold?: number;
        message: string;
        alertTime: string;
    }
    interface IKPICalculationContext {
        kpiId: number;
        period: string;
        dataSource: string;
        formula: string;
        dependencies: number[];
    }
}
