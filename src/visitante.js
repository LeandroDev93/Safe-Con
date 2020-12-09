class Visitante {
    constructor(id, nome, parentesco, idade, documento) {
        this.id = id;
        this.nome = nome;
        this.parentesco = parentesco;
        this.idade = idade;
        this.documento = documento;
    }

    pegaVisitante(){
        return `
        <div class="col-md-4">
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${this.nome}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <p class="card-text">${this.parentesco}</p>
                    <p class="card-text">${this.idade}</p>
                    <p class="card-text">${this.documento}</p>
                    <a href="#" class="card-link" onclick="excluir(${this.id})">Excluir</a>
                    <a href="#" onclick="editar(${this.id})" class="card-link" data-toggle="modal" data-target="#staticBackdrop">Editar</a>
                </div>
            </div>
        </div>
    `
}

}

export default Visitante;