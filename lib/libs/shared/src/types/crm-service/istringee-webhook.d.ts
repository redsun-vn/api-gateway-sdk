export declare namespace IStringeeWebhook {
    type Id = number | string;
    interface IResolveInput {
        token_hash: string;
    }
    interface IResolveResponse {
        shop_id: Id;
        config_id: Id;
        key_version: number;
    }
    interface IInboundRequest {
        token_hash: string;
        shop_id: Id | null;
        method: 'GET' | 'POST';
        request_uri: string | null;
        content_type: string | null;
        signature: string | null;
        raw_body_b64: string;
        received_at: string;
        deadline_at?: string;
        remote_ip: string;
    }
    type CalloutBlockReason = 'not_enabled_yet' | 'unknown_token' | 'bad_signature' | 'error' | 'not_enabled' | 'missing_call_id' | 'outbound_not_allowed';
    interface ICalloutBlock {
        action: 'block';
        reason: CalloutBlockReason;
    }
    type ICalloutDecision = ICalloutBlock;
}
