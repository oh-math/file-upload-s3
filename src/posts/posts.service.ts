import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    public async adicionaArquivo(arquivo: Express.Multer.File) {
        return {}
    }
}
