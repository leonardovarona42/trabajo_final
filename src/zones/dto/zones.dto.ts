import { IsNotEmpty, IsString } from "class-validator";

export class ZoneDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string
    
    @IsNotEmpty()
    @IsString()
    readonly description: string
    
}