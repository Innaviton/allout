<template>
  <div>
      <header></header>
      <tr v-for="(lot, index) in lots" :key="index">
    <div id = "LotContainer">
        <img src = "assets/Favorite.png" id = "heart">
        <img src = "" id = "LotPreviev">
        <p id = "LotName"><a href="/lot"> {{lotName}}</a></p> <!--Название лота-->
        <p id = "EndText">Окончание:</p>
        <p id = "TimeText">{}</p> <!--Время оставшееся-->
        <p id = "NowPriceText">Текущая цена:</p>
        <p id = "NowPrice">{{nowCost}} </p> <!--Нынешний прайс-->
    
  </div>
  
    </tr>
    
        <div id = "LotContainer1">
        <img src = "assets/Favorite.png" id = "heart">
        <img src = "" id = "LotPreviev">
        <a href="/Lot" Id = "LotName">Кит-Кат</a> <!--Название лота-->
        <p id = "EndText">Окончание:</p>
        <p id = "TimeText">12ч 52м</p> <!--Время оставшееся-->
        <p id = "NowPriceText">Текущая цена:</p>
        <p id = "NowPrice">320 </p> <!--Нынешний прайс-->
        </div>
            <div id = "LotContainer2">
        <img src = "assets/Favorite.png" id = "heart">
        <img src = "" id = "LotPreviev">
        <p id = "LotName"><a href="/lot">Карточка Чаризарда</a></p> <!--Название лота-->
        <p id = "EndText">Окончание:</p>
        <p id = "TimeText">15ч 1м</p> <!--Время оставшееся-->
        <p id = "NowPriceText">Текущая цена:</p>
        <p id = "NowPrice">12100 </p> <!--Нынешний прайс-->
                </div>

            <div id = "LotContainer3">
        <img src = "assets/Favorite.png" id = "heart">
        <img src = "" id = "LotPreviev">
        <a href="/lot" Id = "LotName">Машмна Shkoda</a><!--Название лота-->
        <p id = "EndText">Окончание:</p>
        <p id = "TimeText">20ч 12м</p> <!--Время оставшееся-->
        <p id = "NowPriceText">Текущая цена:</p>
        <p id = "NowPrice">150000 </p> <!--Нынешний прайс-->
                </div>

            <div id = "LotContainer4">
        <img src = "assets/Favorite.png" id = "heart">
        <img src = "" id = "LotPreviev">
        <p id = "LotName"><a href="/lot">Кубик Рубика</a></p> <!--Название лота-->
        <p id = "EndText">Окончание:</p>
        <p id = "TimeText">22ч 41м</p> <!--Время оставшееся-->
        <p id = "NowPriceText">Текущая цена:</p>
        <p id = "NowPrice">500 </p> <!--Нынешний прайс-->
                </div>

            <div id = "LotContainer5">
        <img src = "assets/Favorite.png" id = "heart">
        <img src = "" id = "LotPreviev">
        <p id = "LotName"><a href="/lot">Плакат AC/DC с росписью</a></p> <!--Название лота-->
        <p id = "EndText">Окончание:</p>
        <p id = "TimeText">31ч 28м</p> <!--Время оставшееся-->
        <p id = "NowPriceText">Текущая цена:</p>
        <p id = "NowPrice">2100 </p> <!--Нынешний прайс-->
            </div>

  </div>
</template>
<script>
import axios from 'axios';
import header from '../components/header.vue'
export default {
  components: { header },

   data() {
    return {
      lotName: '',
      duration: '',
      nowCost: '',
      lots:[]

    };
  },
  methods: {
    getBooks() {
      const path = 'http://localhost:5000/books';
      axios.get(path)
        .then((res) => {
          this.lotName = res.data.lotName;
          this.duration = res.data.Duration;

          this.nowCost = res.data.NowCost;
        })  
        .catch((error) => {
          // eslint-отключение следующей строки
          console.error(error);
        });
    },
  },
  created() {
    this.getBooks();
  },
};



</script>

<style lang="scss">
#LotContainer1{
 position:absolute;
 left: 20%;
width: 270px;
height: 410px;
border-bottom: 1px;
border-color:#000000;
}
#LotContainer2{
 position:absolute;
 left: 35%;
width: 270px;
height: 410px;
border-bottom: 1px;
border-color:#000000;

}
#LotContainer3{
 position:absolute;
 left: 50%;
width: 270px;
height: 410px;
border-bottom: 1px;
border-color:#000000;
}
#LotContainer4{
 position:absolute;
 left: 65%;
width: 270px;
height: 410px;
border-bottom: 1px;
border-color:#000000;

}
#LotContainer5{
 position:absolute;
 left: 80%;
width: 270px;
height: 410px;
border-bottom: 1px;
border-color:#000000;

}
#LotPreviev{
position: relative;
width: 269px;
height: 270px;
}
#LotName{
    position: absolute;
width: 250px;
height: 46px;
left: 10px;
top: 280px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 130%;
text-align: center;

color: #000000;
}
#EndText{
    position: absolute;
width: 97px;
height: 21px;
left: 20px;
top: 324px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
color: rgba(0, 0, 0, 0.5);
}
#TimeText{
    position: absolute;
width: 70px;
height: 21px;
left: 173px;
top: 324px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
text-align: right;
color: #000000;
}
#NowPriceText{
position: absolute;
width: 117px;
height: 21px;
left: 20px;
top: 373px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
color: rgba(0, 0, 0, 0.5);
}
#NowPrice{
    position: absolute;
width: 77px;
height: 21px;
left: 173px;
top: 373px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
text-align: right;

color: #000000;
}
#heart{
    position: relative;
top: 11px;
bottom: 240px;
background: #000000;
}
#ContFCont{
  position: relative;
  width: 100px;
}
</style>