<template>
<div class="container">
  <div class="mailing">
    <span id="text-mailing">Хотите знать больше о работе сайта? 
Подпишитесь на рассылку!</span>
  <div id="input-mailing">
    <input id="mailing" placeholder="Введите ваш email">
    <button id="btn-mailing"><img src="../../public/img/footer/icon_airplane.svg"> </button>
  </div>
  <img id="facebook" src="../../public/img/footer/icon_facebook.svg">
  <img id="instagram" src="../../public/img/footer/icon_instagram.svg">
  <img id="youtube" src="../../public/img/footer/icon_youtube.svg">
  <div class="line" id="line1"></div>
  <div class="block_1">
    <span id="delivery">Доставка</span>
    <span id="pay">Оплата</span>
    <span id="forum">Форум</span>
  </div>
  <div class="line" id="line2"></div>
  <div class="block_2">
    <span id="partners">Партнёры</span>
    <span id="help">Помощь</span>
    <span id="schemes_work">Схемы работы</span>
  </div>
  <div class="line" id="line3"></div>
  </div>
  <div class="block_3">
    <img id="privat" src="../../public/img/footer/privat.svg" alt="">
    <img id="visa" src="../../public/img/footer/visa.svg" alt="">
    <img id="mastercard" src="../../public/img/footer/mastercard.svg" alt="">
  </div>
  <div class="line" id="line_g"></div>
   <span id="rights">© 2022 Все права защищены /</span>
   <span id="politics">Политика конфиденциальности /</span>
   <span id="developer">Сайт разработали: BlackCodersGang.</span>
  </div>
</template>

<style lang="scss" scoped>
.container{
  position: relative;
  width: 1196px;
  height: 240px;
  left: 15%;
}
.mailing{
  position: relative;
  width: 250px;
  height: 376px;
  left: 5%;
}

#text-mailing{
  position: relative;
  top: 69px;
  font-family: 'Montserrat' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
/* or 18px */
  color: #000000;
}
#input-mailing{
  position: relative;
  top: 81px;
  width: 230px;
  height: 35px;
}
#mailing{
  width: 230px;
  height: 35px;
  padding: 0 10px;
}

#mailing::placeholder{

font-family: 'Montserrat' sans-serif;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */


color: rgba(0, 0, 0, 0.75);
}

#btn-mailing{
position: absolute;
width: 40px;
height: 40px;
color: #c4c4c4;
left: 215px;
top: 0px;
}
#facebook{
  position: absolute;
  top: 176px;
  height: 30px;
}
#instagram{
  position: absolute;
  top: 170px;
  left: 30px;
}
#youtube{
  position: absolute;
  top: 176px;
  left: 80px;
  height: 30px;
}

input{
  outline: none;
}

.line{
  border: 1px solid #e6e6e6;
}

#line1{
  position: absolute;
  width: 131px;
  transform: rotate(90deg);
  margin-top: 70px;
  left: 320px;
}

.block_1{
  position: relative;
  width: 136px;
  height: 90px;
  left: 450px;
  top: 30px;
  
}

.block_1 span{
position: absolute;
font-family: 'Montserrat' sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
/* or 18px */

text-transform: uppercase;

color: #000000;
}

#pay{
  top: 30px;
}

#forum{
  top: 60px;
}

#line2{
  position: absolute;
  width: 131px;
  transform: rotate(90deg);
  top:140px;
  left: 520px;
}

.block_2{
  position: relative;
  left: 640px;
  top: 0px;

}

.block_2 span{
  position: absolute;
font-family: 'Montserrat' sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
/* or 18px */

text-transform: uppercase;

color: #000000;
}

#partners{
  top: -60px;
}

#help{
  top: -30px;
}

#line3{
  position: absolute;
  width: 131px;
  transform: rotate(90deg);
  top:140px;
  left: 740px;
}

.block_3{
  position: absolute;
  left: 920px;
  top:  83px;
}

#privat{
  position: absolute;
top: 0px;
}

#visa{
  position: absolute;
  top: 52px;
}

#mastercard{
  position: absolute;
  top: 52px;
  left: 142px;
}

#line_g{
  position: absolute;
  width: 1170px;
  top: 262px;
}

#rights, #politics, #developer{
  position: absolute;
  top: 282px;
  left: 30%;
}

#politics{
  left: 47%;
}
#developer{
  left:66%;
}
</style>