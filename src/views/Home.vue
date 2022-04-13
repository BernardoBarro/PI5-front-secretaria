<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <div class="column is-narrow" style="margin-left: 14%; margin-right: 14%">
      <HoraBox />
      <DescricaoBox />
      <TabelaBox />
    </div>
    <div class="column">
      <RodapeBox />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import DescricaoBox from "../components/descricao-home/Descricao.vue";
import RodapeBox from "../components/rodape-home/Rodape.vue";
import HoraBox from "../components/hora-home/Hora.vue";
import TabelaBox from "../components/tabela-home/Tabela.vue";

export default defineComponent({
  name: "HomeApp",
  components: {
    MenuBox,
    DescricaoBox,
    RodapeBox,
    HoraBox,
    TabelaBox,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>
