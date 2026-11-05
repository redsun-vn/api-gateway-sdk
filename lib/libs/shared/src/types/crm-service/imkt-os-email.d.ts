import { tags } from 'typia';
type PositiveInt = number & tags.Type<'uint32'> & tags.Minimum<1>;
type Url = string & tags.MaxLength<2000>;
type BlockId = string & tags.Pattern<'^[A-Za-z0-9_-]{8,24}$'>;
export declare namespace IMktOsEmail {
    type ImageSource = 'catalog' | 'upload' | 'ai';
    interface IImage {
        source: ImageSource;
        ref: string & tags.MaxLength<64>;
        url: Url;
        width: number & tags.Type<'uint32'> & tags.Maximum<4096>;
        height: number & tags.Type<'uint32'> & tags.Maximum<4096>;
    }
    interface IProductItem {
        product_id: PositiveInt;
        name: string & tags.MaxLength<120>;
        price: number & tags.Minimum<0>;
        image: IImage;
        alt: string & tags.MaxLength<125>;
        url: Url | null;
    }
    type SocialNetwork = 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'zalo' | 'website';
    interface IHeroImageBlock {
        id: BlockId;
        type: 'hero_image';
        image: IImage;
        alt: string & tags.MaxLength<125>;
        link?: Url;
    }
    interface IHeadingBlock {
        id: BlockId;
        type: 'heading';
        text: string & tags.MaxLength<120>;
        level: 1 | 2;
    }
    interface IParagraphBlock {
        id: BlockId;
        type: 'paragraph';
        text: string & tags.MaxLength<1000>;
    }
    interface IButtonBlock {
        id: BlockId;
        type: 'button';
        label: string & tags.MaxLength<40>;
        url: Url;
        align: 'left' | 'center';
    }
    interface IProductsBlock {
        id: BlockId;
        type: 'products';
        items: IProductItem[] & tags.MaxItems<4>;
        columns: 1 | 2;
        show_price: boolean;
    }
    interface ICouponBlock {
        id: BlockId;
        type: 'coupon';
        code: string & tags.MaxLength<64>;
        text: string & tags.MaxLength<200>;
        source: 'brief' | 'picked';
    }
    interface IImageTextBlock {
        id: BlockId;
        type: 'image_text';
        image: IImage;
        alt: string & tags.MaxLength<125>;
        heading?: string & tags.MaxLength<120>;
        text: string & tags.MaxLength<1000>;
        button?: {
            label: string & tags.MaxLength<40>;
            url: Url;
        };
        image_side: 'left' | 'right';
    }
    interface IDividerBlock {
        id: BlockId;
        type: 'divider';
    }
    interface ISpacerBlock {
        id: BlockId;
        type: 'spacer';
        height: number & tags.Type<'uint32'>;
    }
    interface ISocialBlock {
        id: BlockId;
        type: 'social';
        links: Array<{
            network: SocialNetwork;
            url: Url;
        }> & tags.MaxItems<6>;
    }
    interface ISignatureBlock {
        id: BlockId;
        type: 'signature';
        text: string & tags.MaxLength<200>;
    }
    type IBlock = IHeroImageBlock | IHeadingBlock | IParagraphBlock | IButtonBlock | IProductsBlock | ICouponBlock | IImageTextBlock | IDividerBlock | ISpacerBlock | ISocialBlock | ISignatureBlock;
    type IBlocks = IBlock[] & tags.MaxItems<30>;
    interface ITheme {
        font_family: string;
        text_color: string;
        heading_color: string;
        accent_color: string;
        button_text_color: '#000000' | '#ffffff';
        button_radius: string;
        content_width: number;
    }
    interface IMessage {
        seq: number;
        subject: string;
        preheader: string;
        paragraphs?: string[];
        signature?: string;
        blocks?: IBlock[];
        head_html?: string;
        body_html?: string;
        preview_html?: string;
    }
    interface IContent {
        messages: IMessage[];
        email_layout?: {
            template_id: number;
            name: string;
            hash: string;
            source: 'settings' | 'journey';
            theme?: ITheme;
        };
        layout_fallback?: 'unavailable';
        assets_fallback?: 'unavailable';
    }
    interface IGuardCheck {
        code: string;
        status: 'pass' | 'warn' | 'block';
        message: string;
        fix_hint: string;
        message_seq: number | null;
        block_id?: string;
    }
    interface IWarning {
        field: string;
        message: string;
        code: string;
        seq?: number;
        block_id?: string;
    }
    interface IBlockError {
        field: string;
        message: string;
        seq?: number;
        block_id?: string;
    }
    interface IPreviewRequest {
        seq: PositiveInt;
        subject: string & tags.MaxLength<120>;
        preheader?: string & tags.MaxLength<150>;
        blocks: IBlocks;
    }
    interface IPreviewIssue {
        field: string;
        message: string;
        level: 'error' | 'warning';
        code?: string;
    }
    interface IPreviewResponse {
        html: string | null;
        bytes: number | null;
        issues: IPreviewIssue[];
    }
    interface IProductsQuery {
        search?: string & tags.MaxLength<100>;
        ids?: string & tags.Pattern<'^[1-9][0-9]{0,9}(,[1-9][0-9]{0,9}){0,49}$'>;
    }
    interface IProductOption {
        id: number;
        name: string;
        price: number;
        image: {
            url: string;
        } | null;
        url: string | null;
        active: boolean;
    }
    interface IProductsResponse {
        items: IProductOption[];
    }
    interface ICouponOption {
        code: string;
        name: string;
        ends_at: string | null;
        remaining: number | null;
    }
    interface ICouponsResponse {
        items: ICouponOption[];
    }
}
export {};
