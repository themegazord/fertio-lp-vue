<template>
  <div id="formulario-main-container">
    <div id="info-contato-formulario-main-container">
      <h1 id="titulo-info-contato">Informações de contato</h1>
      <div id="meio-info-contato">
        <div id="endereco-info-contato">
          <span id="titulo-endereco-info-container">
            <i class="fa-solid fa-location-dot"></i> Endereço
          </span>
          <p id="logradouro-endereco-info-container">
            R. Júlio Perneta, 250 Curitiba, PR 80810-110
          </p>
        </div>
        <div id="email-info-contato">
          <span id="titulo-email-info-container">
            <i class="fa-regular fa-envelope"></i> E-mail
          </span>
          <p id="email-email-info-container">contato@fertio.com.br</p>
        </div>
        <div id="telefones-info-contato">
          <span id="titulo-telefones-info-contato">
            <i class="fa-brands fa-whatsapp"></i> Telefones
          </span>
          <p class="telefones">(41) 3336-5465</p>
          <p class="telefones">(41) 9 9626-7118</p>
          <p class="telefones pe">(87) 9 8834-7713</p>
        </div>
      </div>
      <RedeSocial id="redes-sociais-form" />
    </div>
    <div id="form-contato">
      <div id="form-contato-content">
        <h1 id="titulo-form-contato">Torne-se um produtor de sucesso!</h1>
        <h3 id="sub-titulo-form-contato">
          Preencha o formulário abaixo e inicie a nova era da sua agricultura.
        </h3>
        <v-form id="form-form-contato" v-model="valid" @submit.prevent="submit">
          <v-text-field
            class="nome-completo"
            label="Nome Completo"
            placeholder="Nome Completo"
            solo></v-text-field>
          <div id="email-telefone-form-contato">
            <v-text-field class="email" label="E-mail" placeholder="E-mail" solo></v-text-field>
            <v-text-field
              class="telefone"
              label="Telefone"
              placeholder="Telefone" solo></v-text-field>
          </div>
          <v-text-field class="assunto" label="Assunto" placeholder="Assunto" solo></v-text-field>
          <v-textarea rows="10" label="Mensagem" solo></v-textarea>
          <div id="div-button">
            <button type="submit" id="submit-enviar">Enviar</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import RedeSocial from '../../components/RedeSocialComponent.vue';

export default {
  components: { RedeSocial },
  data: () => ({
    valid: false,
  }),
  methods: {
    submit() {

    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

/* Media Width */
@media screen and (max-width: 2560px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 145.6px;
  }

  #formulario-main-container {
    background-color: #092E58;
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100vw;
    height: 100vh;
  }

  #form-contato {
    background-color: #FFFFFF;
    border-radius: 58px 0 0 58px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #titulo-info-contato {
    font-size: 64px;
    line-height: 83.2px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.064em;
    color: #FFFFFF;
    margin-left: 50px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 56px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 91.2px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 36.8px;
    line-height: 51.2px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 24px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 36.8px;
    line-height: 51.2px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 60px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 68.8px;
    left: 204.8px;
    display: flex;
    gap: 28px;
  }

  #titulo-form-contato {
    font-size: 64px;
    line-height: 48px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 44.8px;
  }

  #sub-titulo-form-contato {
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 1200px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 86.4px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 50px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 91.2px;
    font-size: 32px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 28px;
    line-height: 28.8px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 56px;
  }

  #submit-enviar {
    width: 280px;
    height: 104px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 48px;
    line-height: 35.2px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}

/* Media Height */
@media screen and (max-height: 1300px) {
  #info-contato-formulario-main-container {
    margin-top: 131.4px;
  }

  #endereco-info-contato {
    margin-top: 82.3px;
  }
}
@media screen and (max-height: 1220px) {
  #info-contato-formulario-main-container {
    margin-top: 100.314px;
  }

  #endereco-info-contato {
    margin-top: 40.235px;
  }
}
</style>
