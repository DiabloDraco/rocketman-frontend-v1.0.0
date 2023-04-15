<script>
import LayoutHi from 'src/layouts/layoutHi.vue';
import { getCustomer } from 'src/service/CustomerService';
import { ref } from 'vue';
// import {ref} from 'vue'

// const read = ref()

const columns = [
  {
    name: 'Id',
    align: 'center',
    label: 'ID',
    field: 'id',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    fat: 1,
    name: 'name',
    required: true,
    label: 'ISM',
    align: 'center',
    field: 'fullname',
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Number',
    align: 'center',
    required: true,
    label: 'TELEFON RAQAM',
    field: 'contact',
    sortable: true,
  },
  {
    name: 'Soni',
    label: 'BUYURTMALAR',
    required: true,
    align: 'center',
    require: true,
    field: 'count',
    format: (val) => `${val}`,
    sortable: true,
  },
];

const rows = ref([])

async function onload(){
let res = await getCustomer()
rows.value = res
}

onload()
export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
  components: { LayoutHi },
};
</script>

<template>
  <layout-hi>
    <section class="order">
      <div class="q-pa-md">
        <q-table
          max-pages
          flat
          bordered
          :rows="rows"
          :columns="columns"
          row-key="name"
          table-header-class="salom"
          title-class="salom">

        </q-table>
      </div>
    </section>
  </layout-hi>
</template>

<style lang="scss">
.salom {
  background: #2e3444 !important;
  color: white !important;
  th {
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
