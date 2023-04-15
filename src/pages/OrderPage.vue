<script>
import LayoutHi from 'src/layouts/layoutHi.vue';
import { getOrder } from 'src/service/OrderService';
import { ref } from 'vue';

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
    name: 'Sana',
    label: 'SANA',
    field: 'orderTime',
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
    field: (row) => row.customer?.fullname,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Number',
    align: 'center',
    required: true,
    label: 'TELEFON RAQAM',
    field: (row) => row.customer?.contact,
    sortable: true,
  },
  {
    name: 'Soni',
    label: 'SONI',
    required: true,
    align: 'center',
    field: (row) => row.count || 1,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'narxi',
    label: 'NARXI',
    required: true,
    field: (row) => row.foods[0]?.cost,
    format: (val) => `${val} so'm`,
    sortable: true,
    align: 'center',
  },
  {
    name: 'Manzil',
    label: 'MANZIL',
    required: true,
    field: 'adress',
    align: 'center',
  },
  {
    name: 'Driver',
    label: 'DRIVER',
    field: (row) => row?.driver[0]?.car_number,
    align: 'center',
  },
  // {v
];

let rows = ref([]);

async function eledd() {
  let orders = await getOrder();
  rows.value = orders;
}

eledd();
let current_clicked_row = (_evt, row, _index) => {
  console.log(row.customer.id);
};

export default {
  setup() {
    return {
      columns,
      rows,
      current_clicked_row
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
          @row-click="current_clicked_row"
          :rows="rows"
          class="order__table"
          table-header-class="order__table-header"
          :columns="columns"
          row-key="id"

        >
          <!-- <template #body-cell-Holat="props">
            <q-td :id="row.Id" :props="props" style="display: flex; align-items: center;">{{row.fullname}}</q-td>
          </template> -->
        </q-table>
      </div>
    </section>
  </layout-hi>
</template>

<style lang="scss">
.order__table-header {
  background-color: #2e3444;
  th {
    color: white;
  }
}
</style>
