// zone.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from 'typeorm'
import { User } from '../../users/entities/user.entity'
import { Incident } from '../../incidents/entities/incident.entity'

@Entity()
export class Zone {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @OneToMany(() => User, (user) => user.zones)
  user: User

  @ManyToMany(() => Incident, (incident) => incident.zones)
  incident: Incident
}
