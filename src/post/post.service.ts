import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(data): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }
  async updatePost(id: number, data): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }
  async deletePost(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }

  async findPost(id: number): Promise<Post> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async findAllPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }
}
