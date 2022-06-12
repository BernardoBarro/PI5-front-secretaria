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
      <td class="tabela-reu">
        <li class="li-reuniao" v-for="datas in data" :key="datas.nome">
          <router-link
            :to="{ name: 'edicao-reuniao', params: { id: datas.id } }"
          >
            <div class="tab-reu">
              {{ datas.nome }}
            </div>
          </router-link>
        </li>
      </td>

      <td>
        <li class="li-reuniao" v-for="datas in data" :key="datas.data">
          <div class="tab-reu">
            {{ datas.dataReuniao }}
          </div>
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
.li-reuniao {
  list-style-type: none;
}

.tab-reu {
  width: 92.2%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 9px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  padding: 1%;
  color: #f970a4;
  text-align: left;
  padding-left: 5%;
  padding-top: 4%;
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