<template>
	<div class="confirm-your-lot">
		<div class="confirm-your-lot__container">
			<div class="confirm-your-lot__content">
				<div class="confirm-your-lot__title">Подтвердите ставку</div>
				<div class="confirm-your-lot__line-bold"></div>
				<div class="confirm-your-lot__row">
					<div class="confirm-your-lot__sub-title">Количество ставок</div>
					<div class="confirm-your-lot__amount">3</div>
				</div>
				<div class="confirm-your-lot__line-bold"></div>
				<div class="confirm-your-lot__row">
					<div class="confirm-your-lot__text">Текущая цена</div>
					<div class="confirm-your-lot__price">1 000 руб.</div>
				</div>
				<div class="confirm-your-lot__line"></div>
				<div class="confirm-your-lot__row">
					<div class="confirm-your-lot__text">Ваша ставка</div>
					<div class="confirm-your-lot__price">2 500 руб.</div>
				</div>
				<div class="confirm-your-lot__line"></div>
				<div class="confirm-your-lot__row">
					<div class="confirm-your-lot__text">Ставка будет выполнена</div>
					<div class="confirm-your-lot__data-lot">03.03.2022 12:30</div>
				</div>
				<div class="confirm-your-lot__line"></div>
				<div class="confirm-your-lot__row">
					<div class="confirm-your-lot__text">Ставка будет выполнена</div>
				</div>
				<div class="confirm-your-lot__line"></div>
				<div class="confirm-your-lot__button-box">
					<button href="#" class="confirm-your-lot__btn">Сделать ставку</button>
					<button href="#" class="confirm-your-lot__btn">Отмена</button>
				</div>
				<div class="confirm-your-lot__footer-title"><span>*Предупреждение,</span> отменить ставку или отказаться от покупки лота нельзя</div>
				</div>
		</div>
	</div>
</template>
<style lang="scss">
* {
	padding: 0px;
	margin: 0px;
	border: 0px;
}
*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,
:active {
	outline: none;
}
a:focus,
a:active {
	outline: none;
}
aside,
nav,
footer,
header,
section {
	display: block;
}
html,
body {
	height: 100%;
}
body {
	line-height: 1;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}
input::-ms-clear {
	display: none;
}
button {
	cursor: pointer;
	background: none;
}
button::-moz-focus-inner {
	padding: 0;
	border: 0;
}
a,
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
ul li {
	list-style: none;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}
// =========================================================================================
@import url(https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600);
.confirm-your-lot {
	&__container {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #F2F2F2;
		@media (max-width: 767px) {
			max-width: none;
			padding: 0 10px;
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		max-width: 430px;
	}
	&__title {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 36px;
		line-height: 47px;
		text-align: center;
		color: #000000;
		margin-bottom: 8px;
	}
	&__line-bold {
		width: 100%;
		height: 1px;
		background: rgba(0, 0, 0, 0.25);
	}
	&__row {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin: 14px 0px;
	}
	&__sub-title {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 23px;
		color: #000000;
	}
	&__amount {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 23px;
		text-align: right;
		color: #000000;
	}
	&__text {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 300;
		font-size: 16px;
		line-height: 21px;
		color: #000000;
	}
	&__price {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 23px;
		text-align: right;
		color: #000000;
	}
	&__line {
		width: 100%;
		height: 1px;
		background: rgba(0, 0, 0, 0.05);
	}
	&__data-lot {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 23px;
		text-align: right;
		color: #000000;
	}
	&__button-box {
		display: flex;
		justify-content: center;
		column-gap: 10px;
		margin: 20px 0px 10px;
	}
	&__btn {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;
		text-transform: uppercase;
		color: #000000;
		width: 180px;
		height: 50px;
		background: #C4C4C4;
	}
	&__footer-title {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
		text-align: center;
		color: #000000;
		& span {
			font-weight: 600;
		}
	}
}
</style>