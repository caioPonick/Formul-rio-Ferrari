function validar() {
    let nome = document.getElementById("forms_nome").value.trim();
    let email = document.getElementById("forms_email").value.trim();
    let tel = document.getElementById("forms_tel").value.trim();
    let idadeStr = document.getElementById("forms_idade").value.trim();
    let pais = document.getElementById("forms_pais").value;
    let cidade = document.getElementById("forms_cidade").value.trim();
    let insta = document.getElementById("forms_instagram").value.trim();
    let primeiroCtt = document.getElementById("forms_data").value;
    let horarioPref = document.getElementById("forms_horario").value;
    let visita = document.getElementById("forms_visita").value;
    let metodoCtt = document.getElementById("forms_metodo").value;
    let modelos = document.getElementById("forms_modelo").value;
    let modeloEspec = document.getElementById("forms_pesquisa_modelo").value.trim();
    let condicao = document.getElementById("forms_condicao").value;
    let corExt = document.getElementById("forms_corExt").value.trim();
    let corInt = document.getElementById("forms_corInt").value.trim();
    let interesse = document.getElementById("forms_interesse").value.trim();
    let estimadoCompra = document.getElementById("forms_mesCompra").value;
    let semanaTest = document.getElementById("forms_semanaTest").value;
    let possuiu = document.getElementById("forms_possuiu").value;
    let fotoInput = document.getElementById("forms_foto");
    let finalidade = document.getElementById("forms_finalidade").value;
    let financiamento = document.getElementById("forms_financiamento").value;
    let possuiTroca = document.getElementById("forms_troca").value;
    let marcaTroca = document.getElementById("forms_marcaTroca").value.trim();
    let anoTrocaStr = document.getElementById("forms_anoTroca").value.trim();
    let kmTrocaStr = document.getElementById("forms_Km").value.trim();
    let duvidas = document.getElementById("forms_duvida").value.trim();
    let notificacoes = document.getElementById("forms_notificacao").value;
    let lgpdCheckbox = document.getElementById("forms_lgpd");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telDigitosRegex = /^\d{10,11}$/;
    const numeroInteiroRegex = /^\d+$/;
    const anoRegex = /^\d{4}$/;

    const anoAtual = new Date().getFullYear();

    if (!nome) {
        alert("Preencha o nome!");
        document.getElementById("forms_nome").focus();
        return false;
    }

    if (!email) {
        alert("Preencha o email!");
        document.getElementById("forms_email").focus();
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Formato de email inválido! Verifique o email digitado.");
        document.getElementById("forms_email").focus();
        return false;
    }

    if (!tel) {
        alert("Preencha o telefone!");
        document.getElementById("forms_tel").focus();
        return false;
    }
    let telDigitos = tel.replace(/\D/g, '');
    if (!telDigitosRegex.test(telDigitos)) {
        alert("Formato de telefone inválido! Deve conter 10 ou 11 dígitos (Ex: 47999998888 ou 4733334444).");
        document.getElementById("forms_tel").focus();
        return false;
    }

    if (!idadeStr) {
        alert("Preencha a idade!");
        document.getElementById("forms_idade").focus();
        return false;
    }
    if (!numeroInteiroRegex.test(idadeStr)) {
        alert("Idade deve ser um número inteiro!");
        document.getElementById("forms_idade").focus();
        return false;
    }
    let idade = parseInt(idadeStr, 10);
    if (idade < 18 || idade > 120) {
        alert("Idade inválida! Informe uma idade entre 18 e 120 anos.");
        document.getElementById("forms_idade").focus();
        return false;
    }

    if (!pais) {
        alert("Selecione o país!");
        document.getElementById("forms_pais").focus();
        return false;
    }

    if (!cidade) {
        alert("Preencha a cidade!");
        document.getElementById("forms_cidade").focus();
        return false;
    }

    if (!insta) {
        alert("Preencha o Instagram!");
        document.getElementById("forms_instagram").focus();
        return false;
    }

    if (!primeiroCtt) {
        alert("Selecione a data para primeiro contato!");
        document.getElementById("forms_data").focus();
        return false;
    }
    let selectedDate = new Date(primeiroCtt + "T00:00:00");
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
        alert("A data para primeiro contato não pode ser no passado.");
        document.getElementById("forms_data").focus();
        return false;
    }

    if (!horarioPref) {
        alert("Selecione o horário preferencial!");
        document.getElementById("forms_horario").focus();
        return false;
    }

    if (!visita) {
        alert("Informe se deseja agendar uma visita!");
        document.getElementById("forms_visita").focus();
        return false;
    }

    if (!metodoCtt) {
        alert("Selecione o método de contato preferido!");
        document.getElementById("forms_metodo").focus();
        return false;
    }

    if (!modelos || modelos.length === 0) {
        alert("Selecione o(s) modelo(s) de interesse!");
        document.getElementById("forms_modelo").focus();
        return false;
    }

    if (!modeloEspec) {
        alert("Especifique o modelo desejado!");
        document.getElementById("forms_pesquisa_modelo").focus();
        return false;
    }

    if (!condicao) {
        alert("Selecione a condição do veículo!");
        document.getElementById("forms_condicao").focus();
        return false;
    }

    if (!corExt) {
        alert("Preencha a cor externa desejada!");
        document.getElementById("forms_corExt").focus();
        return false;
    }

    if (!corInt) {
        alert("Preencha a cor interna desejada!");
        document.getElementById("forms_corInt").focus();
        return false;
    }

    if (!interesse) {
        alert("Descreva seu principal interesse no veículo!");
        document.getElementById("forms_interesse").focus();
        return false;
    }

    if (!estimadoCompra) {
        alert("Selecione o mês estimado para compra!");
        document.getElementById("forms_mesCompra").focus();
        return false;
    }

    if (!semanaTest) {
        alert("Selecione a melhor semana para test-drive!");
        document.getElementById("forms_semanaTest").focus();
        return false;
    }

    if (!possuiu) {
        alert("Informe se já possuiu um veículo da marca!");
        document.getElementById("forms_possuiu").focus();
        return false;
    }

    if (!fotoInput || !fotoInput.files || fotoInput.files.length === 0) {
        alert("Selecione um arquivo de foto!");
        fotoInput.focus();
        return false;
    }
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedImageTypes.includes(fotoInput.files[0].type)) {
        alert("Tipo de arquivo inválido! Por favor, envie uma imagem (JPG, PNG, GIF, WebP).");
        fotoInput.focus();
        return false;
    }

    if (!finalidade) {
        alert("Informe a finalidade de uso do veículo!");
        document.getElementById("forms_finalidade").focus();
        return false;
    }

    if (!financiamento) {
        alert("Informe se necessita de financiamento!");
        document.getElementById("forms_financiamento").focus();
        return false;
    }

    if (!possuiTroca) {
        alert("Informe se possui veículo para troca!");
        document.getElementById("forms_troca").focus();
        return false;
    }

    if (possuiTroca.toLowerCase() === 'sim') {
        if (!marcaTroca) {
            alert("Preencha a marca do veículo de troca!");
            document.getElementById("forms_marcaTroca").focus();
            return false;
        }

        if (!anoTrocaStr) {
            alert("Preencha o ano do veículo de troca!");
            document.getElementById("forms_anoTroca").focus();
            return false;
        }
        if (!anoRegex.test(anoTrocaStr)) {
            alert("Ano do veículo de troca inválido! Use 4 dígitos (ex: 2015).");
            document.getElementById("forms_anoTroca").focus();
            return false;
        }
        let anoTroca = parseInt(anoTrocaStr, 10);
        if (anoTroca < 1950 || anoTroca > anoAtual) {
            alert(`Ano do veículo de troca inválido! Deve ser entre 1950 e ${anoAtual}.`);
            document.getElementById("forms_anoTroca").focus();
            return false;
        }

        if (!kmTrocaStr) {
            alert("Preencha a quilometragem do veículo de troca!");
            document.getElementById("forms_Km").focus();
            return false;
        }
        if (!numeroInteiroRegex.test(kmTrocaStr)) {
            alert("Quilometragem deve ser um número inteiro (sem pontos ou vírgulas)!");
            document.getElementById("forms_Km").focus();
            return false;
        }
        let kmTroca = parseInt(kmTrocaStr, 10);
        if (kmTroca < 0) {
            alert("Quilometragem não pode ser negativa!");
            document.getElementById("forms_Km").focus();
            return false;
        }
    }

    if (!duvidas) {
        alert("Preencha o campo de dúvidas!");
        document.getElementById("forms_duvida").focus();
        return false;
    }

    if (!notificacoes) {
        alert("Indique se aceita ou não receber notificações!");
        return false;
    }

    if (!lgpdCheckbox || !lgpdCheckbox.checked) {
        alert("Você deve ler e aceitar os termos da LGPD para continuar!");
        lgpdCheckbox.focus();
        return false;
    }

    alert("Validação concluída com sucesso.");
    return true;
}