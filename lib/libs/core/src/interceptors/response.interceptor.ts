import {
	Injectable,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventEmitter2 } from '@nestjs/event-emitter';
import {
	COMMENT_LOG_ADMIN_EVENT_CREATE_TOPIC,
	SHOP_ACTIVITY_LOG_EVENT_CREATE_TOPIC,
} from '@configs/topics';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
	constructor(
		// private emitterService: EmitterService,
		private eventEmitter: EventEmitter2,
	) {}
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle().pipe(
			map((data) => {
				const resData = JSON.parse(data);
				const request = context.switchToHttp().getRequest();

				// check resource admin
				const url = request?.url;
				const isAdminResource = url ? url.split('/')[2] == 'admin' : false;
				if (isAdminResource) {
					this.eventEmitter.emit(COMMENT_LOG_ADMIN_EVENT_CREATE_TOPIC, {
						resData: resData.data,
						context,
					});
				} else {
					if (resData?.data?.shop_id || resData?.data === true) {
						this.eventEmitter.emit(SHOP_ACTIVITY_LOG_EVENT_CREATE_TOPIC, {
							resData: resData.data,
							context,
						});
					}
				}

				return {
					code: context.switchToHttp().getResponse().statusCode,
					message: resData?.data?.message || 'Success',
					data: resData?.data?.data || resData?.data,
				};
			}),
		);
	}
}
