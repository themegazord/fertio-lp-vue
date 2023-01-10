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
            v-model="nome"
            class="nome-completo"
            label="Nome Completo"
            placeholder="Nome Completo"
            solo></v-text-field>
          <div id="email-telefone-form-contato">
            <v-text-field
              v-model="email"
              class="email"
              label="E-mail"
              placeholder="E-mail" solo>
            </v-text-field>
            <v-text-field
              v-model="telefone"
              class="telefone"
              label="Telefone"
              placeholder="Telefone" solo></v-text-field>
          </div>
          <v-text-field
            v-model="assunto"
            class="assunto"
            label="Assunto"
            placeholder="Assunto" solo>
          </v-text-field>
          <v-textarea v-model="mensagem" rows="7" label="Mensagem" solo></v-textarea>
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
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  }),
  methods: {
    submit() {
      const fullMessage = encodeURI(`Olá 😊.$Meu nome é *${this.nome
      }* e fiquei interessado no seu produto.$✉️ = *${this.email}*.$📱 = *${
        this.telefone}*.$🤔 = *${this.assunto}*.$💬 = *${this.mensagem}*`);

      window.open(`https://api.whatsapp.com/send?phone=5541996267118&text=${fullMessage.replaceAll('$', '%0D')}`);
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
@media screen and (max-width: 1920px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 109.2px;
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
    font-size: 48px;
    line-height: 62.4px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.048em;
    color: #FFFFFF;
    margin-left: 37.5px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 42px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 68.4px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 27.6px;
    line-height: 38.4px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 18px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 27.6px;
    line-height: 38.4px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 45px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 51.6px;
    left: 153.6px;
    display: flex;
    gap: 21px;
  }

  #titulo-form-contato {
    font-size: 48px;
    line-height: 36px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 33.6px;
  }

  #sub-titulo-form-contato {
    font-size: 30px;
    line-height: 36px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 900px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 64.8px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 37.5px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 68.4px;
    font-size: 24px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 21px;
    line-height: 21.6px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 42px;
  }

  #submit-enviar {
    width: 210px;
    height: 78px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 36px;
    line-height: 26.4px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1600px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 91px;
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
    font-size: 40px;
    line-height: 52px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.040em;
    color: #FFFFFF;
    margin-left: 31.25px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 35px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 57px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 23px;
    line-height: 32px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 15px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 23px;
    line-height: 32px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 37.5px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 43px;
    left: 128px;
    display: flex;
    gap: 17.5px;
  }

  #titulo-form-contato {
    font-size: 40px;
    line-height: 30px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 28px;
  }

  #sub-titulo-form-contato {
    font-size: 25px;
    line-height: 30px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 750px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 54px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 31.25px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 57px;
    font-size: 20px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 17.5px;
    line-height: 18px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
  }

  #submit-enviar {
    width: 175px;
    height: 65px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 30px;
    line-height: 22px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1440px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 91px;
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
    font-size: 36px;
    line-height: 46.8px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.040em;
    color: #FFFFFF;
    margin-left: 28.125px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 35px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 57px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 20.7px;
    line-height: 28.8px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 15px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 20.7px;
    line-height: 28.8px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 37.5px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 43px;
    left: 115.2px;
    display: flex;
    gap: 15.75px;
  }

  #titulo-form-contato {
    font-size: 36px;
    line-height: 27px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 28px;
  }

  #sub-titulo-form-contato {
    font-size: 22.5px;
    line-height: 27px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 675px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 54px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 28.125px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 57px;
    font-size: 18px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 15.75px;
    line-height: 16.2px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
  }

  #submit-enviar {
    width: 157.5px;
    height: 65px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 27px;
    line-height: 19.8px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1366px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 77.653px;
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
    font-size: 34.15px;
    line-height: 44.395px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.038em;
    color: #FFFFFF;
    margin-left: 26.68px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 29.867px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 48.64px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 19.636px;
    line-height: 27.32px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 12.8px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 19.636px;
    line-height: 27.32px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 32px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 40.79px;
    left: 109.28px;
    display: flex;
    gap: 14.941px;
  }

  #titulo-form-contato {
    font-size: 34.15px;
    line-height: 25.613px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 23.893px;
  }

  #sub-titulo-form-contato {
    font-size: 21.344px;
    line-height: 25.613px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 640.313px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 46.080px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 26.68px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 48.64px;
    font-size: 17.075px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 14.941px;
    line-height: 15.368px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 29.867px;
  }

  #submit-enviar {
    width: 149.406px;
    height: 55.467px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 25.613px;
    line-height: 18.783px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1280px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 80.889px;
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
    font-size: 32px;
    line-height: 41.6px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.036em;
    color: #FFFFFF;
    margin-left: 25px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 31.111px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 50.667px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 18.4px;
    line-height: 25.6px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 13.333px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 18.4px;
    line-height: 20px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 33.333px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 42.49px;
    left: 102.4px;
    display: flex;
    gap: 14px;
  }

  #titulo-form-contato {
    font-size: 32px;
    line-height: 24px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 24.889px;
  }

  #sub-titulo-form-contato {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 600px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 48px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 25px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 50.667px;
    font-size: 16px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 14px;
    line-height: 14.4px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 31.111px;
  }

  #submit-enviar {
    width: 140px;
    height: 57.778px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 24px;
    line-height: 17.6px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1024px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 77.653px;
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
    font-size: 25.6px;
    line-height: 33.28px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.029em;
    color: #FFFFFF;
    margin-left: 20px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 29.867px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 48.64px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 14.72px;
    line-height: 24px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 12.8px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 14.72px;
    line-height: 19.2px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 32px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 40.79px;
    left: 81.92px;
    display: flex;
    gap: 11.2px;
  }

  #titulo-form-contato {
    font-size: 25.6px;
    line-height: 23.04px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 23.893px;
  }

  #sub-titulo-form-contato {
    font-size: 16px;
    line-height: 23.04px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 480px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 46.08px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 20px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 48.61px;
    font-size: 12.8px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 11.2px;
    line-height: 13.824px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 29.867px;
  }

  #submit-enviar {
    width: 112px;
    height: 55.467px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 19.2px;
    line-height: 16.896px;
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
@media screen and (max-height: 900px) {
  #info-contato-formulario-main-container {
    margin-top: 74.002px;
  }

  #endereco-info-contato {
    margin-top: 29.682px;
  }

  #titulo-form-contato {
    margin-bottom: 24.787px;
  }

  #form-form-contato {
    margin-top: 47.803px;
  }
}
@media screen and (max-height: 860px) {
  #info-contato-formulario-main-container {
    margin-top: 70.713px;
  }

  #endereco-info-contato {
    margin-top: 28.363px;
  }

  #titulo-form-contato {
    margin-bottom: 23.685px;
  }

  #form-form-contato {
    margin-top: 45.678px;
  }
}
</style>
