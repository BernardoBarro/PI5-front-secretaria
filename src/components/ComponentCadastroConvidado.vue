<template>
  <h1 class="titulo-cad-conv">CADASTRO DE CONVIDADOS</h1>
  <div class="circulo-cad-conv"></div>
  <div class="box-1-cad-conv">
    <div class="circulo-2-cad-conv"></div>
    <form class="form-cad-conv" method="get" action="">
      <input
        id="nome-reuniao-cad-conv"
        type="text"
        name="cidade"
        ref="nome_convidado"
        placeholder="Nome do convidado"
      /><br />
      <img class="img-cad-conv" src="../assets/icon-convidado.png" />
      <input
        id="telefone-cad-conv"
        type="text"
        required
        ref="tel_convidado"
        placeholder="Telefone"
      /><br />
    </form>
  </div>

  <div class="container-botao-cad-conv">
    <router-link :to="{ name: 'convidados' }">
      <input
        class="botao-cad-conv"
        type="submit"
        name="salvar"
        value="Salvar"
        @click="postData"
      />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComponentCadastroConvidado",
  data() {
    return {
      postResult: null,
    };
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    async postData() {
      const postData = {
        nome: this.$refs.nome_convidado.value,
        contato: this.$refs.tel_convidado.value,
      };
      console.log(postData);
      try {
        const res = await fetch("http://localhost:8080/convidado", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            charset: "utf-8",
          },
          body: JSON.stringify(postData),
        });

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
      } catch (err) {
        this.postResult = err.message;
      }
    },
  },
});
</script>

<style>
input[type="text"]::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
}
.img-cad-conv {
  width: 218px;
  position: absolute;
  margin-left: -13%;
  margin-top: 2%;
  margin-left: -29%;
}
.container-botao-cad-conv {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}
.botao-cad-conv {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -93px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
}

#telefone-cad-conv {
  width: 41.8%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  margin-left: -10%;
  position: absolute;
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
  padding: 0px 0px 0px 10px;
}
.telefone-cad-conv::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
}
.box-1-cad-conv {
  background-color: var(--segunda-color);
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
.form-cad-conv {
  margin-top: 35px;
}

.titulo-cad-conv {
  font-size: 40px;
  position: absolute;
  margin-left: 41%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}
.circulo-cad-conv {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}
.circulo-2-cad-conv {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--principal-color);
  position: absolute;
  display: inline-block;
  margin-left: -37%;
  margin-top: 2%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>