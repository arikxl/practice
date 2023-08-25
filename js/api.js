


async function getData() {
    try {
        const response = await fetch("https://swapi.dev/api/films/1/");
        const data = await response.json();
        console.log(data); 
        document.getElementById('img').setAttribute("src", data.url);
    } catch (error) {
        console.error(error);
    }

}

getData()
