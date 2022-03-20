
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
            namex("no existe")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            let nombre = data.species.name;
            namex(nombre);
            let pid = data.id;
            pokId(pid);
            let tipo = data.types[0].type.name;
            tipoPoke(tipo);
            console.log(tipo)
            let altura = data.height;
            altPoke(altura);
            let peso = data.weight;
            pesPoke(peso);

            let base_stath = data.stats[0].base_stat;
            hstatsx(base_stath)
            let heffort = data.stats[0].effort;
            hstatex(heffort)
            let base_stata = data.stats[1].base_stat;
            astatsx(base_stata)
            let aeffort = data.stats[1].effort;
            stataex(aeffort)
            let base_statd = data.stats[2].base_stat;
            dstatsx(base_statd)
            let deffort = data.stats[2].effort;
            statdex(deffort)

            let base_statas = data.stats[3].base_stat;
            sastatsx(base_statas)
            let effortsa = data.stats[3].effort;
            statsaex(effortsa)

            let base_statsd = data.stats[4].base_stat;
            sdstatsx(base_statsd)
            let sdeffort = data.stats[4].effort;
            statsdex(sdeffort)

            let base_stats = data.stats[5].base_stat;
            sstatsx(base_stats)
            let efforts = data.stats[5].effort;
            statsex(efforts)


            
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const namex = (url) => {
    const nombrex = document.getElementById("nombre");
    nombrex.innerHTML=url;
} 
const pokId = (url) => {
    const pokeId = document.getElementById("pid");
    pokeId.innerHTML=url;
}
const tipoPoke = (url) => {
    const tiPok = document.getElementById("tipo");
    tiPok.innerHTML=url;
}
const altPoke = (url) => {
    const aPoke = document.getElementById("altura");
    aPoke.innerHTML=("Altura:"+url);
}
const pesPoke = (url) => {
    const pPoke = document.getElementById("peso");
    pPoke.innerHTML=("Peso:"+url);
}

const hstatsx = (url) =>{
    const stath = document.getElementById("stath");
    stath.innerHTML=url;
}
const hstatex = (url) =>{
    const stathe = document.getElementById("state");
    stathe.innerHTML=url;
}

const astatsx = (url) =>{
    const stata = document.getElementById("stata");
    stata.innerHTML=url;
}
const stataex = (url) =>{
    const statae = document.getElementById("statae");
    statae.innerHTML=url;
}

const dstatsx = (url) =>{
    const statd = document.getElementById("statd");
    statd.innerHTML=url;
}
const statdex = (url) =>{
    const statde = document.getElementById("statde");
    statde.innerHTML=url;
}

const sastatsx = (url) =>{
    const statsa = document.getElementById("statsa");
    statsa.innerHTML=url;
}
const statsaex = (url) =>{
    const statsae = document.getElementById("statsae");
    statsae.innerHTML=url;
}

const sdstatsx = (url) =>{
    const statsd = document.getElementById("statsd");
    statsd.innerHTML=url;
}
const statsdex = (url) =>{
    const statsde = document.getElementById("statsde");
    statsde.innerHTML=url;
}

const sstatsx = (url) =>{
    const statdss = document.getElementById("statdss");
    statdss.innerHTML=url;
}
const statsex = (url) =>{
    const statdsse = document.getElementById("statdsse");
    statdsse.innerHTML=url;
}

