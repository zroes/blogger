<template>
    <div>
        <router-link :to="{ name: 'Profile', params: { profileId: post?.creatorId } }">
            <img class="p-2 profile-img" :src="post?.creator.picture" :alt="post?.creator.name" :title="post?.creator.name">
            <span class="p-2">{{ post?.creator.name }}</span>
        </router-link>
    </div>
</template>


<script>
import { profile } from 'console';
import { Post } from '../models/Post.js';

export default {
    props: {
        post: {
            type: Post,
            required: true
        }
    },
    setup() {
        return {}
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