// FUNÇÕES PARA MANIPULAR OS DADOS NA AGENDA:
//1.FUNÇÃO DE ADICIONAR UM CONTATO(FEITO);
function funcaoAdicionar(arrayContato){
    let arrayAdicionar = funcaoDados();
    matrizContatos.push(arrayAdicionar);
    alert(`Contato de nome ${arrayAdicionar[0]} e numero ${arrayAdicionar[1]} adicionado`);
    return matrizContatos;
}

//2.FUNÇÃO PARA VISUALIZAR TODOS OS CONTATOS(FEITO);
function funcaoVisualizar(matrizContatos){
    const mostrar = matrizContatos;
    alert("Lista de contatos imprimida no console ;)");
    console.log("Lista abaixo:")
    console.log(mostrar);
    return mostrar;
};

// 3.FUNÇÃO PARA REMOVER UM CONTATO(FEITO);
function funcaoRemover(){
    const itemRemover = prompt("Digite o nome ou o telefone do contato que deseja remover: ")
    for(let i = 1; i < matrizContatos.length; i++){
        if(itemRemover === matrizContatos[i][0] || itemRemover === matrizContatos[i][1]){
            alert("Contato encontrado!")
            matrizContatos.splice(i, 1)
            alert(`Contato de nome ${i.valueOf} de número ${i.valueOf} foi removido`)
            alert(`Contato removido`)
            break;
        }
    }
}


// 4.FUNÇÃO PARA EDITAR UM CONTATO(AINDA EM DESENVOLVIMENTO.);
function funcaoEditar(){
    const itemEditar = prompt("Digite o nome ou o telefone do cotato que deseja editar: ")
    for(let i = 1; i < matrizContatos.length; i++){
        if(itemEditar == matrizContatos[i][0] || itemEditar == matrizContatos[i][1]){
            alert("Contato encontrado!");
            let flagEdit = true;
            let opcaoEditar = "";
            do{
                opcaoEditar = parseInt(prompt("Digite 1 para editar o nome do contato ou 2 para editar o número de telefone"));

                switch(opcaoEditar){
                    case 1:
                        let newNomContato = prompt("Digite o novo nome do contato: ");
                        matrizContatos[i][0] = newNomContato;
                        break;
                    case 2:
                        let newNumContato = prompt("Digite o novo número do contato: ");
                        matrizContatos[i][1] = newNumContato
                        break;
                    case 3:
                        alert("Operação cancelada!")
                        alert("saindo...")
                        flagEdit = false
                    default:
                        alert("Digite algo valido!")

                }
            }while(flagEdit === true);
        };
    };
};

//5.FUNÇÃO PARA PEDIR DADOS(FEITO);
function funcaoDados(){
    let nomContato = prompt("Digite o nome do contato:");
    let numContato = prompt("Digite o número do contato: ");
    const arrayContato = new Array(nomContato, numContato);
    return arrayContato;
};

// CRIAÇÃO DA MATRIZ QUE IRÁ ARAMZENAR OS CONTATOS;
const matrizContatos = [
    ["Nome", "Telefone"]
];

//MENU PARA NAVEGAÇÃO DA AGENDA (SWITCH CASE + DO/WHILE)(FEITO);
let flagMenu = true;
let opcao = ""
//(VALIDAÇÃO DO NOME DO USUÁRIO FEITA)
let usu = prompt("Digite seu nome do usuário: ")
while(usu === null || usu === "" || !isNaN(usu)){
    usu = prompt("Resultado invalido, digite o seu nome corretamente: ")
};


    do{

        opcao = parseInt(prompt(`---------------------------------------------------------------------------- \nBem vindo ${usu} a sua agenda de contatos\n ----------------------------------------------------------------------------  [1] para adicionar um contato \n [2] para visualizar todos os contatos \n [3] para remover um contato \n [4] para editar os dados de algum contato \n [5] para sair`))

        switch(opcao){
            case 1:
                //FUNÇÃO ADICIONAR;
                funcaoAdicionar();
                break;
            case 2:
                //FUNÇÃO VISUALIZAR;
                funcaoVisualizar(matrizContatos);
                break;
            case 3:
                funcaoRemover();
                break;
            case 4:
                //FUNÇÃO EDITAR;
                funcaoEditar();
                break;
            case 5:
                alert("saindo...");
                flagMenu = false;
                break;
            default:
                alert("Digite algo valido");
                break;
        }
    }while(flagMenu === true);
