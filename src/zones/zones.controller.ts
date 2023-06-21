// incident.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common'
import { ZoneService } from './zones.service'
import { Public } from 'src/users/current.meta'
import { Zone } from './entities/zones.entity'
import { ZoneDto } from './dto/zones.dto'

@Controller('zone')
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}

  @Get()
  @Public()
  async findAll(): Promise<Zone[]> {
    return await this.zoneService.findAll()
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string): Promise<Zone> {
    return this.zoneService.findOne(+id)
  }

  @Post()
  @Public()
  create(@Body() incident: ZoneDto): Promise<Zone> {
    return this.zoneService.create(incident)
  }

  @Put(':id')
  @Public()
  update(
    @Param('id') id: string,
    @Body() incident: ZoneDto
  ): Promise<Zone> {
    return this.zoneService.update(+id, incident)
  }

  @Delete(':id')
  @Public()
  delete(@Param('id') id: string): Promise<void> {
    return this.zoneService.delete(+id)
  }
}
