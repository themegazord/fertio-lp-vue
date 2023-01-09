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
          <img src="../../assets/11-anos.png"
          alt="Informações de 11 anos da empresa" id="info-11anos">
          <hr id="linha-vertical">
          <img src="../../assets/avaliacao.png"
          alt="Avaliação da empresa de 4,8 de 5 estrelas" id="avaliacao">
        </div>
      </div>
      <img src="https://i.ibb.co/LzZ3PKf/circulo-verde.png" alt="circulo-verde" id="circulo-verde">
      <img src="https://i.ibb.co/XjGDmDB/aro-aberto.png" alt="aro-aberto" id="aro-aberto">
      <img src="https://i.ibb.co/cDynFQ6/fazendeiro-removebg-preview-1.png" alt="fazendeiro-removebg-preview-1"
        id="fazendeiro">
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

#left-main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  gap: 120px;
}

.left-main-container {
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

@media screen and (max-width: 2560px) {
  #fazendeiro {
    width: 1125px;
    height: 1200px;
    position: absolute;
    bottom: 0;
    right: 175px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 275px;
    width: 900px;
    height: 810px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 230px;
    width: 900px;
    height: 860px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 850px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 86px;
    line-height: 103.2px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 48px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 350px;
    height: 72px;
    font-size: 22px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 24px;
    height: 24px;
  }

  #linha-vertical {
    width: 52px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 666px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 400px;
    height: 100px;
  }

  #avaliacao {
    width: 180px;
    height: 90px;
  }
}
@media screen and (max-width: 1920px) {
  #fazendeiro {
    width: 843.75px;
    height: 900px;
    position: absolute;
    bottom: 0;
    right: 131.25px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 206.25px;
    width: 675px;
    height: 607.5px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 172.5px;
    width: 675px;
    height: 645px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 637.5px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 64.5px;
    line-height: 75px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 28.5px;
    line-height: 36px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 262.5px;
    height: 54px;
    font-size: 16.5px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 18px;
    height: 18px;
  }

  #linha-vertical {
    width: 39px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 499.5px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 300px;
    height: 75px;
  }

  #avaliacao {
    width: 135px;
    height: 67.5px;
  }
}
@media screen and (max-width: 1600px) {
  #fazendeiro {
    width: 703.125px;
    height: 750px;
    position: absolute;
    bottom: 0;
    right: 109.375px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 171.875px;
    width: 562.5px;
    height: 506.25px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 143.75px;
    width: 562.5px;
    height: 537.5px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 531.25px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 53.75px;
    line-height: 62.5px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 23.75px;
    line-height: 30px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 218.75px;
    height: 45px;
    font-size: 13.75px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 15px;
    height: 15px;
  }

  #linha-vertical {
    width: 32.5px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 416.25px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 250px;
    height: 62.5px;
  }

  #avaliacao {
    width: 112.5px;
    height: 56.25px;
  }
}
@media screen and (max-width: 1440px) {
  #fazendeiro {
    width: 703.125px;
    height: 750px;
    position: absolute;
    bottom: 0;
    right: 91.146px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 143.229px;
    width: 562.5px;
    height: 506.25px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 119.792px;
    width: 562.5px;
    height: 537.5px;
  }
}
@media screen and (max-width: 1366px) {
  #fazendeiro {
    width: 666.992px;
    height: 640px;
    position: absolute;
    bottom: 0;
    right: 103.754px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 163.043px;
    width: 533.594px;
    height: 432px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 136.363px;
    width: 533.594px;
    height: 458.667px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 531.25px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 50.988px;
    line-height: 59.288px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 22.53px;
    line-height: 28.458px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 207.509px;
    height: 38.4px;
    font-size: 13.043px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 14.229px;
    height: 14.229px;
  }

  #linha-vertical {
    width: 30.830px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 394.859px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 237.153px;
    height: 53.333px;
  }

  #avaliacao {
    width: 106.719px;
    height: 48px;
  }
}
@media screen and (max-width: 1280px) {
  #fazendeiro {
    width: 625px;
    height: 666,667px;
    position: absolute;
    bottom: 0;
    right: 97.222px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 152.778px;
    width: 500px;
    height: 450px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 127.778px;
    width: 500px;
    height: 477.778px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 497.804px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 47.778px;
    line-height: 55.555px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 21.112px;
    line-height: 26.573px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 194.445px;
    height: 40px;
    font-size: 12.222px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 13.333px;
    height: 13.333px;
  }

  #linha-vertical {
    width: 28.889px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 370px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 222.222px;
    height: 55.555px;
  }

  #avaliacao {
    width: 100px;
    height: 50px;
  }
}

</style>
