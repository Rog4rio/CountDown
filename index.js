'use strict'

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60 ; //Divide por 60 e o resto da divisão armazena na quantidade de segundos.
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60) ; //Transformar segundos em minutos. O método Math.floor pega somente os números inteiros.
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60) ) ; // Conseguir a horas.
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));//Transformar o tempo em dias.

    segundos.textContent = formatarDigito(qtdSegundos); //Linkar os segundos para a div.
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id); // parar a contagem do set interval.
    const contar = () => {
        if(tempo === 0) {
            pararContagem();
        }
        atualizar(tempo);
        tempo--;} //Diminuir o tempo.
    const id = setInterval(contar, 1000); // Recebe um callback(uma função) e o tempo de execução.
}

const tempoRestante = () => {
    // 1 de janeiro de 1970 é 1 ms (data de referência), ou seja, ele vai contar quanto milissegundo tem de 1 de janeiro de 1970 até a data do evento.
    const dataEvento = new Date('2024-01-25 20:00:00');
    const hoje = Date.now(); //Data de hoje.
    return Math.floor((dataEvento - hoje) / 1000); // vira ms e segundos
}

contagemRegressiva(tempoRestante());

// Para o JS toda data é em milissegundos.