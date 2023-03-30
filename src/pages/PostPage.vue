<template>
  <div class="text-center m-5">

    <img :src="activePost.imgUrl" alt="">
    <h1>{{ activePost.title }}</h1>
    <p class="text-start">{{ activePost.body }}</p>
  </div>
</template>

<script>
import { onMounted, computed } from "vue"
import { logger } from "../utils/Logger.js"
import { useRoute } from "vue-router"
import { postsService } from "../services/PostsService.js"
import { AppState } from "../AppState.js"

export default {
  setup() {
    // private variables and methods here
    const route = useRoute()
    async function getPostById() {
      logger.log(route.params.postId)
      await postsService.getPostById(route.params.postId)
    }

    onMounted(() => { getPostById() })
    return {
      route,
      activePost: computed(() => AppState.activePost)
      // public variables and methods here
    }
  },
}
</script>

<style>
img {
  max-height: 40vh;
}
</style>