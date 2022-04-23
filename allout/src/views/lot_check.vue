<template>
	<div class="lot-check">
		<div class="lot-check__container">
			<div class="lot-check__content">
				<div class="lot-check__text">Ваша ставка поставлена в очередь и будет обработана 28/04/2022 в 17:06 (по московскому времени).</div>
				<div class="lot-check__button-box">
					<button href="#" class="lot-check__btn">вернуться на страницу лота</button>
				</div>
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
.lot-check {
	&__container {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #F2F2F2;
	}
	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 650px;
	}
	&__text {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 300;
		font-size: 24px;
		line-height: 36px;
		text-align: center;
		color: #000000;
		margin-bottom: 10px;
	}
	&__btn {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;
		text-align: center;
		text-transform: uppercase;
		color: #000000;
		width: 330px;
		height: 50px;
		background: #C4C4C4;
	}
}
</style>