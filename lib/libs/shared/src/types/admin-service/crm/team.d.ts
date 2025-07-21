import { AdminBaseResponse as BaseResponse } from '../../common.type';
export declare namespace ICRMTeam {
    interface ICreate {
        name: string;
        sequence?: number | string;
        description?: string;
        active: boolean;
        team_leader_id?: number | string | null;
        team_members?: string[];
        companyId?: string;
    }
    interface IUpdate extends ICreate {
        id: number | string;
    }
    interface IResponse extends BaseResponse {
        name: string;
        sequence?: number | string;
        description?: string;
        active: boolean;
        team_leader_id?: number | string | null;
        team_members?: string[];
    }
}
