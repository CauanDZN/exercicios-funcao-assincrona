// Função assincrona ou síncrona, o que é?

// Função assíncrona é uma função que não é executada imediatamente, ela é executada em um momento futuro, ou seja, ela é executada em um momento posterior.

// Função síncrona é uma função que é executada imediatamente, ou seja, ela é executada no momento em que é chamada.

// Exemplo de função assíncrona

// async function minhaFuncao() {
//     return "Irei pagar a pizza";
// }

// console.log(minhaFuncao());

// Exemplo de função síncrona

// function minhaFuncao() {
//     return "Irei pagar a pizza";
// }

// console.log(minhaFuncao());

// Exemplo de função assíncrona com await e setTimeout

// async function minhaFuncao() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Irei pagar a pizza");
//         }, 3000);
//     });
// }

// async function executaFuncao() {
//     console.log(await minhaFuncao());
// }

// executaFuncao();

// Exemplo de função síncrona com setTimeout

function minhaFuncao() {
    setTimeout(() => {
        return "Irei pagar a pizza";
    }, 3000);
}

function executaFuncao() {
    console.log(minhaFuncao());
}

executaFuncao();