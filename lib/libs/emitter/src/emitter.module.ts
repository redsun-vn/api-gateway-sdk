import { Module } from '@nestjs/common';
import { EmitterService } from './emitter.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
	imports: [EventEmitterModule.forRoot()],
	providers: [EmitterService],
	exports: [EmitterService],
})
export class EmitterModule {}
