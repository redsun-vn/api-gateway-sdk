import { BaseResponse } from '../../common.type';
export declare namespace ICrmStage {
    interface IResponse extends BaseResponse {
        name: string;
        sequence: number;
        isWon: boolean;
        teamId: string[];
        companyId: string | null;
        color?: string | null;
        icon?: string | null;
    }
    interface ICreateRequest {
        name: string;
        sequence?: number;
        isWon?: boolean;
        teamId?: string[];
        companyId?: string;
        color?: string;
        icon?: string;
    }
    interface IUpdateRequest extends Partial<ICreateRequest> {
        id: number;
    }
    interface IFindByTeamRequest {
        teamId: string;
    }
    interface IFindByCompanyRequest {
        company_id: string;
    }
}
