<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentEdicaoPerfil />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentEdicaoPerfil from "../components/ComponentEdicaoPerfil.vue";

export default defineComponent({
  name: "EdicaoPerfil",
  components: {
    MenuBox,
    ComponentEdicaoPerfil,
  },
});
</script>
