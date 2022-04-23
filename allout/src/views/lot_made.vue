<template>
	<div class="lot-made">
		<div class="lot-made__container">
			<div class="lot-made__content">
				<div class="lot-made__title">Ставка сделана успешно!</div>
				<div class="lot-made__sub-title">На вашем счете заблокированы средства в размере 1000руб.</div>
				<div class="lot-made__item">
					<div class="lot-made__line"></div>
					<div class="lot-made__row">
						<div class="lot-made__text">Ваша ставка:</div>
						<div class="lot-made__price">1 000 руб.</div>
					</div>
					<div class="lot-made__line"></div>
				</div>
				<div class="lot-made__footer-title"><span>*Предупреждение,</span> если вашу ставку перебьют, то заблокированные средства будут возращены. При поступлении товара на склад производится перерасчет.</div>
				<div class="lot-made__button-box">
					<button href="#" class="lot-made__btn">вернуться на страницу лота</button>
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
.lot-made {
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
		max-width: 570px;
	}
	&__title {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 36px;
		line-height: 47px;
		text-align: center;
		color: #000000;
		margin-bottom: 10px;
	}
	&__sub-title {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 23px;
		text-align: center;
		color: #000000;
		margin-bottom: 15px;
	}
	&__item {
		width: 500px;
	}
	&__line {
		width: 100%;
		height: 1px;
		background: rgba(0, 0, 0, 0.25);
	}
	&__row {
		display: flex;
		justify-content: space-between;
		margin: 14px 0px;
	}
	&__text {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 23px;
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
	&__footer-title {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
		text-align: center;
		color: #000000;
		margin: 10px 0px 5px;
		& span {
			font-weight: 600;
		}
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