//baixar extensão Code Runner e utilizar o comando: CTRL + ALT + N

function mediaNotas(notas) {
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    const media = total / notas.length;
    return media;
}

let notas = [7, 5, 8, 10];
console.log(mediaNotas(notas));

