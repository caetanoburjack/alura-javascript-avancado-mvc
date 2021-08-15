class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }


    adiciona(event) {
        event.preventDefault();
        console.log(typeof (this._inputData.value))
        console.log(this._inputData.value)
        let data = new Date(...this._inputData.value.split('-').map((item, index) => item - index % 2))
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negociacao);
        let lista1 = ['banana', 'laranja', 'mamão'];
        let lista2 = ['caju', 'tangerina', 'abacaxi'];

        lista1.push(lista2);
        console.log(lista1);
    }
}