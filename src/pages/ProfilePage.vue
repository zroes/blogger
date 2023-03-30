<template>
  <h1>Hello from the Profile Page</h1>
</template>

<script>
import { onMounted } from "vue"
import { useRoute } from "vue-router"
import { profilesService } from "../services/ProfilesService.js"

export default {
  setup() {
    // private variables and methods here
    const route = useRoute()

    async function getProfileById() {
      const profileId = route.params.profileId
      await profilesService.getProfileById(profileId)
    }

    onMounted(() => {
      getProfileById()
    })
    return {
      // public variables and methods here
    }
  },
}
</script>

<style></style>