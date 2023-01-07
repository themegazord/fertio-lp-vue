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
      <img src="https://i.ibb.co/LzZ3PKf/circulo-verde.png" alt="circulo-verde" id="circulo-verde">
      <img src="https://i.ibb.co/XjGDmDB/aro-aberto.png" alt="aro-aberto" id="aro-aberto">
      <img src="https://i.ibb.co/cDynFQ6/fazendeiro-removebg-preview-1.png" alt="fazendeiro-removebg-preview-1" id="fazendeiro">
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
  width: 675px;
  height: 750px;
  position: absolute;
  bottom: 0;
  right: 175px;
}

#circulo-verde {
  position: absolute;
  bottom: 0;
  right: 275px;
}

#aro-aberto {
  position: absolute;
  bottom: 0;
  right: 275px;
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
  width: 40px;
  transform: rotate(90deg);
  border: 1px solid;
}

.bottom-left-main-container {
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 1440px) {
  #circulo-verde,
  #aro-aberto {
    right: 200px;
  }

  #fazendeiro {
    right: 100px;
  }
}

@media screen and (max-width: 1366px) {
  #circulo-verde,
  #aro-aberto {
    right: 150px;
  }

  #fazendeiro {
    right: 50px;
  }
}

@media screen and (max-width: 1280px) {
  #circulo-verde,
  #aro-aberto {
    right: 100px;
  }

  #fazendeiro {
    right: 0;
  }
}

@media screen and (max-height: 830px) {
  #circulo-verde {
    width: calc(550px - 75px);
    height: calc(500px - 75px);
  }

  #aro-aberto {
    width: calc(515px - 75px);
    height: calc(530px - 75px);
  }

  #fazendeiro {
    width: calc(675px - 100px);
    height: calc(750px - 100px);
  }
}

@media screen and (max-height: 768px) {
  #circulo-verde {
    width: calc(550px - 100px);
    height: calc(500px - 100px);
  }

  #aro-aberto {
    width: calc(515px - 100px);
    height: calc(530px - 100px);
  }

  #fazendeiro {
    width: calc(675px - 150px);
    height: calc(750px - 150px);
  }
}
</style>
