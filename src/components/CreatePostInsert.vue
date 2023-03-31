<template>
    <div class="floating-form mb-3">
        <input v-model="editable.body" class="form-control" id="floatingInput" placeholder="type out your feelings bro"
            type="text">
        <!-- TODO :disabled="account.id ? 'false' : 'true'" ask about this -->
        <label for="floatingInput"></label>
    </div>
</template>


<script>
import { ref, computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
    setup() {
        const editable = ref({})
        return {
            account: computed(() => AppState.account),
            editable
        }
    }
}
</script>


<style lang="scss" scoped></style>