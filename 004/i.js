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


let smallHouse = 'Zita';

let bigHouse = ['James', 'Zita', 'Bond'];

let cats = ['Murka', 'Pilkis', 'Keris', 'Ūkas', 'Rainis', 'Pilkis', 'Murka', 'Pilkis'];



smallHouse = 'Bebras';
bigHouse[1] = 'Barsukas';


console.log(smallHouse, bigHouse[0], bigHouse[2], bigHouse[1], bigHouse.length);


for (let i = 0; i < bigHouse.length; i++) {
    console.log(bigHouse[i]);
}


console.log('------------------------------------------');

let pilkiai = 0;

for (let i = 0; i < cats.length; i++) {

    if (cats[i] == 'Pilkis') {
        pilkiai++;
    }

}

console.log(pilkiai);

console.log('------------------------------------------');


for (let i = 0; i < cats.length; i++) {

    if (cats[i] == 'Pilkis') {
        cats[i] = 'Zita';
    }

}


let namukas = [];

// namukas[0] = 'Bebras';
// namukas[10] = 'Barsukas';

namukas.push('Bebras');
namukas.push('Barsukas');


console.log(namukas);

let namas = [];

console.log('------------------------------------------');

for (let i = 0; i < 10; i++) {
    namas.push('Zita');
}

console.log(namas);





console.log('------------------------------------------');
let namas2 = [];

for (let i = 0; i < 10; i++) {
    namas2.push(rand(11, 21));
}
console.log(namas2);


console.log('------------------------------------------');

let daugiau15 = 0;

for (let i = 0; i < namas2.length; i++) {

    if (namas2[i] > 15) {
        daugiau15++;
    }

}

console.log(daugiau15);


console.log('------------------------------------------');


let didSk = namas2[0];
let didSkV = 0;

for (let i = 1; i < namas2.length; i++) {
    if (namas2[i] > didSk) {
        didSk = namas2[i];
        didSkV = i;
    }
}

// console.log(didSk, didSkV);



console.log('------------------------------------------');


let maxValue;
let maxValueIndexes = [];

maxValue = namas2[0]
maxValueIndexes.push(0);

for (let i = 1; i < namas2.length; i++) {

    if (namas2[i] > maxValue) {
        maxValue = namas2[i];
        maxValueIndexes = [];
    }

    if (namas2[i] == maxValue) {
        maxValueIndexes.push(i);
    }

}

console.log(maxValue, maxValueIndexes);
console.log("---------------------------------------");

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
    // console.log(random);
    if (random == 17) {
        timesPlus++;
    }
    else {
        timesPlus = 0;
    }
}
console.log(timesPlus, it5Plus);
console.log("----------------------MASYVAI--------------------")
//100 elementų masyvas, kurio elementai atsitiktiniai skaičiai nuo 0 iki 100 DONE!
//Prie gauto masyvo pabaigos pridėti dar 5 elementus (nuo 0 iki 100) DONE!(.push)
//Prie gauto masyvo pabaigos pridėti dar 5 elementus lygius -5 DONE!(.push)
//Prie gauto masyvo pradžios pridėti dar 5 elementus lygius -10 DONE!(.unshift)
//Nugriauti 5 viršutinius aukštus DONE! (.pop)
//Nugriauti 5 apatinius aukštus DONE! (.shift)
//Nugriauti 10 aukštų pradedant 10 aaukštu DONE! (.splice)
let arr = [];
for (i = 0; i < 20; i++) {
    arr.push(rand(0, 100));
}
for (i = 0; i < 5; i++) {
    arr.push(rand(0, 100));
}
for (i = 0; i < 5; i++) {
    arr.push(-5);
}
for (i = 0; i < 5; i++) {
    arr.unshift(-10);
}
for (i = 0; i < 5; i++) {
    arr.pop();
}
for (i = 0; i < 5; i++) {
    arr.shift();
}
console.table(arr);

arr.splice(9, 10); /*iskerpa nuo 10 auksto 10 aukstu*/

console.table(arr);

// arr.splice(4, 1, 0); /*pakeicia auksto gyventoja i kita norima reiksme*/


for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr.splice(i, 1, 0);
    }
}
console.table(arr);
