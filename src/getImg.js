async function getWorkImg(){
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
    let section = document.getElementById('mainSection')
    await fetch("http://146.56.199.136:8080/api/picture?page=0&page_size=100", requestOptions)
    .then(response => response.json())
    .then(result => {
        for (let i of result["images"]){
            let div = document.createElement(`div`)
            let img = document.createElement("img")
            img.src = "http://" + i['Url']
            div.appendChild(img);
            section.appendChild(div);
        }
    })
    .catch(error => console.log('error', error));
}

async function getPGImg(){
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    let section = document.getElementById('mainSection')
    await fetch("http://146.56.199.136:8080/api/picture?page=0&page_size=100&tag=playground", requestOptions)
        .then(response => response.json())
        .then(result => {
            for (let i of result["images"]){
                let div = document.createElement(`div`)
                let img = document.createElement("img")
                img.src = "http://" + i['Url']
                div.appendChild(img);
                section.appendChild(div);
            }
        })
        .catch(error => console.log('error', error));
}

