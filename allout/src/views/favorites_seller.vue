<template>
	<div class="favorites-seller">
		<div class="favorites-seller__container">
			<div class="favorites-seller__row favorites-seller__row-left">
				<div class="favorites-seller__column"><div class="favorites-seller__title">Продавец:</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__sub-title">Продавец 1</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__sub-title">Продавец 1</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__sub-title">Продавец 1</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__sub-title">Продавец 1</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__sub-title">Продавец 1</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__sub-title">Продавец 1</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__sub-title">Продавец 1</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__sub-title">Продавец 1</div></div>
			</div>
			<div class="favorites-seller__row favorites-seller__row-center">
				<div class="favorites-seller__column"><div class="favorites-seller__title">Последнее обновление</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__text">Lorem ipsum dolor sit amet</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__text">Lorem ipsum dolor sit amet</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__text">Lorem ipsum dolor sit amet</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__text">Lorem ipsum dolor sit amet</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__text">Lorem ipsum dolor sit amet</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__text">Lorem ipsum dolor sit amet</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__text">Lorem ipsum dolor sit amet</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__text">Lorem ipsum dolor sit amet</div></div>
			</div>
			<div class="favorites-seller__row favorites-seller__row-right">
				<div class="favorites-seller__column"><div class="favorites-seller__title">Изменить</div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__image"><img src="" alt=""></div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__image"><img src="" alt=""></div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__image"><img src="" alt=""></div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__image"><img src="" alt=""></div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__image"><img src="" alt=""></div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__image"><img src="" alt=""></div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__image"><img src="" alt=""></div></div>
				<div class="favorites-seller__column"><div class="favorites-seller__image"><img src="" alt=""></div></div>
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
.favorites-seller {
	padding-top: 10px;
	&__container {
		max-width: 730px;
		margin: 0px auto;
	}
	&__row {
		display: inline-flex;
		flex-direction: column;
		&-left {
			width: 176px;
		}
		&-center {
			width: 440px;
		}
		&-right {
			width: 114px;
		}
	}
	&__column {
		display: flex;
		align-items: center;
		min-height: 50px;
		border: 1px solid rgba(0, 0, 0, 0.05);
	}
	&__title {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 300;
		font-size: 16px;
		line-height: 21px;
		color: rgba(0, 0, 0, 0.5);
		padding-left: 20px;
	}
	&__sub-title {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
		color: #000000;
		padding-left: 20px;
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
	&__image {
		margin: 0px auto;
		& img {
			width: 100%;
			height: 100%;
		}
	}
}
</style>