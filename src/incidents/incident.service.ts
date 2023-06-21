// incident.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incident } from '../incidents/entities/incident.entity';
import { IncidentDto } from './dto/incident.dto';

@Injectable()
export class IncidentService {
  constructor(
    @InjectRepository(Incident)
    private readonly incidentRepository: Repository<Incident>,
  ) {}

  async findAll(): Promise<Incident[]> {
    return await this.incidentRepository.find();
  }

  async findOne(id: number): Promise<Incident> {
    const incident = await this.incidentRepository.findOneBy({id}) 

    if (!incident) {
      throw new NotFoundException("Incident not found")
    }

    return incident;
  }

  async create(incident: IncidentDto): Promise<Incident> {
    return await this.incidentRepository.save(incident);
  }

  async update(id: number, incident: IncidentDto): Promise<Incident> {
    const incidentToUpdate = await this.findOne(id);
    incidentToUpdate.category = incident.category;
    incidentToUpdate.description = incident.description;
    return await this.incidentRepository.save(incidentToUpdate);
  }

  async delete(id: number): Promise<void> {
    const incident = await this.findOne(id)

    await this.incidentRepository.delete(incident)
  }
}