let alunos = [

    {
        id: 'aluno1',
        nome: 'Gustavo',
        notaMatematica: 10,
        notaBiografia: 3,
    },

    {
        id: 'aluno2',
        nome: 'Fernanda',
        notaMatematica: 19,
        notaBiografia: 5,
    },

    {
        id: 'aluno3',
        nome: 'Fellipe',
        notaMatematica: 6,
        notaBiografia: 9,
    },

    {
        id: 'aluno4',
        nome: 'Patricia',
        notaMatematica: 3,
        notaBiografia: 7,
    },

    {
        id: 'aluno5',
        nome: 'Beatriz',
        notaMatematica: 7,
        notaBiografia: -6,
    },

];

function studant(aluno) {
    aluno.nomeCompleto = aluno.nome

    aluno.statusDaMatematica = quebraCabeca(aluno.notaMatematica, mediaMatematica);
    aluno.statusDaBiografia = quebraCabeca(aluno.notaBiografia, mediaBiografia);
}

function boletimTd(aluno, elementClick) { 


    if (aluno.closed) {
        alert('Nota do aluno ja foi fechada')
        return;
    }
    if (
        aluno.statusDaMatematica === 'Nota Invalida'
    || aluno.statusDaBiografia === 'Nota Invalida' 
    ) {
        alert('[ERRO402]. Altere a nota do aluno')
        let html = document.getElementById('id_' + aluno.id)
        html.innerHTML = 'Corrigir Nota'
        html.style.background = 'red'
        html.style.color = 'white'
        return;
    }
    

    elementClick.innerHTML = 'Nota Aprovada'
    elementClick.style.background = 'lightgreen'


    aluno.closed = true;

    elementClick.onclick = null;
}