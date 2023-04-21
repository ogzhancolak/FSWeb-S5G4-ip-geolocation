//axios import buraya gelecek

import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/


/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek

const products = (datas) => {

	const card = document.createElement('div');
  	card.classList.add('card');
  
  	const flagImg = document.createElement('img');
  	flagImg.src = `${datas.ülkebayrağı}`;
  	card.append(flagImg);
  
	const cardInfo = document.createElement('div');
  	cardInfo.classList.add('card-info');
  
  	const ipH3 = document.createElement('h3');
  	ipH3.classList.add('ip');
  	ipH3.textContent = datas.sorgu;
  	cardInfo.append(ipH3);
  
  	const ulkeP = document.createElement('p');
  	ulkeP.classList.add('ulke');
  	ulkeP.textContent = `${datas.ülke} (${datas.ülkeKodu})`;
  	cardInfo.append(ulkeP);
  
  	const enlemBoylamP = document.createElement('p');
  	enlemBoylamP.textContent = `Enlem: ${datas.enlem} Boylam: ${datas.boylam}`;
  	cardInfo.append(enlemBoylamP);
  
  	const sehirP = document.createElement('p');
  	sehirP.textContent = `Şehir: ${datas.şehir}`;
  	cardInfo.append(sehirP);
  
  	const saatDilimiP = document.createElement('p');
  	saatDilimiP.textContent = `Saat Dilimi: ${datas.saatdilimi}`;
  	cardInfo.append(saatDilimiP);
  
  	const paraBirimiP = document.createElement('p');
  	paraBirimiP.textContent = `Para Birimi: ${datas.parabirimi}`;
  	cardInfo.append(paraBirimiP);
  
  	const ispP = document.createElement('p');
  	ispP.textContent = `ISP: ${datas.isp}`;
  	cardInfo.append(ispP);

	card.append(cardInfo);
  
	  
	const cardsContainer = document.querySelector('.cards');
	cardsContainer.append(card);
}



axios.get('https://apis.ergineer.com/ipgeoapi/188.119.5.39')
  .then(response => {
    const datas = response.data;
    products(datas);
  })
  .catch(error => {
    console.log(error);
  });
