<script>
import LayoutHi from 'src/layouts/layoutHi.vue';
import { ref } from 'vue';
import { getCategory } from 'src/service/CategoryService';

let arr = [
  1,
  3,
  1,
  2,
  6
]

const columns = [
{
  name: 'name',
  required: true,
  label: 'KATEGORIYA',
  align: 'center',
  field: (row) => row.categories_name,
  format: (val) => `${val}`,
  sortable: true,
  id: (row) => row.id
},
{
  name: 'Dokonlar',
  label: 'DOKONLAR',
  align: 'center',
  required: true,
  field: (row) => row.dokonlar || arr[0],
  format: (val) => `${val}`,
  sortable: true,
},
{
  name: 'Tahrirlash',
  label: 'TAHRIRLASH',
  field: 'tahrirlash',
  align: 'center',
  field: (row) => row.tahrirlash || '⛳',
  id: (row) => row.id
},
{
  name: 'STATUS',
  label: 'STATUS',
  align: 'center',
  field: (row) => row.status,
},
];




let rows = ref([]);
async function add() {
  let orders = await getCategory();
  rows.value = orders;
}

add();

let current_clicked_row = (__evt, row, __arr) => {
  console.log(row.id);
};

export default {
  setup() {
    return {
      selected: ref([]),
      columns,
      rows,
      current_clicked_row

    };
  },
  components: { LayoutHi },
};
</script>

<template>
  <LayoutHi>
    <section class="category">
      <div class="category__top">
        <p class="category__text">
          home / <span class="category__bold">kategory</span>
        </p>
        <button class="category__btn" type="submit">
          Qo'shish
          <div class="category__img-wrapper">
            <img
            class="category__img"
            src="../assets/icons/category__svg.svg"
            alt=""
            width="6.27"
            height="6.13"
            />
          </div>
        </button>
      </div>
      <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      :key="columns.id"
      :visible-columns="myCols"
      row-key="name"
      table-header-class="product__thead"
      on-selection="false"
      class="product__table"
      v-model:selected="selected.id"
      @row-click="current_clicked_row"

      >
      <!-- <template v-slot:header-selection>
        <h2 class="product__header"></h2>
      </template> -->
      <!-- <template v-slot:body-selection="scope">
        <q-toggle
        v-model="scope.selected"
        color="pink"
        :field="scope.selected"
        />
      </template> -->
    </q-table>
  </section>
</LayoutHi>
</template>

<style lang="scss">
thead {
  background-color: #2e3444;
}

.product__thead {
  background-color: #2e3444;
  th {
    color: white;
  }
}

.product__header {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}
.category__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
.category__text {
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.6);
  margin: auto 0;
}
.category__bold {
  color: #000000;
}
.category__btn {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  background: #3eb597;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  padding: 9px 26px;
  transition: all 0.4s ease;
}
.category__btn:hover {
  background-color: #4f5668;
  cursor: pointer;
}
.category__img-wrapper {
  border: 1px solid white;
  margin-left: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  width: 22px;
  height: 22px;
  padding: 9px 0.73px 7.87px 7.4px;
}

.product__thead {
  background-color: #2e3444;
}
.product__thead th {
  background-color: #2e3444;
}
</style>
