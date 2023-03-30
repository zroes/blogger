<template>
    <section class="row">
        <div class="col-8">
            <div @click.stop="goToProfile(post?.creator.id)">
                <img class="p-2 profile-img" :src="post?.creator.picture" :alt="post?.creator.name"
                    :title="post?.creator.name">
                <span class="p-2">{{ post?.creator.name }}</span>
            </div>
            <router-link class="d-flex p-2" :to="{ name: 'Post', params: { postId: post?.id } }">
                <div>
                    <p>{{ post?.title }}</p>
                    <p>{{ post?.truncated }}</p>
                </div>
            </router-link>
        </div>

        <div class="col-4 p-2 text-end"><img class="post-img rounded" :src="post?.imgUrl" :alt="post?.title"></div>
    </section>
</template>


<script>
import { useRouter } from 'vue-router'
import { Post } from '../models/Post.js'

export default {
    props: {
        post: {
            type: Post,
            required: true
        }
    },
    setup(props) {
        const router = useRouter()
        return {
            goToProfile() {
                router.push({ name: 'Profile', params: { profileId: props.post.creatorId } })
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-img {
    height: 10vh;
    width: 10vh;
    border-radius: 50%;

}

.post-img {
    height: 20vh;
    width: auto;
}
</style>