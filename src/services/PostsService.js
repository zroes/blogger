import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
    async getPosts() {
        const res = await api.get('api/blogs')
        logger.log(res.data)
        AppState.posts = res.data.map(p => new Post(p))
    }
}

export const postsService = new PostsService()