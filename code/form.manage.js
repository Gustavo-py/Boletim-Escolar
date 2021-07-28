function sendToForm(aluno, elementClick) {

    selectedAluno = aluno;

    const {
        titulo,
        notaM,
        statusDaNota,
        notaBiografias,
        daNotaBiografia,
    } = getRequest()

    titulo.value = aluno.nomeCompleto;
    notaM.value = aluno.notaMatematica;
    statusDaNota.value = aluno.statusDaMatematica;
    notaBiografias.value = aluno.notaBiografia;
    daNotaBiografia.value = aluno.statusDaBiografia;

    if (aluno.closed) {

        notaM.disabled = true;
        notaBiografias.disabled = true;
        return;
    }

}
function getRequest() {
    let titulo = document.getElementById('select-name');
    let notaM = document.getElementById('select-math');
    let statusDaNota = document.getElementById('select-math-status');
    let notaBiografias = document.getElementById('select-biografia');
    let daNotaBiografia = document.getElementById('select-biografia-status');

    return {
        titulo,
        notaM,
        statusDaNota,
        notaBiografias,
        daNotaBiografia,
    }
}

function clearForm(){
    selectedAluno = null;
    const {     
        titulo,
        notaM,
        statusDaNota,
        notaBiografias,
        daNotaBiografia,
    } = getRequest()

    titulo.value
    notaM.value = '';
    statusDaNota.value = '';
    notaBiografias.value = '';
    daNotaBiografia.value = '';
}

function update() {
    if (!selectedAluno) {
        alert('COMANDO INVALIDO!!')
        return;
    }

    if (selectedAluno.closed) {
        alert('Nota do aluno ja foi fechada')
        clearForm();
        return;
    }

    const {
        notaM,
        notaBiografias,
    } = getRequest()

    selectedAluno.notaMatematica = notaM.value;
    selectedAluno.notaBiografia = notaBiografias.value;

    
    executarTudo();
    clearForm();
}