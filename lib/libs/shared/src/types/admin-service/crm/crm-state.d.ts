import { BaseResponse } from '../../common.type';
export declare namespace ICrmState {
    interface IResponse extends BaseResponse {
        name: string;
        sequence: number;
        isWon: boolean;
        teamId: string[];
        companyId: string | null;
    }
    interface ICreateRequest {
        name: string;
        sequence?: number;
        isWon?: boolean;
        teamId?: string[];
        companyId?: string;
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
