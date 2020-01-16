class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputData = document.querySelector('#quantidade');
        this._inputData = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        console.log(negociacao);
    }
}
