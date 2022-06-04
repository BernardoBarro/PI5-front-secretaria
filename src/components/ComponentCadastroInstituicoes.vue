<template>
  <h1 class="titulo-cad-inst">CADASTRO DE INSTITUIÇÕES</h1>
  <div class="circulo-cad-inst"></div>

  <div class="box-1-cad-inst">
    <div class="circulo-2-cad-inst"></div>
    <form class="form-cad-inst" method="get" action="">
      <input
        type="text"
        name="nome"
        ref="post_nome"
        placeholder=" Nome"
      /><br />
      <input
        type="text"
        name="contato"
        ref="post_contato"
        placeholder=" Contato"
      /><br />
      <textarea
        id="textarea"
        name="restricao-medica"
        ref="post_descricao"
        placeholder=" Detalhes"
      ></textarea>
    </form>
  </div>

  <div class="container-botao-cad-inst">
    <router-link :to="{ name: 'instituicoes' }">
      <input
        class="botao-cad-inst"
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
  name: "ComponentCadastroInstituicoes",
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
        nome: this.$refs.post_nome.value,
        contato: this.$refs.post_contato.value,
      };
      try {
        const res = await fetch("http://localhost:8080/instituicao", {
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

<style scoped>
.container-botao-cad-inst {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-cad-inst {
  background-color: #f970a4;
  border: none;
  border-radius: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -93px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
}

input[type="text"] {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
}

#textarea {
  margin-top: 18px;
  margin-left: 29px;
  width: 77%;
  padding-bottom: 122px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
  color: #f970a4;
}

input[type="text"]::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

#textarea::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}

.box-1-cad-inst {
  background-color: white;
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

.form-cad-inst {
  margin-top: 58px;
}

.titulo-cad-inst {
  font-size: 40px;
  position: absolute;
  margin-left: 40%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
}

.circulo-cad-inst {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-cad-inst {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f2f2f2;
  position: absolute;
  display: inline-block;
  margin-left: -37%;
  margin-top: 2%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>