<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'NOMI',
    align: 'center',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Number',
    align: 'center',
    required: true,
    label: 'TELEGRAM BUTTON NAME',
    field: 'Number',
    sortable: true,
  },
  { name: 'Driver', label: 'AVTORAQAM', field: 'Driver', align: 'center' },
  {
    name: 'Holat',
    label: 'HOLAT',
    required: true,
    field: 'Holat',
    align: 'center',
    sort: (row) => row.holat,
    format: (val) => `${val}`,
  },
  {
    name: 'Tahrirlash',
    label: 'TAHRIRLASH',
    required: true,
    field: 'Tahrirlash',
    align: 'center',
  },
  {
    name: 'O`chirish',
    label: 'O`CHIRISH',
    required: true,
    field: (row) => row.Ochirish,
    format: (val) => `${val}`,
    sortable: true,
    align: 'center',
  },
];

const rows = [
  {
    Id: 1,
    name: 'Ali Zairov',
    Number: +998901234567,
    Ochirish: '🗑',
    Tahrirlash: '🖌',
    Driver: 'NOT SELECTED',
    Holat: 'buyurtma',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 2,
    name: 'Abdulmajidxonov Abdulfattohxon',
    Number: +998901122122,
    Ochirish: '🗑',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'tayyorlanmoqda',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 3,
    name: 'Usmon Mas’udjonov',
    Number: +998900112121,
    Ochirish: '🗑',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'buyurtma',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 4,
    name: 'Farruhbek Abbosov',
    Number: +998911117777,
    Ochirish: '🗑',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'qabul',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 5,
    name: 'Shuhratbek Qobulov',
    Number: +998901234567,
    Ochirish: '🗑',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'bekor',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 6,
    name: 'Bobur Mavlonov',
    Number: +998907654321,
    Ochirish: '🗑',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'yakun',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 7,
    name: 'Toxir Torayev',
    Number: +998906142005,
    Ochirish: '🗑',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'yetkazish',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 8,
    name: 'Mirmuhsin Mirahmatov',
    Number: +998900006151,
    Ochirish: '🗑',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'yakun',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 9,
    name: 'Isayev Muxammad Bobur',
    Number: +998901234567,
    Ochirish: '🗑',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'yetkazish',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 10,
    name: 'Ahror Adhamxo`jayev',
    Number: +998901234567,
    Ochirish: '🗑',
    Tahrirlash: '🖌',
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
};
</script>

<template>
  <section class="payment">
    <div class="q-pa-md">
      <q-table
        :rows="rows"
        class="payment__table"
        :columns="columns"
        table-header-class="payment__t-header"
        row-key="name"
      />
    </div>
  </section>
</template>

<style lang="scss">
.payment {
  position: static;
  z-index: 0;
  padding-top: 30px;
}
.payment__t-header {
  background-color: #2e3444 !important;

  th {
    color: white;
  }
}
.q-table tbody tr td {
  transition: all 0.3s ease;
  &:active {
    background-color: #dcdcdc;
  }
}

</style>
