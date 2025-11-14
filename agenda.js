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

// 3.FUNÇÃO PARA REMOVER UM CONTATO(FEITO)(VALIDAÇÃO CONCLUIDA!);
function funcaoRemover(){
    const itemRemover = prompt("Digite o nome ou o telefone do contato que deseja remover: ")
    while(itemRemover === null || itemRemover === "" || itemRemover <= 0){
        itemRemover = prompt("Digite um nome ou número de contato valido: ")
    }
    for(let i = 1; i < matrizContatos.length; i++){
        if(itemRemover === matrizContatos[i][0] || itemRemover === matrizContatBos[i][1]){
            alert("Contato encontrado!")
            matrizContatos.splice(i, 1)
            alert(`Contato de nome ${matrizContatos[i][0]} de número ${matrizContatos[i][1]} foi removido`)
            break;
        }
        else{
            alert(`o nome/número ${itemRemover} não existe na sua agenda de contatos!`)
            break;
        };
    }
}


// 4.FUNÇÃO PARA EDITAR UM CONTATO(VALIDAÇÃO CONCLUIDA!);
function funcaoEditar(){
    let itemEditar = prompt("Digite o nome ou o telefone do contato que deseja editar: ")
    while(itemEditar === null || itemEditar === "" || itemEditar <= 0){
        itemEditar = prompt("Digite um nome ou número de contato valido: ");
    };
    if(itemEditar !== matrizContatos.values){
        alert(`o nome/número ${itemEditar} não existe na sua agenda de contatos`)
        alert("Voltando para o menu inicial...")
    }
    for(let i = 1; i < matrizContatos.length; i++){
        if(itemEditar == matrizContatos[i][0] || itemEditar == matrizContatos[i][1]){
            alert("Contato encontrado!");
            let flagEdit = true;
            let opcaoEditar = "";
        
            do{
                opcaoEditar = parseInt(prompt("Digite 1 para editar o nome do contato ou 2 para editar o número de telefone ou 3 para sair do modo de edição"));

                switch(opcaoEditar){
                    case 1:
                        let newNomContato = prompt("Digite o novo nome do contato: ");
                        while(newNomContato === null || newNomContato === "" || !isNaN(newNomContato)){
                            newNomContato = prompt("Digite um nome de contato valido: ")
                        }
                        matrizContatos[i][0] = newNomContato;
                        break;
                    case 2:
                        let newNumContato = prompt("Digite o novo número do contato: ");
                        while(newNumContato === null || newNumContato === "" || newNumContato <= 0 || isNaN(newNumContato)){
                            newNumContato = prompt("Digite um número de contato valido: ")
                        };
                        matrizContatos[i][1] = newNumContato
                        break;
                    case 3:
                        alert("Operação cancelada!")
                        flagEdit = false
                    default:
                        alert("Digite algo valido!")

                }
            }while(flagEdit === true);
        };
    };
};

//5.FUNÇÃO PARA PEDIR DADOS(FEITO)(VALIDAÇÃO CONCLUIDA!)(EM DESENVOLVIMENTO);
function funcaoDados(){
    let nomContato = prompt("Digite o nome do contato ou digite 'cancelar' para sair :");
    while(nomContato === null || nomContato === "" || !isNaN(nomContato)){
        nomContato = prompt("Por favor digite o nome do contato corretamente: ")
    };
    if(nomContato === cancelar){
        alert("Voltando para o menu incial...")
    }
    let numContato = prompt("Digite o número do contato: ");
    while(numContato === null || numContato <= 0 || numContato === "" || isNaN(numContato)){
        numContato = prompt("Digite o número do contato corretamente: ")
    };
    const arrayContato = new Array(nomContato, numContato);
    return arrayContato;
};

// CRIAÇÃO DA MATRIZ QUE IRÁ ARMAZENAR OS CONTATOS;
const matrizContatos = [
    ["Nome:", "Telefone:"]
];

//MENU PARA NAVEGAÇÃO DA AGENDA (SWITCH CASE + DO/WHILE)(FEITO);
let flagMenu = true;
let opcao = ""
//(VALIDAÇÃO CONCLUIDA!)
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
