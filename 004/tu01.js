// JavaScript tarpinis žinių patikrinimo testas #01


// Parašyti skriptą, kuris naudojant for ciklą atspausdintų 11 skaitmenų nuo 100 iki 200 kas 10(t.y. 100, 110, 120… 180, 190, 200);
// Cikle for naudoti rand() funkciją sugeneruoti 10 skaičių nuo 5 iki 15. Sugeneruotus skaičius cikle spausdinti.Ciklui pasibaigus išspausdinti cikle sugeneruotų dviženklių skaičių kiekį;
// Cikle for naudoti rand() funkciją sugeneruoti 10 skaičių nuo 5 iki 15. Sugeneruotus skaičius cikle spausdinti.Ciklui pasibaigus išspausdinti cikle sugeneruotų skaičių vidurkį 
// Cikle do while naudoti rand() funkciją ir generuoti skaičius nuo 10 iki 50. Ciklą užbaigti, kai bus sugeneruotas skaičius 13 arba 33 arba 43. Ciklui pasibaigus išspausdinti iteracijų(kiek kartų ciklas prasisuko) kiekį
// Cikle while naudoti rand() funkciją ir generuoti skaičius nuo 10 iki 20. Ciklą užbaigti, kai bus tris kartus(trečią, ne pirmą kartą) sugeneruotas skaičius 17. Ciklui pasibaigus išspausdinti iteracijų(kiek kartų ciklas prasisuko) kiekį.

// Apačioje pateikta rand() funkcija:


// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }




//1
let sk = 90;
for (let i = 0; i < 11; i++) {
    sk = sk + 10;
    console.log(sk);
}
//2
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let kiek1 = 0;
for (let i = 0; i < 10; i++) {
    let sk = rand(5, 15);
    console.log("skaicius", sk);
    if ((sk >= 10) && (sk <= 15)) {
        kiek = kiek1++;
    }
}
console.log("kiekis", kiek);
//3

for (let i = 0; i < 10; i++) {
    let sk = rand(5, 15);
    console.log(sk);
}

//////////////////////////////////////////////////
//Sprendimai

//1
for (let i = 0; i < 11; i++) {
    console.log(i * 10 + 100);
}
console.log("---------------------------------------");

//2
let double = 0;
for (let i = 0; i < 10; i++) {
    let random = rand(5, 15);
    console.log("skaicius", random);
    if (random > 9) {
        double++;
    }
}
console.log("dvizenkliai", double);
console.log("---------------------------------------");

//3
let sum = 0;
for (let i = 0; i < 10; i++) {
    let random = rand(5, 15);
    console.log(random);
    sum = sum + random;
}
console.log("vidurkis", sum / 10)
console.log("---------------------------------------");


//4
let it4 = 0;

let random4;
do {
    it4++;
    random4 = rand(10, 50);
} while (random4 != 13 && random4 != 33 && random4 != 43);
console.log(random4, it4)
console.log("---------------------------------------");

//5
let times = 0;
let it5 = 0;

while (times != 3) {
    it5++;
    let random = rand(10, 20);
    if (random == 17) {
        times++;
    }
}
console.log(times, it5);
console.log("---------------------------------------");


//5+ jei nori kad cilkas uzsibaigtu tris kartus pataikius ant 17
let timesPlus = 0;
let it5Plus = 0;

while (timesPlus != 3) {
    it5Plus++;
    let random = rand(10, 20);
    console.log(random);
    if (random == 17) {
        timesPlus++;
    }
    else {
        timesPlus = 0;
    }
}
console.log(timesPlus, it5Plus);