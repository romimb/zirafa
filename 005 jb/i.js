function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// console.log('------------------------------------------');


// let kibiras5 = 0;


// for (let i = 0; i < 20; i++) {

//     if (i == 7 || i == 13) {
//         continue;
//     }

//     let siuksliu = rand(5, 105);
//     kibiras5 = kibiras5 + siuksliu;
// }

// console.log(kibiras5);


// console.log('------------------------------------------');


// let kibiras6 = 0;


// for (let i = 0; i < 20; i = i + 3) {

//     let siuksliu = rand(5, 105);
//     kibiras6 = kibiras6 + siuksliu;
// }

// console.log(kibiras6);


// console.log('------------------------------------------');

// for (let i = 19; i >= 0; i--) {
//     console.log(i);
// }


// let smallHouse = 'Zita';

// let bigHouse = ['James', 'Zita', 'Bond'];

// let cats = ['Murka', 'Pilkis', 'Keris', 'Ūkas', 'Rainis', 'Pilkis', 'Murka', 'Pilkis'];



// smallHouse = 'Bebras';
// bigHouse[1] = 'Barsukas';


// console.log(smallHouse, bigHouse[0], bigHouse[2], bigHouse[1], bigHouse.length);


// for (let i = 0; i < bigHouse.length; i++) {
//     console.log(bigHouse[i]);
// }


// console.log('------------------------------------------');

// let pilkiai = 0;

// for (let i = 0; i < cats.length; i++) {

//     if (cats[i] == 'Pilkis') {
//         pilkiai++;
//     }

// }

// console.log(pilkiai);

// console.log('------------------------------------------');


// for (let i = 0; i < cats.length; i++) {

//     if (cats[i] == 'Pilkis') {
//         cats[i] = 'Zita';
//     }

// }


// let namukas = [];

// namukas[0] = 'Bebras';
// namukas[10] = 'Barsukas';

// namukas.push('Bebras');
// namukas.push('Barsukas');


// console.log(namukas);

// let namas = [];

// console.log('------------------------------------------');

// for (let i = 0; i < 10; i++) {
//     namas.push('Zita');
// }

// console.log(namas);





// console.log('------------------------------------------');
// let namas2 = [];

// for (let i = 0; i < 10; i++) {
//     namas2.push(rand(11, 21));
// }
// console.log(namas2);


// console.log('------------------------------------------');

// let daugiau15 = 0;

// for (let i = 0; i < namas2.length; i++) {

//     if (namas2[i] > 15) {
//         daugiau15++;
//     }

// }

// console.log(daugiau15);


// console.log('------------------------------------------');


// let didSk = namas2[0];
// let didSkV = 0;

// for (let i = 1; i < namas2.length; i++) {
//     if (namas2[i] > didSk) {
//         didSk = namas2[i];
//         didSkV = i;
//     }
// }

// console.log(didSk, didSkV);



// console.log('------------------------------------------');


// let maxValue;
// let maxValueIndexes = [];

// maxValue = namas2[0]
// maxValueIndexes.push(0);

// for (let i = 1; i < namas2.length; i++) {

//     if (namas2[i] > maxValue) {
//         maxValue = namas2[i];
//         maxValueIndexes = [];
//     }

//     if (namas2[i] == maxValue) {
//         maxValueIndexes.push(i);
//     }

// }

// console.log(maxValue, maxValueIndexes);
// console.log("---------------------------------------");

// //1
// for (let i = 0; i < 11; i++) {
//     console.log(i * 10 + 100);
// }
// console.log("---------------------------------------");

// //2
// let double = 0;
// for (let i = 0; i < 10; i++) {
//     let random = rand(5, 15);
//     console.log("skaicius", random);
//     if (random > 9) {
//         double++;
//     }
// }
// console.log("dvizenkliai", double);
// console.log("---------------------------------------");

// //3
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     let random = rand(5, 15);
//     console.log(random);
//     sum = sum + random;
// }
// console.log("vidurkis", sum / 10)
// console.log("---------------------------------------");


// //4
// let it4 = 0;

// let random4;
// do {
//     it4++;
//     random4 = rand(10, 50);
// } while (random4 != 13 && random4 != 33 && random4 != 43);
// console.log(random4, it4)
// console.log("---------------------------------------");

