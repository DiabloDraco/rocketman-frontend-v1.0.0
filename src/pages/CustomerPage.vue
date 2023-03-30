<script>
import LayoutHi from 'src/layouts/layoutHi.vue';
// import {ref} from 'vue'

// const read = ref()

const columns = [
  {
    name: 'name',
    required: true,
    label: 'KATEGORIYA',
    align: 'center',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Id',
    align: 'center',
    label: 'ID',
    field: 'Id',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    fat: 1,
    name: 'name',
    required: true,
    label: 'ISM',
    align: 'center',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Number',
    align: 'center',
    required: true,
    label: 'TELEFON RAQAM',
    field: 'Number',
    sortable: true,
  },
  {
    name: 'Soni',
    label: 'BUYURTMALAR',
    required: true,
    align: 'center',
    require: true,
    field: (row) => row.Soni,
    format: (val) => `${val}`,
    sortable: true,
  },
];

const rows = [
  {
    Id: 1,
    name: 'Ali Zairov',
    Number: +998901234567,
    Soni: 1,
  },
  {
    Id: 2,
    name: 'Abdulmajidxonov Abdulfattohxon',
    Number: +998901122122,
    Soni: 1,
  },
  {
    Id: 3,
    name: 'Usmon Mas’udjonov',
    Number: +998900112121,
    Soni: 1,
  },
  {
    Id: 4,
    name: 'Farruhbek Abbosov',
    Number: +998911117777,
    Soni: 1,
  },
  {
    Id: 5,
    name: 'Shuhratbek Qobulov',
    Number: +998901234567,
    Soni: 1,
  },
  {
    Id: 6,
    name: 'Bobur Mavlonov',
    Number: +998907654321,
    Soni: 5,
  },
  {
    Id: 7,
    name: 'Toxir Torayev',
    Number: +998906142005,
    Soni: 99,
  },
  {
    Id: 8,
    name: 'Mirmuhsin Mirahmatov',
    Number: +998900006151,
    Soni: 9,
  },
  {
    Id: 9,
    name: 'Isayev Muxammad Bobur',
    Number: +998901234567,
    Soni: 7,
  },
  {
    Id: 10,
    name: 'Ahror Adhamxo`jayev',
    Number: +998901234567,
    Soni: 1,
  },
];

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
          table-style="color:red;"
          max-pages
          flat bordered
          selection="single"
          :rows="rows"
          :columns="columns"
          row-key="name"
          table-header-class="salom"
          title-class="salom"
        >
          <template v-slot:body-selection="scope">
            <q-toggle v-model="scope.selected" />
          </template>
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
