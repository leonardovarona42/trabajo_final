import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Zone } from "./entities/zones.entity"
import { ZoneController } from "./zones.controller"
import { ZoneService } from "./zones.service"


@Module({
  controllers: [ZoneController,],
  providers:[ZoneService],
  imports:[ TypeOrmModule.forFeature([Zone])]
})
export class ZoneModule {
  /*...*/ 
}