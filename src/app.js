import ListaDeVisitantes from "./listaVisitantes";
import Login from "./login";
import Pin from "./pin";


class App {
    constructor() {
        this.listaDeVisitantes = new ListaDeVisitantes();
        this.login = new Login();
        this.pin = new Pin();
        this.nome = document.getElementById("nome");
        this.parentesco = document.getElementById("parentesco");
        this.idade = document.getElementById("idade");
        this.documento = document.getElementById("documento");
        this.email = document.getElementById("email");
        this.senha = document.getElementById("senha");
        this.botaoCadastrar = document.getElementById("botaocadastrar");
        this.botaoPin = document.getElementById("botaoPin");
        this.botaoEntrar = document.getElementById("entrar");
        this.botaoCancelar = document.getElementById("botaocancelar")



        this.registrarEventos();
    }
    registrarEventos() {
        this.botaoCadastrar.onclick = () => {
            this.cadastrarVisitante();           

        }
        this.botaoEntrar.onclick = () => {
            this.logar();
        }
        this.botaoCancelar.onclick = () => {
            this.login.logout();
            this.email.value = "";
            this.senha.value = "";
        }
        this.botaoPin.onclick = () => {
            this.gerarPin();
            this.nome.value = "";
            this.parentesco.value = "";
            this.idade.value = "";
            this.documento.value = "";
        }

    }

    logar() {

        this.login.login(this.email.value, this.senha.value);
    }
    mostrarAlert(value) {
        alert(value);
    }
    cadastrarVisitante() {
        const nome = this.nome.value;
        const parentesco = this.parentesco.value;
        const idade = this.idade.value;
        const documento = this.documento.value;

        this.listaDeVisitantes.cadastrar(nome, parentesco, idade, documento);
        this.mostrarAlert("Visitante cadastrado com sucesso!");

    }
    

    

    gerarPin() {
        this.mostrarAlert("A senha gerada é: " + this.pin.randomInt());
    }

}

new App();