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