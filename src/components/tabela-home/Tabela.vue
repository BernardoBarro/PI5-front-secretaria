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
        <td class="titulo">Idade</td>
      </tr>
      <tr>
        <td>Ted</td>
        <td>22</td>
      </tr>
      <tr>
        <td>Ralf</td>
        <td>26</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabelaBox",
});
</script>

<style scoped>
#table-box {
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border-radius: 9px;
}
.titulo {
  text-align: center;
}
</style>