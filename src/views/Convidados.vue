<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentConvidados />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentConvidados from "../components/ComponentConvidados.vue";

export default defineComponent({
  name: "ConvidadosVue",
  components: {
    MenuBox,
    ComponentConvidados,
  },
});
</script>
