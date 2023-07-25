
<template>
  <AddProductForm
    v-if="showModal"
    @close="showModal = false"
    @addProduct="handleAddProduct"
  />
  <div class="card">
    <DataTable
      :value="products"
      show-gridlines 
      table-style="min-width: 50rem;"
    >
      <template #header>
        <div class="header-button">
          <Button
            label="Adaugă"
            @click="showModal = true"
          />
        </div>
      </template>
      <Column
        field="id"
        header="ID"
      />
      <Column
        field="denumire"
        header="Denumire"
      />
      <Column
        field="stoc"
        header="Stoc"
      />
      <Column
        field="pret"
        header="Pret"
        mode="decimal"
      />
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import GridDropdown from "./GridDropdown.vue";
import AddProductForm from "./AddProductForm.vue";

interface Product {
  id: string;
  denumire: string;
  stoc: number;
  pret: number;
}

const getProductsMini = () => {
  return [
    {
      id: "1",
      denumire: "HyperX Cloud Alpha Wireless",
      stoc: 26,
      pret: 1250,
    },
    {
      id: "2",
      denumire: "Lenovo Thinkpad X1 Carbon Gen 10",
      stoc: 17,
      pret: 15.999,
    },
    {
      id: "3",
      denumire: "Logitech G502 Hero",
      stoc: 32,
      pret: 217.80,
    },
    {
      id: "4",
      denumire: "Corsair K70 RGB MK.2 Rapidfire",
      stoc: 5,
      pret: 1066,
    },
    {
      id: "5",
      denumire: "Produs 5",
      stoc: 12,
      pret: 10,
    },
    {
      id: "6",
      denumire: "Produs 6",
      stoc: 12,
      pret: 10,
    },
    {
      id: "7",
      denumire: "Produs 7",
      stoc: 12,
      pret: 10,
    },
    {
      id: "8",
      denumire: "Produs 8",
      stoc: 12,
      pret: 10,
    },
  ];
};

const products = ref<Product[]>([]);
const showModal = ref(false);

onMounted(() => {
  const data = getProductsMini();
  products.value = data;
});

const handleAddProduct = (newProduct: Product) => {
  products.value.push(newProduct);
  showModal.value = false;
}

</script>

<style>
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.header-button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>