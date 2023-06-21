// zone.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Zone } from '../zones/entities/zones.entity';
import { ZoneDto } from './dto/zones.dto';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(Zone)
    private readonly zoneRepository: Repository<Zone>,
  ) {}

  async findAll(): Promise<Zone[]> {
    return await this.zoneRepository.find();
  }

  async findOne(id: number): Promise<Zone> {
    const incident = await this.zoneRepository.findOneBy({id}) 

    if (!incident) {
      throw new NotFoundException("Zone not found")
    }

    return incident;
  }

  async create(incident: ZoneDto): Promise<Zone> {
    return await this.zoneRepository.save(incident);
  }

  async update(id: number, zone: ZoneDto): Promise<Zone> {
    const zoneToUpdate = await this.findOne(id);
    zoneToUpdate.name = zone.name;
    zoneToUpdate.description = zone.description;
    return await this.zoneRepository.save(zoneToUpdate);
  }

  async delete(id: number): Promise<void> {
    const zone = await this.findOne(id)

    await this.zoneRepository.delete(zone)
  }
}
