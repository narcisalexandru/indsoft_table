<template>
  <div class="container">
    <div class="modal">
      <InputText
        v-model="newProduct.id"
        type="text"
        placeholder="ID"
      />
      <InputText
        v-model="newProduct.denumire"
        type="text"
        placeholder="Denumire"
      />
      <InputNumber
        v-model.number="newProduct.stoc"
        type="number"
        placeholder="Stoc"
      />
      <InputNumber
        v-model.number="newProduct.pret"
        type="number"
        mode="decimal"
        placeholder="Pret"
      />
    </div>
    <div class="buttons">
      <Button
        label="Adaugă"
        @click="submitForm"
      />
      <Button
        label="Anuleaza"
        @click="cancelForm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// eslint-disable-next-line no-undef
const useCustomEmits = defineEmits(["addProduct", "cancel-form"]);


interface Product {
  id: string;
  denumire: string;
  stoc: number;
  pret: number;
}

const newProduct = ref<Product>({
  id: "",
  denumire: "",
  stoc: 0,
  pret: 0,
});

const submitForm = () => {
  useCustomEmits("addProduct", newProduct.value);
};

const cancelForm = () => {
  useCustomEmits("cancel-form");
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
}
.modal {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
}
</style>