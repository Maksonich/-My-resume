// let div = document.querySelector("div");
// div.addEventListener("click", function () {
//     div.innerText = "Привет мир!";
// })

// let a = 1;
// let b = 2;
// let c = 3;

// let result = a + b + c ;
// console.log(result)

//работает через модальніе окна
// let numberX = prompt("число", 0)
// let numberY = prompt("число", 0)

// let numb1 = Number(numberX)
// let numb2 = Number(numberY)

// let sum = numb1 + numb2;
// alert(`${numb1} + ${numb2} = ${sum} `)
///////////////////////////////////////////////////////////////////////////////////////////
// let butter = "масло";
// let bread = "хлеб";
// let package = "пакет";
// let milk = "молоко";
// let cheese = "сыр";

// let priceButter = 55.4;
// let priceBread = 21.2;
// let pricePackage = 3.2;
// let priceMilk = 30.1;
// let priceCheese = 304.5;

// let buyToProduc1 = +prompt(
//   `Укажите сколько вам нужно ${butter}, по стоимости ${priceButter}`,
//   0
// );
// let buyToProduc2 = +prompt(
//   `Укажите сколько вам нужно ${bread}, по стоимости ${priceBread}`,
//   0
// );
// let buyToProduc3 = +prompt(
//   `Укажите сколько вам нужно ${package}, по стоимости ${pricePackage}`,
//   0
// );
// let buyToProduc4 = +prompt(
//   `Укажите сколько вам нужно ${milk}, по стоимости ${priceMilk}`,
//   0
// );
// let buyToProduc5 = +prompt(
//   `Укажите сколько вам нужно ${cheese}, по стоимости ${priceCheese}`,
//   0
// );

// let result = 0;

// result += priceButter * buyToProduc1;
// result += priceBread * buyToProduc2;
// result += pricePackage * buyToProduc3;
// result += priceMilk * buyToProduc4;
// result += priceCheese * buyToProduc5;

// let freeShipping 

// let shiping = +prompt("Выберите способ доставки\r\n 1 Курьер\r\n 2 Служба доставки А\r\n 3 Служба доставки Б\r\n 4 самовывоз")
// switch (shiping){
//     case 1:
//         shipingPrice = 40
//         shipingMessege = "Выбрана доставка курьером"
//         break;
//     case 2:
//         shipingPrice = 30
//         shipingMessege = "Выбрана доставка службой А"
//         break;
//     case 3:
//         shipingPrice = 25
//         shipingMessege = "Выбрана доставка службой Б"
//         break;
//     case 4:
//         shipingPrice = 0
//         shipingMessege = "Выбран самовывоз"
//         break;
//     default:
//         shipingPrice = 40
//         shipingMessege = "Выбрана доставка курьером"
//         break;
// }

// if (result > 1000){
//     freeShipping ="Доставка за счет магазина"
// } else {
//     freeShipping =`Бесплатная доставка от 1000.${shipingMessege} стоимость ${shipingPrice}`
// }


// alert(`C вас ${result}. ${freeShipping}`);
////////////////////////////////////////////////////////////////////////////////////////////////////////

// let totalSum = 800
// let happyBirsday = false

// if (totalSum >= 900 || happyBirsday == true){
//     let discont = totalSum * 0.1
//     totalSum -= discont
// }

// alert ("сумма к оплате " + totalSum)

//////////////////////////////////////////
// dz 1 version
//  let confi = confirm("Вам есть 18?")

//  if (confi){
//     alert('доступ разрешен')
//  } else{
//     alert('доступ запрещен')
//  }

// dz 2 version

// let age = +prompt('Укажите пожалуйста свой возвраст.', 0)

// if (age >= 18){
//     alert("Доступ разрешен")
// } else {
//     alert("Доступ запрещен")
// }

////////////////////////////////////////////////////////////
// let date = new Date();
// let year = 2016//date.getFullYear();
// let day = date.getDay();

// let yearMessage = year % 4 === 0 ? "Этот год высокосный" : "Это не высокосный год";
// let dayMessage = day == 0 || day == 6 ? "Поздравляю с выходным" : " Эээх рабочие будни" ;

// alert(yearMessage + "\r\n" + dayMessage)
////////////////////////////////////////////////////////////
//dz
// let x = 10;
// let y = 0;


// if (x > 5)
//  y = 20;
// else
//  y = 30;
// console.log(y);


// let x = 10;
// let y = x > 5 ?  20 :  30;
// console.log(y)
//////////////////////////////////////////////////////
// let zero = 5

