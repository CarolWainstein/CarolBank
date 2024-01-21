export default function temMaiorIdade(campo) {
    const dataNascimento = new Date(campo.value);
    
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('o usuário não é maior de idade.');
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}