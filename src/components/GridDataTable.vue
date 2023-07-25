<template>
  <AddProductForm
    v-if="showModal"
    @cancel-form="showModal = false"
    @add-product="handleAddProduct"
  />
  <div class="card">
    <DataTable
      v-model:editing-rows="editingRows"
      :value="products"
      edit-mode="row"
      data-key="id"
      table-class="editable-cells-table"
      show-gridlines
      table-style="min-width: 1680px;"
      @row-edit-save="onRowEditSave"
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
      >
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column
        field="denumire"
        header="Denumire"
      >
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column
        field="stoc"
        header="Stoc"
      >
        <template #editor="{ data, field }">
          <InputNumber v-model="data[field]" />
        </template>
      </Column>
      <Column
        field="pret"
        header="Pret"
      >
        <template #body="{ data, field }">
          {{ formatCurrency(data[field]) }}
        </template>
        <template #editor="{ data, field }">
          <InputNumber
            v-model="data[field]"
            :value="data[field]"
            mode="currency"
            currency="RON"
          />
        </template>
      </Column>
      <Column
        header="Actiuni"
        :row-editor="true"
        style="width: 10%; min-width: 8rem"
        body-style="text-align:center"
      />
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import AddProductForm from "./AddProductForm.vue";

const editingRows = ref([]);
const products = ref<Product[]>([]);
const showModal = ref(false);

interface Product {
  id: string;
  denumire: string;
  stoc: number;
  pret: number;
}


const onRowEditSave = (event: { newData: Product, index: number }) => {
    let { newData, index } = event;
    products.value[index] = newData;
};

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

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ro-RO', { style: 'currency', currency: 'RON' }).format(value);
}

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