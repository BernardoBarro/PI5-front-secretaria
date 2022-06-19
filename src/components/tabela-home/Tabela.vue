<template>
  <div class="container">
    <table class="tab-reu">
      <tr>
        <td>
          <table class="tab-reu-2" border="1" width="100%">
            <tr class="tr-tab" style="background-color: white">
              <th style="color: var(--terceira-color); width: 52%">Nome</th>
              <th style="color: var(--terceira-color)">Data</th>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <div
            class="div-tab-reu"
            style="width: 450px; height: 150px; overflow: auto"
          >
            <table class="tab-reu-3" border="1" width="420">
              <tr class="tr-reu">
                <td class="li-reu">
                  <li
                    class="li-reuniao"
                    v-for="datas in data"
                    :key="datas.nome"
                  >
                    <router-link
                      :to="{ name: 'edicao-reuniao', params: { id: datas.id } }"
                    >
                      <div class="tab-reu">
                        {{ datas.nome }}
                      </div>
                    </router-link>
                  </li>
                </td>
                <td class="li-reu">
                  <li v-for="datas in data" :key="datas.data">
                    <div class="tab-reu">
                      {{ datas.dataReuniao }}
                    </div>
                  </li>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
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
      const token = localStorage.getItem("@Auth");
      const res = await fetch("http://localhost:8080/reuniao", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const data = await res.json();
      this.data = data;
    },
  },
});
</script>

<style>
.tr-tab {
  border: none;
  text-align: center;
}

.div-tab-reu::-webkit-scrollbar {
  background-color: transparent;
  border-radius: 20px;
  border: 3px solid var(--principal-color);
  width: 8px;
}

.div-tab-reu::-webkit-scrollbar-thumb {
  background-color: var(--terceira-color);
  border-radius: 20px;
}

.ul-reu {
  max-width: 100%;
  overflow: scroll;
}
.tab-reu {
  width: 92.2%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--segunda-color);
  border-radius: 3px;
  padding: 1%;
  color: var(--terceira-color);
  text-align: left;
  padding-left: 5%;
  padding-top: 4%;
}

.tab-reu-3 {
  outline: none;
  border: none;
}

.li-reu {
  list-style-type: none;
  width: 56%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 52px;
  border: none;
  background-color: var(--segunda-color);
  border-radius: 3px;
  padding-left: 3%;
}
</style>