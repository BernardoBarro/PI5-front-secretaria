<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentCadastroMembros />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentCadastroMembros from "../components/ComponentCadastroMembros.vue";

export default defineComponent({
  name: "CadastroMembros",
  components: {
    MenuBox,
    ComponentCadastroMembros,
  },
});
</script>