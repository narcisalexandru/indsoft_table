/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row';
import ColumnGroup from 'primevue/columngroup';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Toast from "primevue/toast";
import Dialog from 'primevue/dialog';

import "primevue/resources/themes/lara-light-blue/theme.css"

createApp(App)
.use(router)
.use(PrimeVue)
.component("DataTable", DataTable)
.component("Column", Column)
.component("ColumnGroup", ColumnGroup)
.component("Row", Row)
.component("Dropdown", Dropdown)
.component("Button", Button)
.component("InputText", InputText)
.component("InputNumber", InputNumber)
.component("Toast", Toast)
.component("Dialog", Dialog)
.mount("#app");
