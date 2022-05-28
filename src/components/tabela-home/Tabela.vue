<template>
  <div class="container">
    <table
      border="1"
      id="table-box"
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
      style="border-radius: 9px"
    >
      <tr>
        <td class="titulo">Nome</td>
        <td class="titulo">Data</td>
      </tr>
      <td>
        <li class="li-tab" v-for="datas in data" :key="datas.nome">
          {{ datas.nome }}
        </li>
      </td>

      <td>
        <li class="li-tab" v-for="datas in data" :key="datas.data">
          {{ datas.data }}
        </li>
      </td>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabelaBox",
  data() {
    return {
      data: {},
    };
  },
  beforeMount() {
    this.getName();
  },

  methods: {
    async getName() {
      const res = await fetch("http://localhost:8080/reuniao");
      const data = await res.json();
      this.data = data;
    },
  },
});
</script>

<style scoped>
.li-tab {
  list-style-type: none;
  width: 92.2%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 9px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
}

#table-box {
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border-radius: 9px;
  overflow-y: scroll;
}
.titulo {
  text-align: center;
}
</style>