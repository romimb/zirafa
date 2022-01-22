function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let o = rand(1, 6);
let b = rand(10, 20);

// console.log(o, b);


// console.log('HeLLo KiTTy');
// console.log('HeLLo KiTTy');
// console.log('HeLLo KiTTy');


// let i = 0;

// while (i < 3) {
//     i++;
//     console.log('HeLLo KiTTy');
// }

// let x;

// do {
//     x = rand(10, 20);
//     console.log(x);
// } while (x < 15);


// let monetosPuse;

// do {

//     monetosPuse = rand(1, 2);
//     console.log(monetosPuse);

// } while (monetosPuse != 2);

// == ===> !=
// != ===> ==
// < ===> >=
// > ===> <=
// <= ===> >
// >= ===> <

// let kauliukas;

// do {

//     kauliukas = rand(1, 6);
//     console.log(kauliukas);

// } while (kauliukas != 3);


// let kauliukas;

// do {

//     kauliukas = rand(1, 6);
//     console.log(kauliukas);

// } while (kauliukas <= 3);


// || ===> &&
// && ===> ||



let kauliukas;
let kiekMetimu = 0;

do {

    kauliukas = rand(1, 6);
    console.log(kauliukas);

} while (kauliukas != 2 && kauliukas != 5);




let i = 0;
let kiek = 0;

while (i < 5) {
    i++;
    kiek++;
    console.log('Valio');
}

console.log(kiek);