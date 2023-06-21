import { IsNotEmpty, IsString } from "class-validator"

export class IncidentDto {
    @IsNotEmpty()
    @IsString()
    readonly category: string

    @IsNotEmpty()
    @IsString()
    readonly description: string
}