// //5
// let times = 0;
// let it5 = 0;

// while (times != 3) {
//     it5++;
//     let random = rand(10, 20);
//     if (random == 17) {
//         times++;
//     }
// }
// console.log(times, it5);
// console.log("---------------------------------------");


//5+ jei nori kad cilkas uzsibaigtu tris kartus pataikius ant 17
// let timesPlus = 0;
// let it5Plus = 0;

// while (timesPlus != 3) {
//     it5Plus++;
//     let random = rand(10, 20);
//     // console.log(random);
//     if (random == 17) {
//         timesPlus++;
//     }
//     else {
//         timesPlus = 0;
//     }
// }
// console.log(timesPlus, it5Plus);
// console.log("----------------------MASYVAI--------------------")
//100 elementų masyvas, kurio elementai atsitiktiniai skaičiai nuo 0 iki 100 DONE!
//Prie gauto masyvo pabaigos pridėti dar 5 elementus (nuo 0 iki 100) DONE!(.push)
//Prie gauto masyvo pabaigos pridėti dar 5 elementus lygius -5 DONE!(.push)
//Prie gauto masyvo pradžios pridėti dar 5 elementus lygius -10 DONE!(.unshift)
//Nugriauti 5 viršutinius aukštus DONE! (.pop)
//Nugriauti 5 apatinius aukštus DONE! (.shift)
//Nugriauti 10 aukštų pradedant 10 aaukštu DONE! (.splice)
// let arr = [];
// for (i = 0; i < 20; i++) {
//     arr.push(rand(0, 100));
// }
// for (i = 0; i < 5; i++) {
//     arr.push(rand(0, 100));
// }
// for (i = 0; i < 5; i++) {
//     arr.push(-5);
// }
// for (i = 0; i < 5; i++) {
//     arr.unshift(-10);
// }
// for (i = 0; i < 5; i++) {
//     arr.pop();
// }
// for (i = 0; i < 5; i++) {
//     arr.shift();
// }
// console.table(arr);

// arr.splice(9, 10); /*iskerpa nuo 10 auksto 10 aukstu*/

// console.table(arr);

// arr.splice(4, 1, 0); /*pakeicia auksto gyventoja i kita norima reiksme*/


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arr.splice(i, 1, 0);
//     }
// }
// console.table(arr);
// console.log("****************Funkcija*****************")
// ///////////////
// //FUNKCIJA

// function getAvg(a, b, c) {
//     let avg = (a + b + c) / 3;
//     return avg;
// }
// console.log(getAvg(5, 9, 8));
// console.log("----------------------------");
/// is pacios funkcijos bloko kintamuju is isores pasiekti negalime.

// //1uzd en
// let a = +prompt();
// let b = +prompt();
// let c = +prompt();

// function getSmallest(a, b, c) {
//     return Math.min(a, b, c);
// }
// console.log(getSmallest(25, 37, 29));
// console.log("----------------------------");

// //2uzd en
// let a = +prompt();
// let b = +prompt();
// let c = +prompt();

// function getAvg(a, b, c) {
//     return (a + b + c) / 3;
// }
// console.log(getAvg(a, b, c));
// console.log("----------------------------");

// // 3uzd en
// let a = +pr22ompt();

// function getSeconds(a) {
//     return a * 60;
// }
// console.log(getSeconds(a) + "sekundziu");
// console.log("----------------------------");


// //4uzd en
// function getDigitsSum(sk) {
//     let pSkaitmuo;
//     let sum = 0;
//     while (sk > 0) {
//         pSkaitmuo = sk % 10;
//         sum = sum + pSkaitmuo;
//         sk = Math.floor(sk / 10);
//     }
//     return sum;
// }
// let skaicius = 2258;
// console.log(getDigitsSum(skaicius));
// console.log(getDigitsSum(skaicius + 2));
// console.log(getDigitsSum(skaicius + skaicius));
// console.log(getDigitsSum(236 + skaicius));
// console.log("----------------------------");
// 5uzd en