// while (zero == 5){
//     zero++
//     console.log("Номер итерации = " + zero)
// }
// console.log(zero)
///////////////////////////////цыклы

// let message = +prompt("Введите больше 5")

// while (message <= 5){
//     message = +prompt("Введите больше 5")
// }
// alert("Вы ввели " + message)
//////////////
// let message;
// do {
//     message = +prompt("Введите значение больше 10")
// }
// while  ( message <= 10);
// alert("Вы ввели " +message)
/////////


// for (let num = 0; num <= 10; num+=3){
//     console.log ("number = " + num)
// }

// let start = 3;
// let end = 10;
// let sum = 0;

// for (let i = start; i <= end; i++){
//     sum += i
// }
// console.log(`к этосу числу${start} прибавлялем это ${end}, сумма чисел между ними ${sum}`)

//
// let wind = 0;
// while (true){
//     mess = prompt("Введите слово exit")
//     if (mess == "exit"){
//         break;
//     }
    
//     let drawNum = Number(mess);

//     if (isNaN(drawNum)){
//         continue;
//     }

//     wind += drawNum;
    
    
// }
// console.log("вы ввели = " + wind )
/////////таблица умножения

// for (let x = 1; x < 10; x++){
//     for (let y = 1; y < 10; y++){
//         console.log(`${x}*${y} = ${x * y}`)
//     }
//     console.log("")
// }
//////////////
// dz
// for (let hi = 0; hi < 10; hi++ ){
//     alert("hello world " + hi)
// }
/////////////////////////////////////////////////////////massive

// let contry = ["France", "Ukrainian","Russian","Kipr","USA"]

// for (let index = 0; index <= contry.length; index++){
//     const element = contry[index]
//     console.log(element)
// }

// for ( const variable of contry[3]){
//     console.log(contry)
// }
//////////////

// let sku = [];
// sku[0] = "milk";
// sku[1] = "bread";
// sku[2] = "butter";
// sku[3] = "potato";


// let price = [];
// price[0] = 20.5;
// price[1] = 15;
// price[2] = 50;
// price[3] = 35;

// let products = [];

// // цикл для получения количества покупаемых продуктов
// for (let index = 0; index < sku.length; index++) {
//     const name = sku[index];
//     const prices = price[index];

//     products[index] = +prompt(`Укажите количество продуктов '${name}', цена ${prices}`, 0);
// }

// // цикл для расчета общей цены купленных продуктов
// let totalPrice = 0;
// for (let index = 0; index < products.length; index++) {
//     totalPrice += price[index] * products[index];
// }

// alert(`Сумма Вашего заказа ${totalPrice}.`);

// let isFreeShipping = totalPrice > 1000;
// if (isFreeShipping) // иногда в условии используется только одна переменная
// {
//     alert("Доставка будет бесплатной.");
// }
/////как вытащить самое большое число
// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// let val = Number.MIN_VALUE;
// for (let index = 0; index < values.length; index++) {
//     const element = values[index];
//     if (element > val) {
//         val = element;
//     }
// }
// console.log(val);
/////////////////
//dz
// let randomValue = [] ;
// randomValue[0] = Math.floor(Math.random() * 101);
// randomValue[1] = Math.floor(Math.random() * 101);
// randomValue[2] = Math.floor(Math.random() * 101);
// randomValue[3] = Math.floor(Math.random() * 101);
// randomValue[4] = Math.floor(Math.random() * 101);
// randomValue[5] = Math.floor(Math.random() * 101);
// randomValue[6] = Math.floor(Math.random() * 101);
// randomValue[7] = Math.floor(Math.random() * 101);
// randomValue[8] = Math.floor(Math.random() * 101);
// randomValue[9] = Math.floor(Math.random() * 101);
 

// // console.log(randomValue)
// for (let index = 0; index < randomValue.lenght; index++){
// //    const amount = randomValue[index];
//    console.log(randomValue[index]);
  
// }
///////////////////////////////методі массивов
//pop удаляет последний єлемент массива записівая в переменную
//push добавляет в последний метод записівая в переменную

// let cityes = ['kharkow', ' kiev', 'kherson', 'lviv']
// console.log(cityes)

// let kharkow = cityes.pop()
// console.log(cityes)

// for (i = 0; i < cityes.length; i++){
//     console.log(cityes[i])
// }

// console.log('-----------------------------------')

