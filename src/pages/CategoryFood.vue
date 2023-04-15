<script>
import LayoutHi from 'src/layouts/layoutHi.vue';

const column = [
  {
    name: 'Id',
    align: 'left',
    label: 'ID',
    field: 'Id',
  },
  {
    name: 'DOKONLAR',
    label: 'DOKONLAR',
    align: 'center',
    required: true,
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'tovar soni',
    label: 'TOVAR SONI',
    field: 'tovarSoni',
    required: true,
    outerWidth: 1000,
    sortable: true,
    align: 'center',
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
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
    fat: 1,
    name: 'name',
    required: true,
    label: 'MANZIL',
    align: 'center',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Manzil',
    label: 'HOLAT',
    required: true,
    field: 'Manzil',
    align: 'center',
  },
  {
    name: 'Holat',
    label: 'HOLAT',
    required: true,
    field: 'Holat',
    align: 'center',
    sortable: true,
    sort: (row) => row.holat,
    format: (val) => `${val}`,
  },
];

const row = [
  {
    Id: 1,
    name: 'Evos',
    Number: +998901234567,
    Narxi: '100 000',
    Soni: 5,
    Manzil: '🚩',
    Driver: 'NOT SELECTED',
    Holat: 'enabled',
    tovarSoni: 'Iyun 14, 00:00',
  },
  {
    Id: 2,
    name: 'Oqtepa lavash',
    Number: +998901122122,
    Soni: 1,
    Narxi: '100 000',
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'disabled',
    tovarSoni: 'Iyun 14, 00:00',
  },
  {
    Id: 3,
    name: 'MaxWay',
    Number: +998900112121,
    Soni: 1,
    Narxi: 3,
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'enabled',
    tovarSoni: 'Iyun 14, 00:00',
  },
  {
    Id: 4,
    name: 'KFC',
    Number: +998911117777,
    Soni: 1,
    Narxi: 2,
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'enabled',
    tovarSoni: 'Iyun 14, 00:00',
  },
  {
    Id: 5,
    name: 'Street 77',
    Number: +998901234567,
    Soni: 1,
    Narxi: '100 000',
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'enabled',
    tovarSoni: 'Iyun 14, 00:00',
  },
  {
    Id: 6,
    name: 'Chopar Pizza',
    Number: +998907654321,
    Soni: 5,
    Narxi: '100 000',
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'enabled',
    tovarSoni: 'Iyun 14, 00:00',
  },
];

// for (let i = 0; i < row.length; i++) {
//   if (row[i].Holat == 'enabled') {
//     console.log(row[i].Holat);
//   }
// }

export default {
  setup() {
    return {
      column,
      row,
    };
  },
  components: { LayoutHi },
};
</script>

<template>
  <layout-hi>
    <section class="cagegoryfood">
      <div class="q-pa-md">
        <q-table
          :rows="row"
          table-header-class="cagegoryfood__table-header"
          table-class="cagegoryfood__table"
          class="cagegoryfood__table"
          :columns="column"
        >
          <template #body-cell-Holat="props">
            <q-td :id="row[1].Id" :props="props"> save </q-td>
          </template>
        </q-table>
      </div>
    </section>
  </layout-hi>
</template>

<style lang="scss">
.cagegoryfood__table-header {
  background-color: #2e3444 !important;
  th {
    color: white;
  }
}
</style>
