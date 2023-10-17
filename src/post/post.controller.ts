import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';
import { PostDto } from './dto/post.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPosts(): Promise<PostModel[]> {
    return this.postService.findAllPosts();
  }
  @Get(':id')
  async getPostById(@Param('id') id: number): Promise<PostModel> {
    return this.postService.findPost(Number(id));
  }
  @Post()
  async createPost(@Body() body: PostDto): Promise<PostModel> {
    return this.postService.createPost(body);
  }
  @Put(':id')
  async updatePost(
    @Param('id') id: number,
    @Body() body: PostDto,
  ): Promise<PostModel> {
    return this.postService.updatePost(Number(id), body);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number): Promise<PostModel> {
    return this.postService.deletePost(Number(id));
  }
}
