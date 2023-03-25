<script lang="ts">
const columns = [
  {
    name: 'name',
    required: true,
    label: 'KATEGORIYA',
    align: 'center',
    field: (row: { name: string }) => row.name,
    format: (val: string) => `${val}`,
    sortable: true,
  },
  {
    name: 'Id',
    align: 'center',
    label: 'ID',
    field: 'Id',
    sortable: true,
    sort: (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    fat: 1,
    name: 'name',
    required: true,
    label: 'ISM',
    align: 'center',
    field: (row: { name: string }) => row.name,
    format: (val: string) => `${val}`,
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
    field: (row: { [x: string]: string; name: string }) => row.Soni,
    format: (val: string) => `${val}`,
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
};
</script>

<template>
  <section class="order">
    <div class="q-pa-md">
      <q-table
        max-pages
        title="Treats"
        :rows="rows"
        class="order__table"
        :columns="columns"
        row-key="name"
      />
    </div>
  </section>
</template>
