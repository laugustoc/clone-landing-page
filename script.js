function voltar() {
    const botao = document.querySelector(".btn-subir");
    botao.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 1500
        });
    });
}

function makeFloatButton() {
    var el = document.querySelector('.btn-subir');

    if (document.documentElement.scrollTop > 100) {
        el.classList.add('fixedElement');
    }
    if (document.documentElement.scrollTop < 100) {
        el.classList.remove('fixedElement');
    }

}

window.addEventListener('scroll', makeFloatButton);




function salvarCadastro() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let idJogador = document.getElementById('idJogador').value;
    let clube = document.getElementById('clube').value;

    let novoCadastro = {
        nome: nome,
        email: email,
        telefone: telefone,
        idJogador: idJogador,
        clube: clube
    };

    let dados = lerDados();
    dados.cadastros.push(novoCadastro);
    salvaDados(dados);
}
let objDados = {};
function lerDados() {
    let strDados = localStorage.getItem('db');
    objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            cadastros: []
        };
        salvaDados(objDados);
    }
    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}


function validar() {

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let idJogador = document.getElementById('idJogador').value;
    let clube = document.getElementById('clube').value;



    if(nome == '' || email == '' || telefone == '' || idJogador == '' || clube == '') {
        const msgerro = document.querySelector('.teste');
        msgerro.style.display = "block"
        msgerro.innerText = "Digite corretamente os dados"
        setTimeout(() => { msgerro.setAttribute('style', 'display:none') }, 2000)

    }
    else {
        
        salvarCadastro();
        window.location.href = 'cadastros.html';
    }
}

