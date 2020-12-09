import Visitante from "./visitante";

class ListaDeVisitantes {
    constructor() {
        this.listaDeVisitantes = [];
    }

    cadastrar(nome, parentesco, idade, documento) {
        const visitante = new Visitante(
            this.proximoId(),
            nome,
            parentesco,
            idade,
            documento,
        );
        this.listaDeVisitantes.push(visitante);

        this.salvarDados();

    }

    proximoId() {
        let maior = 0;

        this.listaDeVisitantes.forEach(f => {
            maior = Math.max(maior, f.id);
        });
    
        return ++maior;  
    }

    salvarDados(lista) {
        localStorage.setItem("salvo", JSON.stringify(this.listaDeVisitantes));
    }

    pegarLista() {
        return this.listaDeVisitantes;
    }

    
}

export default ListaDeVisitantes;