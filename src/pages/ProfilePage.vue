<template>
  <div class="container-fluid">
    <section class="row">
      <div class="p-0 position-absolute">
        <img class="cover-img" :src="profile?.coverImg" alt="">
      </div>
      <div class="m-5 d-flex position-relative">
        <img class="profile-picture" :src="profile?.picture" alt="">

        <h1 class="text ms-5 mb-5 align-self-center">{{ profile?.name }}</h1>
      </div>
      <div class="col-6 position-relative bio">
        <h5 class="text ">{{ profile?.bio }}</h5>
      </div>


    </section>
  </div>
</template>

<script>
import { onMounted, computed } from "vue"
import { useRoute } from "vue-router"
import { profilesService } from "../services/ProfilesService.js"
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    // private variables and methods here
    const route = useRoute()

    async function getProfileById() {
      try {
        const profileId = route.params.profileId
        await profilesService.getProfileById(profileId)
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }

    }

    onMounted(() => {
      getProfileById()
    })
    return {
      route,
      profile: computed(() => AppState.profile),
      // public variables and methods here
    }
  },
}
</script>

<style scoped>
.profile-picture {
  height: 17vh;
  width: 17vh;
  object-fit: cover;
  border-radius: 42%;
  border: solid 1px rgba(20, 20, 20, 0.29);
  box-shadow: 0px 0px 10px rgba(42, 42, 42, 0.515);
}

.cover-img {
  height: 55vh;
  width: 100%;
  object-fit: cover;
}

.bio {
  bottom: 6vw;
  left: 25%;
}

.text {
  color: aliceblue;
  text-shadow: 3px 2px 7px black, 0px 2px 8px black;
}
</style>