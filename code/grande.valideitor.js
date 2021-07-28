
function quebraCabeca(nota, media) {
    let status;

    if (nota < 0 || nota > 10 ) {
        status = 'Nota Invalida';

    } else {
        let paraMedia = (nota >= media);

        if (paraMedia) {
            status = 'Aprovado';
        } else {
            status = 'Reprovado';
        }
    }
    return status;
}