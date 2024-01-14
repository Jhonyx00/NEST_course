import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'The brand must be a cool brand' })
  readonly brand: string;
  @IsString()
  readonly model: string;
}
