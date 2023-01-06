<template>
  <div id="home">
    <Navbar />
    <div id="home-main-container">
      <div id="left-main-container">
        <div class="left-main-container">
          <h1 id="title-left-main-container">Especialistas em Fertilizantes de Alta Performance</h1>
          <p id="desc-left-main-container">
            Aumente a sua produtividade e se torne um produtor de sucesso!
          </p>
          <button id="btn-left-main-container">
            Falar com o especialista
            <img src="../../assets/setinha-direita.svg" alt="Seta para direita">
          </button>
        </div>
        <div class="bottom-left-main-container">
          <img src="../../assets/11-anos.png" alt="Informações de 11 anos da empresa">
          <hr id="linha-vertical">
          <img src="../../assets/avaliacao.png" alt="Avaliação da empresa de 4,8 de 5 estrelas">
        </div>
      </div>
      <img src="../../assets/fazendeiro.png" alt="Imagem de um fazendeiro feliz" id="fazendeiro">
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/NavbarComponent.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#home {
  width: 100%;
  height: 100vh;
  background-color: #FFFFFF;
}

#home-main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: calc(100vh - 90px);
  position: absolute;
  bottom: 0;
}

#fazendeiro {
  width: 1000px;
  height: 800px;
  position: absolute;
  bottom: 0;
  right: 100px;
}

#left-main-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  gap: 120px;
}

.left-main-container{
  width: 500px;
  gap: 30px;
  display: flex;
  flex-direction: column;
}

#title-left-main-container {
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  color: #092E58;
}

#desc-left-main-container {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: #383A47;
}

#btn-left-main-container {
  width: 265px;
  height: 45px;
  background-color: #CFFD00;
  border-radius: 10px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

#linha-vertical {
  height: 40px;
  border: 2px solid;
  width: 0;
}

.bottom-left-main-container {
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: center;
}
</style>
