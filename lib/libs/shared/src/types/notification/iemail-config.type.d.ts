export declare namespace IEmailConfig {
    type Provider = 'smtp' | 'sendgrid' | 'mailgun';
    interface ISmtpCredentials {
        user: string;
        pass: string;
    }
    interface ISendgridCredentials {
        api_key: string;
    }
    interface IMailgunCredentials {
        api_key: string;
        domain: string;
    }
    type ICredentials = ISmtpCredentials | ISendgridCredentials | IMailgunCredentials;
    interface ISmtpTransportConfig {
        host: string;
        port: number;
        secure: boolean;
        requireTls?: boolean;
    }
    interface ISendgridTransportConfig {
        sandbox?: boolean;
    }
    interface IMailgunTransportConfig {
        region?: 'us' | 'eu';
    }
    type ITransportConfig = ISmtpTransportConfig | ISendgridTransportConfig | IMailgunTransportConfig;
    interface IShopCreateRequest {
        provider: Provider;
        credentials: ICredentials;
        transport_config?: ITransportConfig;
        from_email: string;
        from_name: string;
        reply_to?: string | null;
    }
    interface IUpdateRequest {
        credentials?: ICredentials;
        transport_config?: ITransportConfig;
        from_email?: string;
        from_name?: string;
        reply_to?: string | null;
    }
    interface IActivateRequest {
        is_active: boolean;
    }
    interface ITestSendRequest {
        to: string;
    }
    interface IConfigResponse {
        id: number;
        provider: Provider;
        transport_config: ITransportConfig;
        from_email: string;
        from_name: string;
        reply_to: string | null;
        is_active: boolean;
        has_credentials: boolean;
        last_test_ok_at: string | Date | null;
    }
    interface ITestSendResponse {
        ok: boolean;
        providerMessageId?: string | null;
        errorCode?: string;
        errorMessage?: string;
    }
}
export declare namespace IEmailTemplate {
    interface IAttachment {
        attachment_id: number;
        filename: string;
        mime: string;
        size: number;
    }
    interface ICreateRequest {
        model_key: string;
        action_key: string;
        name: string;
        subject: string;
        body_html: string;
        body_text?: string | null;
        design_json?: Record<string, unknown> | null;
        lang?: string;
        attachments?: IAttachment[];
    }
    interface IUpdateRequest {
        name?: string;
        subject?: string;
        body_html?: string;
        body_text?: string | null;
        design_json?: Record<string, unknown> | null;
        attachments?: IAttachment[];
    }
    interface IDuplicateRequest {
        name: string;
    }
    interface ITestSendRequest {
        to: string;
    }
    interface ISeedRequest {
        lang?: string;
    }
    interface IResponse {
        id: number;
        model_key: string;
        action_key: string;
        name: string;
        subject: string;
        body_html: string;
        body_text: string | null;
        design_json: Record<string, unknown> | null;
        lang: string;
        attachments: IAttachment[];
        variables: string[];
        is_active: boolean;
    }
    interface IWarning {
        code: 'UNKNOWN_VARIABLE';
        message: string;
        variable: string;
    }
    interface IMutationResponse {
        template: IResponse;
        warnings: IWarning[];
    }
    interface IPreviewResponse {
        subject: string;
        html: string;
    }
    interface ISeedResponse {
        created: number;
        skipped: number;
        created_actions: string[];
    }
    interface IVariable {
        key: string;
        label: string;
        sample: unknown;
        scope: 'system' | 'user' | 'action' | 'event';
        kind: 'scalar' | 'block' | 'link' | 'list';
        item_schema?: IVariable[];
    }
    interface IActionResponse {
        id: number;
        model_key: string;
        action_key: string;
        name: string;
        description: string | null;
        variables_schema: {
            variables: IVariable[];
        };
        sample_payload: Record<string, unknown>;
        default_template_langs: string[];
        is_active: boolean;
    }
    interface IActionListQuery {
        model_key?: string;
    }
    interface IListQuery {
        model_key?: string;
        action_key?: string;
    }
    interface IDefaultTemplate {
        subject: string;
        body_html: string;
        mjml: string;
    }
    interface IActionUpdateRequest {
        name?: string;
        description?: string | null;
        is_active?: boolean;
        variables_schema?: {
            variables: IVariable[];
        };
        sample_payload?: Record<string, unknown>;
        default_templates?: Record<string, IDefaultTemplate>;
    }
}
export declare namespace IEmailHistory {
    interface IListQuery {
        status?: string;
        to?: string;
        from_date?: string;
        to_date?: string;
        limit?: number;
        offset?: number;
    }
    interface IItem {
        id: number;
        shop_id: number;
        template_id: number | null;
        model_key: string | null;
        action_key: string | null;
        to: string;
        subject: string | null;
        status: string;
        provider: string | null;
        provider_message_id: string | null;
        error_code: string | null;
        error_message: string | null;
        idempotency_key: string | null;
        sent_at: string | null;
        created_at: string | null;
        updated_at: string | null;
    }
    interface IListResponse {
        items: IItem[];
        total: number;
    }
}