// cityes.push('Zaporizha')
// for(i = 0; i < cityes.length;i++){
//     console.log(cityes[i])
// }
////shift удаляет ПЕРВЫЙ элемент массива
///unshift добавляет первый элемент массива а все остальные сдвигает
// splice(start, delecount,items...)1 с которго начать удалять єлементі 2 сколько удлаить 3какой єлемент добавить
///slice(1,2) добавляет в переменную элементы с массива, делает новый массив let newMassive = oldMassive.slice(1.4)
///concat плюсюет содержимое массивов let newMassive = oneMassive.concat(twoMassive)
///indexOf ищет индес элемента в массиве let peremen = nameMassive.indexOf("element",можно писать начиная с какого)/lastIndexOf ищет с конца
//let nameMassive - stringName.split(",") переделівает строку в массив и пишет каким символом разделяь

// let mass = []

// while (true){

//     let input = prompt("enter number", 0);


//     if ( input === "exit") break;

//     let value = Number(input);

//     if(isNaN(value)){
//         alert("You didn't enter number")
//     } else {
//         mass.push(value);
//     }

//     let sum = 0;
//     for (i = 0; i < mass.length; i++){
//         sum += mass[i]
//     }

//     alert("you enter" + sum)
// }
////////////dz
// i dont know

////////////////////////////////////////function
///////////можно второе віражение записівать function showMess(text, amount = 1) будет тоже что и ниже
// function showMess(text, amount) {
//     if (amount === undefined ){
//         amount = 1;
//     }

//     for (let i = 0; i < amount ; i++){
//         console.log(text);
//     }
// }


// showMess("heloo",10)
/////////////////////////////////////////return в функции останавливает её

// let firstName ;
// let lastName ;
// let age ;

// function naming(){
//     firstName = prompt("Введите ваше имя", "")
//     lastName = prompt("Введите вашe фамилию", "")
//     age = prompt("Введите ваш возвраст", "")
// }


// function say(){
//     console.log("Имя - " + firstName)
//     console.log("Фамилия - " + lastName)
//     console.log("возвраст - " + age)
// }

// do {
//     naming()
//     say()
//     revers = confirm(" Хотите повторить еще раз?")
// } while (revers)

/////////////////////////////

// function plus(a, b) {
//   return  a + b;
// }
// function minus(a, b) {
//   return  a - b;
// }
// function del(a, b){
//  return   a / b;
    
// }
// function mnozh(a, b){
//   return  a * b;
    
// }

// let operand1 = +prompt(" введите число");
// let operat = prompt(" выберите оператор  + ,- ,/ ,* ");
// let operand2 = +prompt("введите число");

// let result;

// switch (operat){
//     case "+":
//         result = plus(operand1, operand2)
//         break;
//     case "-":
//         result = minus(operand1, operand2)
//         break;
//     case "/":
//         result = del(operand1, operand2)
//        break;
//     case "*":
//         result = mnozh(operand1, operand2)
//         break;
//     default :
//     console.log( operat + "non")
// }

// if ( result !== undefined){
//     console.log(` ${operand1} ${operat} ${operand2} = ${result}`)
// }
//////////////////recursiya
// function test(counter) {
//    counter--;
//    console.log("part 1 - " + counter);

//    if (counter != 0) {
//        test(counter);
//    }

//    console.log("part 2 - " + counter);
// }
// test(3);
////////////////////factorial

// let num = +prompt("Введите число ", 0)

// function factorial(x){

//    if (x < 1){
//       return 1
//    }
//   return x * factorial(x - 1)
// }
// let result = factorial(num)
// console.log( num +"! =" +result)

/////////////////////////dz
// function example( a, b){
//    return a + b
// }

// console.log(example(10,20))
/////////////dz
// let num = 232

// function one(){
//    console.log(num)
//    let a = "1"
//    console.log(a)
//    function two(){
//       console.log(num)
//       console.log(a)
//       let b = "2"
//       console.log(b)
//    }
//    return true;
// }
// function three(){
//    console.log(num)
// }

// console.log(num)
// one()

// three()
// console.log(two())\
//////////////////////////////dz

// let  user= {
   
//    messege: function (){
//       alert(`Привет, меня зовут ${user.name}, мне ${user.age} лет`)
//    }

// }

// user.name = prompt(" Wat's you name", "")
// user.age = +prompt("what you age?", 0)

// console.log(user.messege())



// let cities = ["London", "Paris", "Berlin", "Rome"];

// "use strict";


// let cities = ["London", "Paris", "Italy", "Berlin", "Rome"];



// cities.splice(2, 1);

// console.log(cities)
console.log(Number("   10   ") + 1);