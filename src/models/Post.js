import { Profile } from "./Account.js"

export class Post {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.likes = data.likes
        this.tags = data.tags
        this.truncated = this.ComputeTruncated
        this.creator = new Profile(data.creator)
    }

    get ComputeTruncated() {
        const truncatedBody = this.body.slice(0, 61) + "...."
        return truncatedBody
    }
}








