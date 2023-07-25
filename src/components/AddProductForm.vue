<template>
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
    <Button
      label="Adaugă"
      @click="submitForm"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Define the type for the Product data
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

// eslint-disable-next-line no-undef
const useCustomEmits = defineEmits(["addProduct"]);

const submitForm = () => {
  useCustomEmits("addProduct", newProduct.value);
};
</script>

<style>
.modal {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
</style>