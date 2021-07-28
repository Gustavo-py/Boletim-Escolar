let mediaMatematica = 7;
let mediaBiografia = 6;
var selectedAluno = null;

function addCustomClick(element, aluno, fn, ){
    element.onclick = function(){
        fn(aluno, element);
    }
}


function executarTudo() {
    for (let aluno of alunos) {
        studant(aluno)
        let tds = criarVariasTd(aluno)


        let tdActions = document.createElement('td');
        tdActions.setAttribute('id', 'aprovar');

        let actionApprove = document.createElement('div');
        actionApprove.setAttribute('id','id_'+ aluno.id)


        addCustomClick(tds[0], aluno, sendToForm)

        if (aluno.closed) {
            actionApprove.innerHTML = 'Nota Aprovada'
            actionApprove.style.background = 'lightgreen';
        } else {
            actionApprove.innerHTML = 'Aprovar Nota';
            actionApprove.style.background = 'lightblue'
            addCustomClick(actionApprove, aluno, boletimTd)
        }


        tdActions.appendChild(actionApprove)

        tds.push(tdActions)

        let criarTr = executarTr(tds, aluno);

        tabela.appendChild(criarTr);

        colorTd();
    }
}
executarTudo();