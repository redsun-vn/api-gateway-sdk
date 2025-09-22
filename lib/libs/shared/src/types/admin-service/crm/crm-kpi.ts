/* eslint-disable @typescript-eslint/no-namespace */

import {
	KPI_HIERARCHY_LEVEL,
	KPI_PERIOD,
	KPI_STATUS,
	KPI_TYPE,
	KPI_UNIT,
} from '../../../enum';
import { BaseResponse } from '../../common.type';
import { IAdminDepartment } from '../iadmin-department.type';
import { IAdminUser } from '../iuser';
import { ICRMTeam } from './team';

export namespace ICRMKPI {
	export interface ICreate {
		name: string;
		code?: string;
		description?: string;
		type: string & KPI_TYPE;
		period: string & KPI_PERIOD;
		unit?: string & KPI_UNIT;
		targetValue?: number;
		actualValue?: number;
		weight?: number;
		startDate: string;
		endDate: string;
		fiscalYear?: number;
		fiscalQuarter?: number;
		fiscalMonth?: number;
		hierarchyLevel: string & KPI_HIERARCHY_LEVEL;
		parentKpiId?: number;
		teamId?: number;
		userId?: number;
		departmentId?: number;
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

	export interface IUpdate {
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
	export interface IResponse extends BaseResponse {
		name: string; // Tên KPI
		code?: string | null; // Mã code của KPI (tùy chọn)
		description: string | null; // Mô tả chi tiết về KPI
		type: string & KPI_TYPE; // Loại KPI (theo enum KPI_TYPE)
		status: string & KPI_STATUS; // Trạng thái hiện tại của KPI
		period: string & KPI_PERIOD; // Chu kỳ đánh giá KPI
		unit: string & KPI_UNIT; // Đơn vị đo lường của KPI
		targetValue: number | string | null; // Giá trị mục tiêu cần đạt được
		actualValue: number | string | null; // Giá trị thực tế đã đạt được
		achievementRate: number | string | null; // Tỷ lệ hoàn thành (%)
		weight: number | string; // Trọng số quan trọng của KPI
		startDate: string | null; // Ngày bắt đầu thực hiện KPI
		endDate: string | null; // Ngày kết thúc KPI
		warningThreshold: number | string | null; // Ngưỡng cảnh báo
		criticalThreshold: number | string | null; // Ngưỡng nghiêm trọng
		hierarchyLevel: string & KPI_HIERARCHY_LEVEL; // Cấp độ phân cấp (cá nhân/nhóm/tổ chức)
		calculationFormula?: string | null; // Công thức tính toán (nếu có)
		autoCalculate: boolean; // Có tự động tính toán không
		dataSource?: string | null; // Nguồn dữ liệu (nếu có)
		fiscalYear: number | string | null; // Năm tài chính
		fiscalQuarter: number | string | null; // Quý tài chính
		fiscalMonth: number | string | null; // Tháng tài chính
		parentKpiId: number | string | null; // ID của KPI cha (nếu có)
		teamId: number | string | null; // ID của nhóm được gán KPI
		userId: number | string | null; // ID của người dùng được gán KPI
		departmentId: number | string | null; // ID của phòng ban liên quan
		team?: ICRMTeam.IResponse | null; // Thông tin chi tiết về nhóm
		user?: IAdminUser.IResponse | null; // Thông tin chi tiết về người dùng
		department?: IAdminDepartment.IResponse | null; // Thông tin chi tiết về phòng ban
		parentKpi?: ICRMKPI.IResponse | null; // Thông tin chi tiết về KPI cha
		childKpis?: ICRMKPI.IResponse[] | null; // Danh sách các KPI con (nếu có)

		approvedById?: number | string | null; // ID người phê duyệt
		approvedDate?: string | null; // Ngày phê duyệt
		approvalNote?: string | null; // Ghi chú phê duyệt
		tags?: string[] | null; // Danh sách thẻ/tag liên quan đến KPI
		notes: string | null; // Ghi chú bổ sung
	}

	export interface IFilter {
		hierarchyLevel?: string;
		teamId?: number;
		userId?: number;
		type?: string;
		status?: string;
		period?: string;
		fiscalYear?: number;
		fiscalQuarter?: number;
		fiscalMonth?: number;
		startDate?: string; // YYYY-MM-DD
		endDate?: string; // YYYY-MM-DD
	}

	export interface IHierarchyResponse {
		id: number | string; // ID định danh của KPI
		name: string; // Tên KPI
		type: string; // Loại KPI
		targetValue: number | string; // Giá trị mục tiêu
		actualValue: number | string; // Giá trị thực tế
		achievementRate: number | string; // Tỷ lệ hoàn thành
		hierarchyLevel: string; // Cấp độ phân cấp
		teamName?: string | null; // Tên nhóm
		userName?: string | null; // Tên người dùng
		children?: IHierarchyResponse[] | null; // Danh sách KPI con
	}

	export interface IKPIStats {
		totalKPIs?: number | string; // Tổng số KPI
		activeKPIs?: number | string; // Số KPI đang hoạt động
		averageAchievementRate?: number | string; // Tỷ lệ hoàn thành trung bình
		onTrackKPIs?: number | string; // Số KPI đúng tiến độ
		atRiskKPIs?: number | string; // Số KPI có rủi ro
		overdueKPIs?: number | string; // Số KPI quá hạn
	}

