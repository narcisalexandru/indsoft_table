<template>
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="selectedAction"
      :options="actions"
      option-label="name"
      placeholder="Selectează o acțiune"
      class="w-full md:w-14rem"
      @change="navigateToPage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const selectedAction = ref();
const actions = ref([
    { name: 'Șterge', code: 'Șterge', routerLink: 'sterge' },
    { name: 'Adaugă', code: 'Adaugă', routerLink: 'adauga' },
    { name: 'Modifică', code: 'Modifică', routerLink: 'modifica' },
]);


const router = useRouter();

const navigateToPage = () => {
  if (selectedAction.value && selectedAction.value.routerLink) {
    router.push(selectedAction.value.routerLink);
  }
};
</script>