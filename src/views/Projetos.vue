<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentProjeto />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentProjeto from "../components/ComponentProjeto.vue";

export default defineComponent({
  name: "ProjetosVue",
  components: {
    MenuBox,
    ComponentProjeto,
  },
});
</script>