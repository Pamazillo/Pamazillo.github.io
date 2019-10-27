/////////////////////////////////////////////////////////////////////////////////////////////////////
//ОБЛАСТЬ ПЕРЕМЕННЫХ

var myHeading = document.querySelector('h1');
//var iceCream;	//Оказывается переменную можно не объявлять, а в дальнейшем присваивать ей значение сразу, как в 1С
//var AnyText = 'Здравствуйте! ' + ' сегодня ' + Date() + '   '+ multiply(25, 3);
var myImage = document.querySelector('img');

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

/////////////////////////////////////////////////////////////////////////////////////////////////////
//ПРОЦЕДУРЫ И ФУНКЦИИ

function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}

//	Устанавливает персонилизированное действие
function setUserName() {
  var myName = prompt('Введите ваше имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//СОБЫТИЯ ФОРМЫ

/*	Нажатие мышью в любом месте. Присваевается анонимная функция,
т.е. безымянная и описывается сразу по ходу исполнения
//
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

//	Нажатие на картинку. И замена картинки при нажатии на неё
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pigboy.jpg') {
      myImage.setAttribute ('src','images/karlson.gif');
    } else {
      myImage.setAttribute ('src','images/pigboy.jpg');
    }
}

//	Нажатие на кнопку
myButton.onclick = function() {
  setUserName();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//ТЕЛО МОДУЛЯ

//myHeading.textContent = 'Hello world! Pamazillo is Cool!';

//	Проверка оператора сравнения
iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  //alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite... Not "' + iceCream +'"');
}

//	Код инициализации
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}