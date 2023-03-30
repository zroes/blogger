import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
    async getPosts() {
        const res = await api.get('api/posts')
        logger.log(res.data)
    }
}

export const postsService = new PostsService()