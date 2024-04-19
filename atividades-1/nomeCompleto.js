//baixar extensão Code Runner e utilizar o comando: CTRL + ALT + N

function nomeCompleto(name) {
    const partes = name.trim().split(' ');
    const primeiroNome = partes[0];
    const ultimoNome = partes[partes.length - 1];
    const nome = primeiroNome + ' ' + ultimoNome;
    const nomeInvertido = ultimoNome + ' ' + primeiroNome;
    return `${nome} // ${nomeInvertido}`;
}

console.log(nomeCompleto(' William  Italia  '));
