import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseJsonInterceptor<T> implements NestInterceptor<T, any> {
	intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
		return next.handle().pipe(
			map((data) => ({
				statusCode: context.switchToHttp().getResponse().statusCode,
				success: true,
				data: data,
				timestamp: new Date().toISOString(),
			})),
		);
	}
}
