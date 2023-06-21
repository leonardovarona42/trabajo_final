import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Role } from './role.entity'
import { Incident } from 'src/incidents/entities/incident.entity'
import { Zone } from 'src/zones/entities/zones.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user: string

  @Column()
  password: string

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role

  @ManyToOne(() => Zone, (zone) => zone.user)
  zones: Zone[]

  @OneToMany(() => Incident, (incident) => incident.user)
  incidents: Incident[]
}
