<script>
import LayoutHi from 'src/layouts/layoutHi.vue';
import { ref } from 'vue';

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
    name: 'Dokonlar',
    label: 'DOKONLAR',
    align: 'center',
    required: true,
    field: (row) => row.dokonlar,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Tahrirlash',
    label: 'TAHRIRLASH',
    field: 'tahrirlash',
    align: 'center',
    field: (row) => row.tahrirlash,
    sortable: true,
  },
  {
    name: 'STATUS',
    label: 'STATUS',
    align: 'center',
    field: 'Status',
  },
];

const rows = [
  {
    id: 1,
    name: 'Frozen Yogurt',
    tahrirlash: '🔍',
    dokonlar: '12',
  },
  {
    id: 2,
    name: 'Ice cream sandwich',
    tahrirlash: '🔍',
    dokonlar: '132',
  },
  {
    id: 3,
    name: 'Eclair',
    tahrirlash: '🔍',
    dokonlar: '112',
  },
  {
    id: 4,
    name: 'Cupcake',
    tahrirlash: '🔍',
    dokonlar: '412',
  },
  {
    id: 5,
    name: 'Gingerbread',
    tahrirlash: '🔍',
    dokonlar: '121',
  },
  {
    id: 6,
    name: 'Jelly bean',
    tahrirlash: '🔍',
    dokonlar: '125',
  },
  {
    id: 7,
    name: 'Lollipop',
    tahrirlash: '🔍',
    dokonlar: '162',
  },
  {
    id: 8,
    name: 'Honeycomb',
    tahrirlash: '🔍',
    dokonlar: '126',
  },
  {
    id: 9,
    name: 'Donut',
    tahrirlash: '🔍',
    dokonlar: '12',
  },
  {
    id: 10,
    name: 'KitKat',
    tahrirlash: ' 🔍',
    dokonlar: '12',
  },
];

export default {
  setup() {
    return {
      selected: ref([]),
      columns,
      rows,
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
        row-key="name"
        table-header-class="product__thead"
        on-selection="false"
        class="product__table"
        v-model:selected="selected.id"
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
