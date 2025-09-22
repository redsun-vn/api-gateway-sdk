import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetWebsite = createParamDecorator(
	(data: string | undefined, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();

		return request.currentWebsite;
	},
);
