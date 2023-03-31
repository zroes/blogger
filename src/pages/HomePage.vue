<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div class="col-10">
        <CreatePostInsert />

      </div>
    </section>
    <section class="row justify-content-center">
      <div class="col-10 custom-border rounded elevation my-2" v-for="p in posts" :key="p.id">
        <PostComponent :post="p" />
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { logger } from '../utils/Logger.js'
import { postsService } from '../services/PostsService.js'
import { AppState } from '../AppState.js'
import PostComponent from '../components/PostComponent.vue'
import CreatePostInsert from '../components/CreatePostInsert.vue'
export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts()
      }
      catch (error) {
        logger.log(error)
      }
    }

    async function getAccount() {
      logger.log(AppState.account, 'getting account')
    }

    onMounted(() => {
      getPosts(),
        getAccount()
    })
    return {
      posts: computed(() => AppState.posts)
    }
  },
  components: { PostComponent, CreatePostInsert }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.custom-border {
  border: solid 3px black;
}
</style>
