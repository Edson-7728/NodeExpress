import prompt from "prompt-sync";

function executa () { 
const arr = [];
const pr = prompt();
while (true) {
    const prop = pr ('Entre com propriedade CSS: ');
    if (prop.toLowerCase() === 'sair') {
        console.log (arr.sort ());
        break;
    } else {
        arr.push (prop);
    }
}
}
executa ();