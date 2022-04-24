<template>
<div>
<div>
    <span id="password">Текущий пароль:</span>
    <span id="passwordLock">*****************</span>
    <img id="lockLogo" src="../../public/img/icons/eyes.svg">
</div>
<div>
    <span id="newPassword">Новый пароль:</span>
    <span id="newPasswordValue">ygdsyb3774</span>
    <img id="lockLogo" src="../../public/img/icons/eyes.svg">

</div>
<div>
    <span id="removePassword">Повторите пароль:</span>
    <span id="removePasswordValue">*************</span>
    <img id="lockLogo" src="../../public/img/icons/eyes.svg">
</div>
<div id="button">
<span id="textButton">Изменить</span>
</div>
</div>
</template>
<style scoped>
#textButton{
    position: absolute;
width: 85px;
height: 18px;
left: 907px;
top: 597px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
/* or 18px */

text-transform: uppercase;

color: #000000;
}
#button{
    position: absolute;
width: 230px;
height: 50px;
left: 830px;
top: 581px;

background: #C4C4C4;
}
#removePasswordValue{
    position: absolute;
width: 82px;
height: 21px;
left: 1059px;
top: 526px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */

text-align: right;

color: #000000;
}
#removePassword{
    position: absolute;
width: 156px;
height: 21px;
left: 740px;
top: 525px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */


color: #000000;

}
#newPasswordValue{
    position: absolute;
width: 151px;
height: 21px;
left: 990px;
top: 475px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */

text-align: right;

color: #000000;
}
#newPassword{
    position: absolute;
width: 124px;
height: 21px;
left: 740px;
top: 475px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */


color: #000000;

}
#password{
   position: relative;
width: 140px;
height: 21px;
left: 740px;
top: 425px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */


color: #000000;


}
#passwordLock{
    position: absolute;
width: 82px;
height: 21px;
left: 1059px;
top: 425px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */

text-align: right;

color: #000000;


}
#lockLogo{
    position: absolute;
left: 0%;
right: 0%;
top: 6.05%;
bottom: 6.05%;
}

</style>
