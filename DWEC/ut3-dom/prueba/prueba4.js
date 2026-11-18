const nivelesBateria = [];

for (let i = 0; i < 10; i++) {
    nivelesBateria.push(Math.floor(Math.random() * 100) + 1);
}

let nivelMasAlto = nivelesBateria[0];
let nivelMasBajo = nivelesBateria[0];
let sumaNiveles = 0;


for (const nivel of nivelesBateria) {
    console.log(`Nivel de batería: ${nivel}`);

    if (nivel > nivelMasAlto) {
        nivelMasAlto = nivel;
    }

    if (nivel < nivelMasBajo) {
        nivelMasBajo = nivel;
    }

    sumaNiveles += nivel;
}


const mediaNiveles = sumaNiveles / nivelesBateria.length;


console.log(`Nivel de batería más alto: ${nivelMasAlto}`);
console.log(`Nivel de batería más bajo: ${nivelMasBajo}`);
console.log(`Media de los niveles de batería: ${mediaNiveles}`);
    