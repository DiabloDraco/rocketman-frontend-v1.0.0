<script>
import LayoutHi from 'src/layouts/layoutHi.vue';

const columns = [
  {
    name: 'Id',
    align: 'center',
    label: 'ID',
    field: 'Id',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'Sana',
    label: 'SANA',
    field: 'Sana',
    required: true,
    outerWidth: 1000,
    sortable: true,
    align: 'center',
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
    label: 'SONI',
    required: true,
    align: 'center',
    field: (row) => row.Soni,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'narxi',
    label: 'NARXI',
    required: true,
    field: (row) => row.Narxi,
    format: (val) => `${val}`,
    sortable: true,
    align: 'center',
  },
  {
    name: 'Manzil',
    label: 'MANZIL',
    required: true,
    field: 'Manzil',
    align: 'center',
  },
  { name: 'Driver', label: 'DRIVER', field: 'Driver', align: 'center' },
  {
    name: 'Holat',
    label: 'HOLAT',
    required: true,
    field: 'Holat',
    align: 'center',
    sort: (row) => row.holat,
    format: (val) => `${val}`,
    sortable: true,
  },
];

const rows = [
  {
    Id: 1,
    name: 'Ali Zairov',
    Number: +998901234567,
    Narxi: '100 000',
    Soni: 5,
    Manzil: '🚩',
    Driver: 'NOT SELECTED',
    Holat: 'buyurtma',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 2,
    name: 'Abdulmajidxonov Abdulfattohxon',
    Number: +998901122122,
    Soni: 1,
    Narxi: '100 000',
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'tayyorlanmoqda',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 3,
    name: 'Usmon Mas’udjonov',
    Number: +998900112121,
    Soni: 1,
    Narxi: 3,
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'buyurtma',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 4,
    name: 'Farruhbek Abbosov',
    Number: +998911117777,
    Soni: 1,
    Narxi: 2,
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'qabul',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 5,
    name: 'Shuhratbek Qobulov',
    Number: +998901234567,
    Soni: 1,
    Narxi: '100 000',
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'bekor',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 6,
    name: 'Bobur Mavlonov',
    Number: +998907654321,
    Soni: 5,
    Narxi: '100 000',
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'yakun',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 7,
    name: 'Toxir Torayev',
    Number: +998906142005,
    Soni: 99,
    Narxi: '100 000',
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'yetkazish',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 8,
    name: 'Mirmuhsin Mirahmatov',
    Number: +998900006151,
    Soni: 9,
    Narxi: '100 000',
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'yakun',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 9,
    name: 'Isayev Muxammad Bobur',
    Number: +998901234567,
    Soni: 7,
    Narxi: '100 000',
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'yetkazish',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 10,
    name: 'Ahror Adhamxo`jayev',
    Number: +998901234567,
    Soni: 1,
    Narxi: '100 000',
    Manzil: '🚩',
    Driver: '01 | S 777 AA',
    Holat: 'qabul',
    Sana: 'Iyun 14, 00:00',
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
          :rows="rows"
          class="order__table"
          :columns="columns"
          row-key="name"
        />
      </div>
    </section>
  </layout-hi>
</template>

<style scoped lang="scss">
thead {
  background-color: #2e3444;
}
</style>
