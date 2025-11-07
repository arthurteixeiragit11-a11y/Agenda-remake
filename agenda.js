
// FUNÇÕES PARA MANIPULAR OS DADOS NA AGENDA:
// 1.FUNÇÃO DE ADICIONAR UM CONTATO
function funcaoAdicionar(arrayContato){
    let arrayAdicionar = funcaoPedir();
    matrizContatos.push(arrayAdicionar);
    alert("contato adicionado");
    return matrizContatos
}

// 2.FUNÇÃO PARA VISUALIZAR TODOS OS CONTATOS

// 3.FUNÇÃO PARA REMOVER UM CONTATO

// 4. FUNÇÃO PARA EDITAR UM CONTATO

// 5.FUNÇÃO PARA BUSCAR UM CONTATO

//FUNÇÃO PARA PEDIR DADOS
function funcaoPedir(){
    let nomContato = prompt("Digite o nome do contato:");
    let numContato = prompt("Digite o número do contato: ");
    const arrayContato = new Array(nomContato, numContato);
    return arrayContato;
};

//FUNÇÃO "funcaoola" PARA VERIFICAR SE OS VALORES DA FUNÇÃO "funcaoPedir" ESTAVAM SENDO TRANSPORTADOS PARA AS OUTRAS FUNÇÕES (IREI TIRAR NO PROXIMO COMMIT PROVAVELMENTE)
function funcaoola(arrayContato){
    let arrayOla = funcaoPedir();
    alert(`olá ${arrayOla[0]} do número ${arrayOla[1]}`);
};

// CRIAÇÃO DA MATRIZ QUE IRÁ ARAMZENAR OS CONTATOS
const matrizContatos = [
    ["Nome", "Telefone"]
];

//MENU PARA NAVEGAÇÃO DA AGENDA (SWITCH CASE + DO/WHILE)(FEITO )
const flagMenu = true;
let opcao = ""

opcao = parseInt(prompt("Digite algo: "));

    do{
        switch(opcao){
            case 1:
                //FUNÇÃO ADICIONAR
                funcaoAdicionar();
                break;
            case 2:
                //FUNÇÃO VISUALIZAR
                alert("2");
                break;
            case 3:
                //FUNÇÃO REMOVER
                alert("3");
                break;
            case 4:
                //FUNÇÃO EDITAR
                alert("4");
                break;
            case 5:
                //FUNÇÃO BUSCAR
                alert("5")
                break;
            case 6:
                alert("saindo...")
                flagMenu = false
                break;
            default:
                alert("Digite algo valido")
                break;
        }
    }while(flagMenu === true);