// function getYear(metai) {
//     let ats = false;
//     if (metai % 4 == 0) {
//         ats = true;
//     }
//     return ats; // grizta true arba false
// }
// console.log(getYear(2000));
// console.log(getYear(2001));
// console.log(getYear(2024));
// 5.1uzd en trumpinamas kodas

// function getYear(metai) {
//     return (metai % 4 === 0) ? true : false; // grizta true arba false
// }
// console.log(getYear(2000));
// console.log(getYear(2001));
// console.log(getYear(2024));
// 5.2uzd en panaudojant masyva

// let metai = [1970, 1570, 1987, 1323, 2000, 1999, 1998]
// function getYear(metai) {
//     return (metai % 4 === 0) ? true : false; // grizta true arba false
// }
// for (let i = 0; i < metai.length; i++) {
//     console.log(getYear(metai[i]));
// }

//6uzd en nepabaigtas

// function trikampis(a, b, c) {
//     let p = (a + b + c) / 2;
//     let plotas = Math.sqrt(s(s - a) * (s - b) * (s - c));
//     return area = 
// }
// let a = 10;
// let b = 15;
// let c = 20;
// console.log("plotas:" + trikampis(a, b, c).tofixed(2))

//7uzd en


// function giveMeSomething(a) {
//     return ("something" + " " + a);
// }
// let a = "is better than nothing";
// console.log(giveMeSomething(a));

//8uzd en
// function calcPoints(a, b) {
//     return a * 2 + b * 3;
// }
// let a = 7;
// let b = 5;
// console.log("dvitaskiai", +a, "tritaskiai", +b, "suma", calcPoints(a, b))

// function
// function pasisveikinimas(laikas) {
//     let atsakymas;
//     if (laikas >= 6 && laikas <= 12) {
//         atsakymas = "Labas rytas";
//     } else if (laikas >= 13 && laikas <= 18) {
//         atsakymas = "Laba diena";
//     } else if (laikas >= 19 && laikas <= 22) {
//         atsakymas = "Labas vakaras";
//     } else if (laikas >= 24 || laikas <= 0) {
//         atsakymas = "Klaida, neteisingai ivesta valanda";
//     } else if (laikas >= 23 || laikas <= 5) {
//         atsakymas = "Saldziu sapnu";
//     } else {
//         atsakymas = "neta ivestis"
//     }
//     return atsakymas;
// }


// Labas rytas: nuo 6 iki 12, [6;12]
// Laba diena: nuo 13 iki 18, [13; 18]
// Labas vakaras: [19; 22]
// Saldziu sapnu: [23; 5]

// console.log(pasisveikinimas(7)); // "Labas rytas"
// console.log(pasisveikinimas("laikas")); // "Laba diena"
// console.log(pasisveikinimas(3)); // "Saldziu sapnu"
// console.log(pasisveikinimas(25)); // "Saldziu sapnu"

console.log("---9uzd en---");

function isSeven(num) {
    return (num === 7);
}
console.log(isSeven(4));
console.log(isSeven(9));
console.log(isSeven(7));

console.log("---10uzd en---");

function equalLength(string1, string2) {
    return string1.length == string2.length;
}
console.log(equalLength("AB", "CD"));
console.log(equalLength("ABC", "DE"));
console.log(equalLength("hello", "hey"));

console.log("---11uzd en---");

function isEmpty(string) {
    return string == "";
}
console.log(isEmpty("haha"));
console.log(isEmpty(""));
console.log(isEmpty(21348));

console.log("---1uzd lt---");

function randomNumber() {
    return Math.random().toFixed(2);
}
let kiek = 5; //Kiek skaiciu generuot
console.log("Gauta ");
for (let i = 0; i < kiek; i++) {
    console.log(randomNumber());
}
console.log("---2uzd lt---");
function randomNumber2() {
    return Math.random().toFixed(n);
}
let n = 5; //Kiek apvalinti skaiciu
let kiek2 = 5; //Kiek skaiciu generuot
for (let i = 0; i < kiek2; i++) {
    console.log(randomNumber2());
}
console.log("---3uzd lt---");
let number = 10;

function randNumFrom1to10(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let kiekSk = 6; //kiek skaiciu generuos
for (let i = 0; i < kiekSk; i++) {
    console.log(randNumFrom1to10(1, 10));
}
console.log("---5uzd lt---");

