<template>
	<div class="favorites-active-lot">
		<div class="favorites-active-lot__container">
			<div class="favorites-active-lot__row">
				<div class="favorites-active-lot__column favorites-active-lot__column-small"><div class="favorites-active-lot__title">Фото</div></div>
				<div class="favorites-active-lot__column favorites-active-lot__column-small"><div class="favorites-active-lot__title">Номер лота</div></div>
				<div class="favorites-active-lot__column favorites-active-lot__column-small favorites-active-lot__column-big"><div class="favorites-active-lot__title">Название</div></div>
				<div class="favorites-active-lot__column favorites-active-lot__column-small"><div class="favorites-active-lot__title">Продавец</div></div>
				<div class="favorites-active-lot__column favorites-active-lot__column-small"><div class="favorites-active-lot__title">Текущая цена</div></div>
				<div class="favorites-active-lot__column favorites-active-lot__column-small"><div class="favorites-active-lot__title">Количество ставок</div></div>
				<div class="favorites-active-lot__column favorites-active-lot__column-small"><div class="favorites-active-lot__title">Лидер</div></div>
				<div class="favorites-active-lot__column favorites-active-lot__column-small"><div class="favorites-active-lot__title">Осталось</div></div>
			</div>
			<div class="favorites-active-lot__row">
				<div class="favorites-active-lot__column">
					<div class="favorites-active-lot__image">
						<img src="" alt="">
					</div>
				</div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">21312412412</div></div>
				<div class="favorites-active-lot__column favorites-active-lot__column-big"><div class="favorites-active-lot__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">Имя Продавца</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">300 руб.</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">1</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">Завершение</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">1 час</div></div>
			</div>
			<div class="favorites-active-lot__row">
				<div class="favorites-active-lot__column">
					<div class="favorites-active-lot__image">
						<img src="" alt="">
					</div>
				</div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">21312412412</div></div>
				<div class="favorites-active-lot__column favorites-active-lot__column-big"><div class="favorites-active-lot__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">300 руб.</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">300 руб.</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">3</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">Отменить</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">1 час</div></div>
			</div>
			<div class="favorites-active-lot__row">
				<div class="favorites-active-lot__column">
					<div class="favorites-active-lot__image">
						<img src="" alt="">
					</div>
				</div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">21312412412</div></div>
				<div class="favorites-active-lot__column favorites-active-lot__column-big"><div class="favorites-active-lot__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">300 руб.</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">300 руб.</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">10</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">Отменить</div></div>
				<div class="favorites-active-lot__column"><div class="favorites-active-lot__text">1 час</div></div>
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
.favorites-active-lot {
	padding-top: 10px;
	&__container {
		max-width: 1210px;
		margin: 0px auto;
	}
	&__row {
		display: flex;
	}
	&__column {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 150px;
		min-height: 120px;
		border: 1px solid rgba(0, 0, 0, 0.05);
		&-small {
			min-height: 50px;
		}
		&-big {
			width: 210px;
		}
	}
	&__title {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
		color: #000000;
		padding: 0px 22px;
	}
	&__image {
		& img {
			width: 100%;
			height: 100%;
		}
	}
	&__text {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 300;
		font-size: 16px;
		line-height: 21px;
		color: #000000;
		padding-left: 20px;
	}
}
</style>