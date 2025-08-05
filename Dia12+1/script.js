const cors = require('cors');
function buscarPersonaje() {
    document.getElementById("resultados").innerHTML = ``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/a35226746c5f4db8e262e15fb8f53f1b/search/${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {


        try {
            const daticos = JSON.parse(xhr.responseText);

            console.log(daticos);

            if (daticos.results && daticos.results.length > 0) {
                for (let i = 0; i < daticos.results.length; i++) {
                    let division = document.getElementById("resultados");
                    division.innerHTML += `
                        <div class="card">
            <img src="${daticos["results"][i]["image"][i]["url"]}" alt="">
            <h3>${daticos["results"][i]["name"]}</h3>
            <p><strong>Status:</strong>${daticos["results"][i]["status"]}</p>
            <p><strong>Specie:</strong>${daticos["results"][i]["species"]}</p> 
                        `
                }
            }

        }
        catch (err) {
            console.log(err.message);
        }

    };
    xhr.send();
}