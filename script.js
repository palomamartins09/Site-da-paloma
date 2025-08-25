document.addEventListener('DOMContentLoaded', function){
    const botaoDeAcessiblilidade = document.getAnimations('botao-acessiblilidade')
    const botaoDeAcessiblilidade = document.getElementById('opcoes-acessiblilidade')

    botaoDeAcessiblilidade.addEventListener('click, function'(){
        botaoDeAcessiblilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessiblilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoAcessiblilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessiblilidade.setAtrribute('aria-expanded', !botaoSelecionado)
    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte'); 
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    const alternaContraste = document.getElementById('alterna-contraste')

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click, function'(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = '${tamanhoAtualFonte}rem'
    })

diminuiFonteBotao.addEventListener('click, function'(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'
})

alternaContraste.addEventListener('lick', function())
document.body.classList.toggle('alto-constrate')
})

    })

    ScrollReveal().reveal('#inicio', { delay: 500});
    ScrollReveal().reveal('#bicho-preguiça', { delay: 500});
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contatob nv,'{ delay: 500});