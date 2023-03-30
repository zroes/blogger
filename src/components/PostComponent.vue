<template>
    <router-link :to="{ name: 'Post', params: { postId: post?.postId } }">

        <div @click.stop="goToProfile(post?.creator.id)">
            <img class="p-2 profile-img" :src="post?.creator.picture" :alt="post?.creator.name" :title="post?.creator.name">
            <span class="p-2">{{ post?.creator.name }}</span>
        </div>
        <div>
            <p>{{ post?.title }}</p>
        </div>
    </router-link>
</template>


<script>
import { useRouter } from 'vue-router';
import { Post } from '../models/Post.js';

export default {
    props: {
        post: {
            type: Post,
            required: true
        }
    },
    setup(props) {
        const router = useRouter();
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
</style>