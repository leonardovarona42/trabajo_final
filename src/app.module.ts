import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UsersModule } from "./users/users.module"
import { IncidentModule } from './incidents/incident.module'
import { Incident } from './incidents/entities/incident.entity';
import { Zone } from './zones/entities/zones.entity';

import { User } from "./users/entities/user.entity";
import { ZoneModule } from "./zones/zones.module";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      username:"postgres",
      password: "postgres",
      port: 5432,
      database: "postgres",
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Incident, Zone]),
    UsersModule,
    IncidentModule,
    ZoneModule,
  ]
})
export class AppModule { }