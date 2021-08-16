class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada. Seus métodos são estáticos!')
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
        throw new Error('O formato de data está errado, mantenha o formato aaaa-mm-dd.')
        return new Date(...texto.split('-').map((item, index) => item - index % 2))

    }
}