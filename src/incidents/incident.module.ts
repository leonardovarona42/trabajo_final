import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Incident } from "./entities/incident.entity"
import { IncidentController } from "./incident.controller"
import { IncidentService } from "./incident.service"


@Module({
  controllers: [IncidentController],
  providers:[IncidentService],
  imports:[ TypeOrmModule.forFeature([Incident])]
})
export class IncidentModule {
  /*...*/ 
}