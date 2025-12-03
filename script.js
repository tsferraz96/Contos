// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    const campoPesquisa = document.getElementById('campoPesquisa');
    const btnPesquisar = document.getElementById('btnPesquisar');
    const botoesMenu = document.querySelectorAll('.menu');
    const livros = document.querySelectorAll('.livro'); 

    function filtrarLivros() {
        const termoBusca = campoPesquisa.value.trim().toLowerCase();

        livros.forEach(livro => {
            const tituloLivro = (livro.getAttribute('data-title') || '').toLowerCase();
            
            if (tituloLivro.includes(termoBusca)) {
                livro.style.display = 'block'; 
            } else {
                livro.style.display = 'none';
            }
        });
    }

    btnPesquisar.addEventListener('click', filtrarLivros);

    campoPesquisa.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            filtrarLivros();
        }
    });

    // Filtro por letra inicial (A-Z)
    botoesMenu.forEach(botao => {
        botao.addEventListener('click', function() {
            const letra = this.textContent.trim().toLowerCase();

            livros.forEach(livro => {
                const tituloLivro = (livro.getAttribute('data-title') || '').toLowerCase();

                if (tituloLivro.startsWith(letra)) {
                    livro.style.display = 'block';
                } else {
                    livro.style.display = 'none';
                }
            });
        });
    });

});
