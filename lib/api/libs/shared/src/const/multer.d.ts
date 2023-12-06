export declare const multerOptionsAPIGateway: {
    limits: {
        fileSize: number;
    };
    fileFilter: (req: any, file: any, cb: any) => Promise<void>;
};
