function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let aukstas = 0; aukstas < 3; aukstas++) {
    console.log('Aukštas:', aukstas);
}


for (let i = 0; i < 3; i++) {
    console.log('Africa');
}





for (let i = 0; i < 3; i++) {

    console.log(rand(3, 13));

}


for (let i = 0; i < 3; i++) {

    console.log(5 + 8);

}



for (let i = 0; i < 15; i++) {

    let sk1 = rand(5, 15);
    let sk2 = rand(5, 15);
    console.log(sk1, 'X', sk2, '=', sk1 * sk2);

}

console.log('------------------------------------------');

for (let i = 0; i < 10; i++) {

    let kauliukas = rand(1, 6);

    if (kauliukas > 3) {
        console.log(kauliukas);
    }


}


console.log('------------------------------------------');

for (let i = 0; i < 10; i++) {

    let kauliukas = rand(1, 6);

    if (kauliukas < 3) {
        console.log(kauliukas);
    } else {
        console.log('Valio!');
    }

}


console.log('------------------------------------------');

for (let i = 0; i < 20; i++) {

    let skaicius = rand(5, 105);

    if (skaicius % 2 == 0) {
        console.log(skaicius);
    }

}

console.log('------------------------------------------');


let kibiras = 0;


for (let i = 0; i < 20; i++) {
    let siuksliu = rand(5, 105);
    // kibiras += siuksliu;
    kibiras = kibiras + siuksliu;
}

console.log(kibiras);

let x = 'Kiaulė';
let y = 'Didelė';

console.log(y + ' ' + x);



console.log('------------------------------------------');

let maisas = '';

for (let i = 0; i < 400; i++) {
    maisas = maisas + '*';
}

console.log(maisas);


console.log('------------------------------------------');

let kibiras1 = 0;

for (let i = 0; i < 20; i++) {
    let siuksliu = rand(5, 105);
    if (siuksliu > 50) {
        kibiras1 = kibiras1 + siuksliu;
    }
}

console.log(kibiras1);


console.log('------------------------------------------');

let kibiras2 = 0;
let kiekKibire2 = 0;

for (let i = 0; i < 20; i++) {
    let siuksliu = rand(5, 105);
    if (siuksliu > 50) {
        kibiras2 = kibiras2 + siuksliu;
        kiekKibire2++;
    }
}

console.log(kibiras2, kiekKibire2);


let kibrasBlue = 0;
let kibirasGreen = 0;

for (let i = 0; i < 20; i++) {

    let siuksliu = rand(5, 105);
    if (i % 2 == 0) {
        kibrasBlue = kibrasBlue + siuksliu;
    } else {
        kibirasGreen = kibirasGreen + siuksliu;
    }
}

console.log(kibrasBlue, kibirasGreen);




console.log('------------------------------------------');


let kibiras5 = 0;


for (let i = 0; i < 20; i++) {
    let siuksliu = rand(5, 105);

    if (kibiras5 + siuksliu > 500) {
        break;
    }

    kibiras5 = kibiras5 + siuksliu;
}

console.log(kibiras5);





for (let ii = 0; ii < 5; ii++) {

    let pliusai = '';
    for (let i = 0; i < 100; i++) {
        pliusai = pliusai + '+';
    }
    console.log(pliusai);

}