function mostrarInformacoes(candidato) {
    // Obter elementos da seção de informações
    const informacoes = document.getElementById("informacoes");
    const foto = document.getElementById("candidato-foto");
    const nome = document.getElementById("candidato-nome");
    const descricao = document.getElementById("candidato-descricao");

    // Obter dados do candidato clicado
    const candidatoFoto = candidato.querySelector("img").src;
    const candidatoNome = candidato.querySelector("p").textContent;
    const candidatoDescricao = "Educação de Qualidade: Melhorar escolas públicas, investir na capacitação de professores e garantir igualdade no acesso à educação.<br> Saúde para Todos: Ampliar o acesso a serviços de saúde, promover prevenção de doenças e redução de custos médicos.<br> Desenvolvimento Sustentável: Apoiar energia limpa, políticas de reciclagem e práticas agrícolas sustentáveis.<br> Segurança Pública: Reforçar a presença policial, prevenção ao crime e combate ao tráfico de drogas.<br> Empregos e Economia: Estimular crescimento econômico, empreendedorismo, parcerias público-privadas e apoio ao comércio local.<br> João se compromete a ser transparente, ouvir os eleitores e trabalhar para um futuro melhor.";

    // Atualizar elementos de informações
    foto.src = candidatoFoto;
    nome.textContent = candidatoNome;
    descricao.innerHTML = candidatoDescricao;

    // Mostrar informações com animação de fade
    informacoes.style.display = "block";
    informacoes.style.opacity = 0;
    let opacity = 0;
    const animationInterval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            informacoes.style.opacity = opacity;
        } else {
            clearInterval(animationInterval);
        }
    }, 100);
}
