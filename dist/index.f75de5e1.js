AOS.init();
const dataDoEvento = new Date("Sep 08, 2024 09:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(()=>{
    const agora = new Date();
    const timeStampDoAtual = agora.getTime();
    const diasEmMs = 86400000;
    const horasEmMs = 3600000;
    const minutosEmMs = 60000;
    const segundoEmMs = 1000;
    const distanciaEvento = timeStampDoEvento - timeStampDoAtual;
    const diasAteEvento = Math.floor(distanciaEvento / diasEmMs);
    const horasEvent = Math.floor(distanciaEvento % diasEmMs / horasEmMs);
    const minutosEvent = Math.floor(distanciaEvento % diasEmMs / minutosEmMs % 60);
    const segundosEvent = Math.floor(distanciaEvento % minutosEmMs / segundoEmMs);
    const results = document.getElementById("results");
    if (segundosEvent > 0) results.innerHTML = `${diasAteEvento}d ${horasEvent}h ${minutosEvent}m ${segundosEvent}s`;
    else {
        clearInterval(contaAsHoras);
        results.innerHTML = "0d 0h 0m 0s";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
