export declare namespace ICrmSlaPause {
    type EntityType = 'lead' | 'opportunity';
    interface IState {
        paused: boolean;
        paused_at: string | null;
        pause_source: 'manual' | 'auto' | null;
    }
    interface IPauseBody {
        reason?: string;
    }
}
