function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um sintoma!</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados ="";
    let titulo ="";
    let descricao ="";
    let tags ="";


    // Itera sobre os dados e constrói o HTML para cada item
    for (let dado of dados) {

           titulo = dado.titulo.toLocaleLowerCase()
           descricao = dado.descricao.toLocaleLowerCase()
           tags = dado.tags.toLocaleLowerCase()

        
            if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ){
               //cria um novo elemento
                resultados += `
                <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações<a/>
                </div>
                    `;

            }
        
    }
        if(!resultados){
            resultados = "<p>Nada foi encontrado. Você pode encontrar mais informações em <a href='https://www.google.com.br' target='_blank'>Google</a></p>"
        }
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}