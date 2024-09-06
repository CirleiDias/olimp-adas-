function pesquisar() {
  // Seleciona o elemento HTML onde os resultados serão exibidos
  const section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa e converte para minúsculo
  const CampoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Se o campo de pesquisa estiver vazio
  if (CampoPesquisa === "") {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>";
    return;
  }

  // Inicializa uma string vazia para acumular o HTML dos resultados
  let resultados = "";

  // Itera sobre cada item da lista de dados
  for (let dado of dados) {
    const titulo = dado.titulo.toLowerCase();
    const descrição = dado.descrição.toLowerCase();
    let tagsStr = ""; // Inicializa uma string para as tags

    // Verifica se tags é um array e concatena as tags em uma string
    if (Array.isArray(dado.tags)) {
      tagsStr = dado.tags.map(tag => tag.toLowerCase()).join(', ');
    }

    if (titulo.includes(CampoPesquisa) ||
        descrição.includes(CampoPesquisa) ||
        tagsStr.includes(CampoPesquisa)) {
      // Cria novo elemento
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${titulo}</a>
          </h2>
          <p class="descrição-meta">${descrição}</p>
          <p>Tags: ${tagsStr}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }
  if (!resultados){
    resultados = "<p>Nada foi encontrado</p>"
  }

  // Atualiza o conteúdo HTML do elemento section com os resultados
  section.innerHTML = resultados;
}