	export interface CascadeKPIRequest {
		targetTeamIds?: number[]; // Danh sách ID nhóm đích
		targetUserIds?: number[]; // Danh sách ID người dùng đích
	}

	export interface IUpdateProgressRequest {
		actualValue: number; // Giá trị thực tế cập nhật
		notes?: string; // Ghi chú
	}

	export interface IDashboardAnalytics {
		stats: IKPIStats; // Thống kê KPI
		topPerformers: ITopPerformer[]; // Danh sách người thực hiện tốt nhất
		needingAttention: IResponse[]; // Danh sách KPI cần chú ý
		performanceDistribution: IPerformanceDistribution; // Phân bố hiệu suất
		trends: ITrendData[]; // Dữ liệu xu hướng
	}

	export interface ITopPerformer {
		id: number | string; // ID người thực hiện
		name: string; // Tên
		achievementRate: number | string; // Tỷ lệ hoàn thành
		targetValue: number | string; // Giá trị mục tiêu
		actualValue: number | string; // Giá trị thực tế
		hierarchyLevel: string; // Cấp độ phân cấp
		userName?: string | null; // Tên người dùng
		userEmail?: string | null; // Email người dùng
		teamName?: string | null; // Tên nhóm
	}

	export interface IPerformanceDistribution {
		excellent: number; // Xuất sắc
		good: number; // Tốt
		warning: number; // Cảnh báo
		critical: number; // Nghiêm trọng
		total: number; // Tổng cộng
	}

	export interface ITrendData {
		period: string; // Kỳ báo cáo
		avgAchievementRate: number; // Tỷ lệ hoàn thành trung bình
		totalTarget: number; // Tổng mục tiêu
		totalActual: number; // Tổng thực tế
	}

	export interface IBulkUpdateResult {
		successful: Array<{
			// Danh sách cập nhật thành công
			id: string; // ID KPI
			oldValue: number; // Giá trị cũ
			newValue: number; // Giá trị mới
			achievementRate: number; // Tỷ lệ hoàn thành
		}>;
		failed: Array<{
			// Danh sách cập nhật thất bại
			id: string; // ID KPI
			reason: string; // Lý do thất bại
		}>;
		totalProcessed: number; // Tổng số đã xử lý
	}

	export interface ITeamComparison {
		teamId: number | string; // ID nhóm
		teamName: string; // Tên nhóm
		avgAchievementRate: number; // Tỷ lệ hoàn thành trung bình
		totalActual: number | string; // Tổng giá trị thực tế
		totalTarget: number | string; // Tổng giá trị mục tiêu
		totalKPIs: number | string; // Tổng số KPI
		efficiency: number | string; // Hiệu suất
		ranking: number | string; // Xếp hạng
	}

	export interface IExportResult {
		filename: string; // Tên file
		data: any; // Dữ liệu
		downloadUrl: string; // URL tải xuống
	}

	export interface IPerformanceAlert {
		type: 'critical' | 'warning' | 'overdue'; // Loại cảnh báo
		kpi: IResponse; // Thông tin KPI
		achievementRate?: number; // Tỷ lệ hoàn thành
		threshold?: number; // Ngưỡng cảnh báo
		message: string; // Thông điệp cảnh báo
		alertTime: string; // Thời gian cảnh báo
	}

	export interface IKPICalculationContext {
		kpiId: number; // ID KPI
		period: string; // Kỳ báo cáo
		dataSource: string; // Nguồn dữ liệu
		formula: string; // Công thức tính toán
		dependencies: number[]; // Danh sách KPI phụ thuộc
	}

	export interface IQueryExportKPI {
		filters: string;
		format?: string;
	}

	export interface IKPIExportExcelResponse {
		filename: string;
		buffer: { type: 'Buffer'; data: any };
		contentType: string;
		// data: any;
	}

	export interface IKPIExportDataResponse {
		summary: IKPISummaries;
		kpis: ICRMKPI.IResponse[];
		hierarchyPerformance: ICRMKPI.IHierarchyResponse[];
		scoreAnalysis: ICRMKPI.IScoreAnalysisResponse;
		totalScore: number;
		maxTotalScore: number;
	}

	export interface IScoreAnalysisResponse {
		excellent: {
			count: number;
			percentage: number;
			avgScore: number;
			totalScore: number;
		};
		good: {
			count: number;
			percentage: number;
			avgScore: number;
			totalScore: number;
		};
		average: {
			count: number;
			percentage: number;
			avgScore: number;
			totalScore: number;
		};
		belowAverage: {
			count: number;
			percentage: number;
			avgScore: number;
			totalScore: number;
		};
		poor: {
			count: number;
			percentage: number;
			avgScore: number;
			totalScore: number;
		};
	}

	export interface IKPISummaries {
		totalKPIs: number;
		period: string;
		activeKPIs: number;
		averageAchievementRate: number;
		onTrackKPIs: number;
		atRiskKPIs: number;
		overdueKPIs: number;
		generatedAt: Date | string;
		hierarchyLevel: string;
	}

	export interface IMonthlyProgress {
		year: number;
		month: number;
		completionPercentage: number;
		totalKPIs: number;
		completedKPIs: number;
		activeKPIs: number;
		approvedKPIs: number;
		averageAchievementRate: number;
		totalTargetValue: number;
		totalActualValue: number;
	}

	export interface IMonthlyProgressResponse {
		monthlyData: IMonthlyProgress[];
	}
}
