// incident.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { IncidentService } from './incident.service';
import {Private, Public} from '../users/current.meta'
import { Incident as IncidentEntity} from './entities/incident.entity';
import { Role } from 'src/users/entities/role.entity';
import { IncidentDto } from './dto/incident.dto';



@Controller('incidents')
export class IncidentController {
  constructor(private readonly incidentService: IncidentService) {}
  
  @Get()
  @Public()
  findAll(): Promise<IncidentEntity[]> {
    return this.incidentService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string): Promise<IncidentEntity> {
    return this.incidentService.findOne(+id);
  }

  @Post()
  @Private(Role.ADMIN)
  create(@Body() incident: IncidentDto): Promise<IncidentEntity> {
    return this.incidentService.create(incident);
  }

  @Put(':id')
  @Private(Role.ADMIN)
  update(@Param('id') id: string, @Body() incident: IncidentDto): Promise<IncidentEntity> {
    return this.incidentService.update(+id, incident);
  }

  @Delete(':id')
  @Private(Role.ADMIN)
  delete(@Param('id') id: string): Promise<void> {
    return this.incidentService.delete(+id);
  }
}
