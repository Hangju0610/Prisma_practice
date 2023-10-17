import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty({
    nullable: false,
  })
  title: string;

  @ApiProperty({
    nullable: false,
  })
  content: string;
}
