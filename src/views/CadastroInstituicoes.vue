<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentCadastroInstituicoes />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentCadastroInstituicoes from "../components/ComponentCadastroInstituicoes.vue";

export default defineComponent({
  name: "CadastroInstituicoes",
  components: {
    MenuBox,
    ComponentCadastroInstituicoes,
  },
});
</script>