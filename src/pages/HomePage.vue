<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">

      </div>
    </section>
  </div>
</template>

<script lang="js">
import { onMounted } from 'vue'
import { logger } from '../utils/Logger.js'
import { postsService } from '../services/PostsService.js'
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

    onMounted(() => {
      getPosts()
    })
    return {}
  }
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
</style>
