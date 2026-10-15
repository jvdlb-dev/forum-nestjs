import { Module } from '@nestjs/common'
import { createObserveModule } from '@nestjs/observe'
import { AppController } from './app.controller.js'
import { AppService } from './app.service.js'
import { PrismaService } from './prisma/prisma.service.js'

export const { ObserveModule, ObserveInstrument } = createObserveModule()

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
