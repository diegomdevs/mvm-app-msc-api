import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateClientDto, FilterClientDto } from './Client.dto';
export class CreateAdultDto extends CreateClientDto {
  @IsString()
  readonly direction: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly degreeOfInstruction: string;

  @IsString()
  readonly work: string;
}
export class UpdateAdultDto extends PartialType(CreateAdultDto) {}

export class FilterAdultDto extends FilterClientDto {}

export const adultDto = [CreateAdultDto, UpdateAdultDto, FilterAdultDto];
