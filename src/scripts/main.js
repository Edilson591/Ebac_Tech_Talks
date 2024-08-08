AOS.init();


const dataDoEvento = new Date("Sep 08, 2024 09:00:00")
const timeStampDoEvento = dataDoEvento.getTime()



const contaAsHoras = setInterval( () => {
    const agora = new Date();
    const timeStampDoAtual = agora.getTime();
    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundoEmMs = 1000;

    const distanciaEvento = timeStampDoEvento - timeStampDoAtual;
    const diasAteEvento = Math.floor(distanciaEvento / diasEmMs);
    const horasEvent = Math.floor((distanciaEvento % diasEmMs) / horasEmMs);
    const minutosEvent = Math.floor((distanciaEvento % diasEmMs) / minutosEmMs % 60);
    const segundosEvent = Math.floor((distanciaEvento % minutosEmMs) / segundoEmMs);


    const results = document.getElementById("results")
    if(segundosEvent > 0) {
        results.innerHTML = `${diasAteEvento}d ${horasEvent}h ${minutosEvent}m ${segundosEvent}s`;

    }else {
        clearInterval(contaAsHoras);
        results.innerHTML = 'Evento Expirado';
    }



},1000)

