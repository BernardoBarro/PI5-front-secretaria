
<template>
  <h1 class="titulo-cad-patr">CADASTRO DE PATROCINADOR</h1>
  <div class="circulo-cad-patr"></div>

  <div class="box-1-cad-patr">
    <div class="circulo-2-cad-patr"></div>
    <form class="form-cad-patr" method="get" action="">
      <input
        id="input-patrocinador-cad-patr"
        type="text"
        name="nome_patrocinador"
        ref="nome_patrocinador"
        placeholder=" Nome do Patrocinador"
      /><br />
      <input
        class="input-valor-cad-patr"
        type="number"
        name="valor"
        ref="valor"
        placeholder=" R$ 0.00"
      /><br />
      <textarea
        id="textarea"
        name="descricao"
        placeholder="Observações da Reunião"
        ref="descricao"
      ></textarea>
      <img class="img-cad-patr" src="../assets/icon-patrocinador.png" />
    </form>
  </div>
  <div class="container-botao-cad-patr">
    <router-link :to="{ name: 'patrocinador' }">
      <input
        class="botao-cad-patr"
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
  name: "ComponentCadastroPatrocinador",
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
        nome: this.$refs.nome_patrocinador.value,
        valorDecimal: this.$refs.valor.value,
        descricao: this.$refs.descricao.value,
      };
      console.log(postData);
      try {
        const res = await fetch("http://localhost:8080/patrocinador", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            charset: "utf-8",
            Authorization:'Bearer ${token}
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
.container-botao-cad-patr {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

#textarea {
  margin-top: 45px;
  margin-left: 22.8%;
  width: 57%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  color: var(--terceira-color);
  outline: none;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 9px 0px 108px 10px;
}

#textarea::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
}

.img-cad-patr {
  width: 218px;
  position: absolute;
  margin-left: -65%;
  margin-top: -2%;
}

.botao-cad-patr {
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

#input-patrocinador-cad-patr {
  color: var(--terceira-color);
  width: 57%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 22.7%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
}
.input-valor-cad-patr {
  color: var(--terceira-color);
  width: 44.5%;
  height: 40px;
  margin-top: 15px;
  outline: none;
  margin-left: -13.4%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  position: absolute;
}

.input-patrocinador-cad-patr::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}
.input-valor-cad-patr::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}

.box-1-cad-patr {
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
.form-cad-patr {
  margin-top: 33px;
}

.titulo-cad-patr {
  font-size: 40px;
  position: absolute;
  margin-left: 36%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}
.circulo-cad-patr {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}
.circulo-2-cad-patr {
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