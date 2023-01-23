<template>
  <div class="card-depoimentos">
    <div id="esq-card-depoimentos">
      <slot></slot>
    </div>
    <div id="dir-card-depoimentos">
      <h1 id="titulo-dir-card-depoimentos">{{ titulo }}</h1>
      <p id="desc-dir-card-depoimentos">{{ descricao }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titulo', 'descricao'],
};
</script>

<style>
@media screen and (max-width: 2560px) {
  .card-depoimentos{
    display: grid;
    grid-template-columns: 25% 75%;
    width: 490px;
    height: 144px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 84px 110px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.98022px);
    border-radius: 8.88889px;
  }
  #esq-card-depoimentos {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #imagem-esq-card-depoimentos {
    width: 73px;
    height: 80px;
    border-radius: 100px;
  }
  #dir-card-depoimentos {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  #titulo-dir-card-depoimentos {
    font-size: 21.847px;
    line-height: 32.175px;
    color: #1B1C20;
    font-weight: 700;
  }
  #desc-dir-card-depoimentos {
    font-size: 21.45px;
    line-height: 32.175px;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.7;
    font-weight: 400;
  }
}
@media screen and (max-width: 1920px) {
  .card-depoimentos{
    display: grid;
    grid-template-columns: 25% 75%;
    width: 367.5px;
    height: 108px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 84px 110px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.98022px);
    border-radius: 8.88889px;
  }
  #esq-card-depoimentos {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #imagem-esq-card-depoimentos {
    width: 54.75px;
    height: 60px;
    border-radius: 100px;
  }
  #dir-card-depoimentos {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  #titulo-dir-card-depoimentos {
    font-size: 16.088px;
    line-height: 24.131px;
    color: #1B1C20;
    font-weight: 700;
  }
  #desc-dir-card-depoimentos {
    font-size: 16.065px;
    line-height: 24.131px;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.7;
    font-weight: 400;
  }
}
@media screen and (max-width: 1600px) {
  .card-depoimentos{
    display: grid;
    grid-template-columns: 25% 75%;
    width: 306.25px;
    height: 90px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 84px 110px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.98022px);
    border-radius: 8.88889px;
  }
  #esq-card-depoimentos {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #imagem-esq-card-depoimentos {
    width: 45.625px;
    height: 50px;
    border-radius: 100px;
  }
  #dir-card-depoimentos {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  #titulo-dir-card-depoimentos {
    font-size: 13.388px;
    line-height: 20.109px;
    color: #1B1C20;
    font-weight: 700;
  }
  #desc-dir-card-depoimentos {
    font-size: 13.388px;
    line-height: 20.109px;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.7;
    font-weight: 400;
  }
}
@media screen and (max-width: 1440px) {
  .card-depoimentos{
    display: grid;
    grid-template-columns: 25% 75%;
    width: 306.25px;
    height: 90px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 84px 110px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.98022px);
    border-radius: 8.88889px;
  }
  #esq-card-depoimentos {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #imagem-esq-card-depoimentos {
    width: 45.625px;
    height: 50px;
    border-radius: 100px;
  }
  #dir-card-depoimentos {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  #titulo-dir-card-depoimentos {
    font-size: 13.388px;
    line-height: 20.109px;
    color: #1B1C20;
    font-weight: 700;
  }
  #desc-dir-card-depoimentos {
    font-size: 13.388px;
    line-height: 20.109px;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.7;
    font-weight: 400;
  }
}
@media screen and (max-width: 1366px) {
  .card-depoimentos{
    display: grid;
    grid-template-columns: 25% 75%;
    width: 290.512px;
    height: 76.8px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 84px 110px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.98022px);
    border-radius: 8.88889px;
  }
  #esq-card-depoimentos {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #imagem-esq-card-depoimentos {
    width: 43.28px;
    height: 42.667px;
    border-radius: 100px;
  }
  #dir-card-depoimentos {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  #titulo-dir-card-depoimentos {
    font-size: 12.7px;
    line-height: 19.076px;
    color: #1B1C20;
    font-weight: 700;
  }
  #desc-dir-card-depoimentos {
    font-size: 12.7px;
    line-height: 19.076px;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.7;
    font-weight: 400;
  }
}
@media screen and (max-width: 1280px) {
  .card-depoimentos{
    display: grid;
    grid-template-columns: 25% 75%;
    width: 272.222px;
    height: 80px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 84px 110px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.98022px);
    border-radius: 8.88889px;
  }
  #esq-card-depoimentos {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #imagem-esq-card-depoimentos {
    width: 40.555px;
    height: 44.445px;
    border-radius: 100px;
  }
  #dir-card-depoimentos {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  #titulo-dir-card-depoimentos {
    font-size: 11.9px;
    line-height: 17.875px;
    color: #1B1C20;
    font-weight: 700;
  }
  #desc-dir-card-depoimentos {
    font-size: 11.9px;
    line-height: 17.875px;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.7;
    font-weight: 400;
  }
}
@media screen and (max-width: 1024px) {
  .card-depoimentos{
    display: grid;
    grid-template-columns: 25% 75%;
    width: 217.778px;
    height: 60.8px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 84px 110px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.98022px);
    border-radius: 8.88889px;
  }
  #esq-card-depoimentos {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #imagem-esq-card-depoimentos {
    width: 32.444px;
    height: 42.667px;
    border-radius: 100px;
  }
  #dir-card-depoimentos {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  #titulo-dir-card-depoimentos {
    font-size: 9.520px;
    line-height: 14.3px;
    color: #1B1C20;
    font-weight: 700;
  }
  #desc-dir-card-depoimentos {
    font-size: 9.520px;
    line-height: 14.3px;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.7;
    font-weight: 400;
  }
}
/* Responsividade Mobile */
@media screen and (max-width: 768px) {
  .card-depoimentos{
    display: grid;
    grid-template-columns: 25% 75%;
    width: 20rem;
    height: 5rem;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 84px 110px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.98022px);
    border-radius: 8.88889px;
  }
  #esq-card-depoimentos {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #imagem-esq-card-depoimentos {
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
  }
  #dir-card-depoimentos {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  #titulo-dir-card-depoimentos {
    font-size: .90rem;
    line-height: .90rem;
    color: #1B1C20;
    font-weight: 700;
  }
  #desc-dir-card-depoimentos {
    font-size: .90rem;
    line-height: .90rem;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.7;
    font-weight: 400;
  }
}
@media screen and (max-width: 425px) {
  .card-depoimentos{
    display: grid;
    grid-template-columns: 25% 75%;
    width: 11.068rem;
    height: 2.767rem;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 84px 110px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.98022px);
    border-radius: 8.88889px;
  }
  #esq-card-depoimentos {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #imagem-esq-card-depoimentos {
    width: 1.66rem;
    height: 1.66rem;
    border-radius: 100px;
  }
  #dir-card-depoimentos {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  #titulo-dir-card-depoimentos {
    font-size: .498rem;
    line-height: .498rem;
    color: #1B1C20;
    font-weight: 700;
  }
  #desc-dir-card-depoimentos {
    font-size: .498rem;
    line-height: .498rem;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.7;
    font-weight: 400;
  }
}

</style>
