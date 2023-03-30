<template>
  <h1>Hello from the Profile Page</h1>
  {{ profile?.bio }}
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

<style></style>