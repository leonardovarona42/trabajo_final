// incident.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Zone } from '../../zones/entities/zones.entity';

@Entity()
export class Incident {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  description: string;

  @ManyToOne(() => User, user => user.incidents)
  user: User;

  @ManyToMany(() => Zone, zone => zone.incident)
  zones: Zone[];
}