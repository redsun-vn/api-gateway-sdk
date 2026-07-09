export declare namespace ICrmAdmin {
    type RecomputeScope = 'score' | 'bant' | 'both';
    interface IRecomputeAllRequest {
        scope?: RecomputeScope;
    }
    interface IRecomputeAllResponse {
        job_ids: {
            score?: string;
            bant?: string;
        };
    }
    type JobState = 'waiting' | 'active' | 'completed' | 'failed' | 'delayed' | 'unknown';
    interface IJobProgress {
        done: number;
        total: number;
        percent: number;
    }
    interface IJobStatusResponse {
        state: JobState;
        progress: IJobProgress | number | null;
        returnvalue?: unknown;
        failedReason?: string;
    }
}
