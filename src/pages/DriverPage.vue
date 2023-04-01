<script>
const columns = [
  {
    name: 'Id',
    align: 'center',
    label: 'ID',
    field: 'Id',
    // sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    fat: 1,
    name: 'name',
    required: true,
    label: 'FAMILIYA ISMI',
    align: 'center',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Sana',
    label: 'D.O.B',
    field: 'Sana',
    required: true,
    outerWidth: 1000,
    align: 'center',
  },
  {
    name: 'Number',
    align: 'center',
    required: true,
    label: 'TELEFON RAQAM',
    field: 'Number',
    sortable: true,
  },
  { name: 'Driver', label: 'AVTORAQAM', field: 'Driver', align: 'center' },
  {
    name: 'Turi',
    label: 'TURI',
    required: true,
    field: (row) => row.Turi,
    format: (val) => `${val}`,
    sortable: true,
    align: 'center',
  },
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
];

const rows = [
  {
    Id: 1,
    name: 'Ali Zairov',
    Number: +998901234567,
    Turi: 'Merc',
    Tahrirlash: '🖌',
    Driver: 'NOT SELECTED',
    Holat: 'buyurtma',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 2,
    name: 'Abdulmajidxonov Abdulfattohxon',
    Number: +998901122122,
    Turi: 'Merc',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'tayyorlanmoqda',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 3,
    name: 'Usmon Mas’udjonov',
    Number: +998900112121,
    Turi: 'Lacetti',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'buyurtma',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 4,
    name: 'Farruhbek Abbosov',
    Number: +998911117777,
    Turi: 'Tesla',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'qabul',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 5,
    name: 'Shuhratbek Qobulov',
    Number: +998901234567,
    Turi: 'Merc',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'bekor',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 6,
    name: 'Bobur Mavlonov',
    Number: +998907654321,
    Turi: 'Merc',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'yakun',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 7,
    name: 'Toxir Torayev',
    Number: +998906142005,
    Turi: 'Tesla',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'yetkazish',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 8,
    name: 'Mirmuhsin Mirahmatov',
    Number: +998900006151,
    Turi: 'Ferrari',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'yakun',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 9,
    name: 'Isayev Muxammad Bobur',
    Number: +998901234567,
    Turi: 'Lamborgini',
    Tahrirlash: '🖌',
    Driver: '01 | S 777 AA',
    Holat: 'yetkazish',
    Sana: 'Iyun 14, 00:00',
  },
  {
    Id: 10,
    name: 'Ahror Adhamxo`jayev',
    Number: +998901234567,
    Turi: 'Raketa',
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
  <section class="driver">
    <div class="q-pa-md">
      <q-table
        :rows="rows"
        class="driver__table"
        :columns="columns"
        table-header-class="driver__t-header"
        table-colspan="hi"
        row-key="name"
      />
    </div>
  </section>
</template>

<style lang="scss">
.driver {
  position: static;
  z-index: 0;
  padding-top: 30px;
}
.driver__t-header {
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
