import { moradores } from "./moradores";


class Login {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    checkLoged() {
        const loged = localStorage.getItem("loged");
        if (loged) {
            document.getElementById("login").style.display = "none";
            document.getElementById("formulario").style.display = "flex";
        } else {
            document.getElementById("login").style.display = "flex";
            document.getElementById("formulario").style.display = "none";

        }
    };

    login(emailMorador, senhaMorador) {
        moradores.forEach(morador => {
            if (morador.email == emailMorador && morador.senha == senhaMorador) {
                localStorage.setItem("loged", morador.email);
            }
        })
        this.checkLoged();
    };



    logout() {
        localStorage.removeItem("loged");

        this.checkLoged();
    }

}

export default Login;