const responseInfo = function(res) {
    console.log(res)
    console.log("Функція responseInfo  відпрацювала успішно після відповіді з бекенду")
}


fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json()).then(responseInfo)