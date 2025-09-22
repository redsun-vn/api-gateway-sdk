export enum FileStatus {
	PROCESSING = 'processing', // File is being processed.
	READY = 'ready', // File is ready to be displayed.
	UPLOADED = 'uploaded', // File has been uploaded but hasn't been processed.
	FAILED = 'failed', // File processing has failed.
}
