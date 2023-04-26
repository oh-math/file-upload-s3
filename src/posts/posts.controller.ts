import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {}

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    public async uploadoArquivo(@UploadedFile() arquivo: Express.Multer.File){
        return await this.postService.adicionaArquivo(arquivo)
    }
}
