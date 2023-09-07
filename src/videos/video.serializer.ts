import { Prisma } from '@prisma/client';
import { basename } from 'path';

export class VideoSerializer {
  id: number;
  title: string;
  description: string;
  category: { id: number; name: string; description: string | null };
  file_url: string;

  constructor(
    videoWithCategory: Prisma.VideoGetPayload<{ include: { category: true } }>,
  ) {
    this.id = videoWithCategory.id;
    this.title = videoWithCategory.title;
    this.description = videoWithCategory.description;
    this.category = videoWithCategory.category;
    this.file_url =
      'http://localhost:3000/videos/file/' +
      basename(videoWithCategory.file_path);
  }
}
