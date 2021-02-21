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
            console.log(i)
            let img = document.createElement("img")
            img.src = "http://" + i['Url']
            section.appendChild(img)
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
    await fetch("http://146.56.199.136:8080/api/picture?page=0&page_size=100tag=playground", requestOptions)
        .then(response => response.json())
        .then(result => {
            for (let i of result["images"]){
                console.log(i)
                let img = document.createElement("img")
                img.src = "http://" + i['Url']
                section.appendChild(img)
            }
        })
        .catch(error => console.log('error', error));
}

async function getPGImgOnload(){
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    let section = document.getElementById('pgimglist')
    await fetch("http://146.56.199.136:8080/api/picture?page=0&page_size=100tag=playground", requestOptions)
        .then(response => response.json())
        .then(result => {
            for (let i of result["images"]){
                console.log(i)
                let img = document.createElement("img")
                img.src = "http://" + i['Url']
                section.appendChild(img)
            }
        })
        .catch(error => console.log('error', error));
}

async function getWorkImgOnload(){
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    let section = document.getElementById('workimglist')
    await fetch("http://146.56.199.136:8080/api/picture?page=0&page_size=100", requestOptions)
        .then(response => response.json())
        .then(result => {
            for (let i of result["images"]){
                console.log(i)
                let img = document.createElement("img")
                img.src = "http://" + i['Url']
                section.appendChild(img)
            }
        })
        .catch(error => console.log('error', error));
}


function upload(event) {
    const formData = new FormData();
    formData.append("token", "123456");
    formData.append('file', event.target.files[0]);
    fetch('http://146.56.199.136:8080/api/picture', {
      method: 'post',
      body: formData
      }).then(response => response.json())
      .then((data) => {
           console.log(data);
      });
     }