async function getPGImg(){
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    let section = document.getElementById('pgimglist');
    await fetch("http://146.56.199.136:8080/api/picture?page=0&page_size=100&tag=playground", requestOptions)
        .then(response => response.json())
        .then(result => {
            for (let i of result[`images`]){
                let div = document.createElement(`div`);
                div.className = `item`;
                let img = document.createElement(`img`);
                img.src = `http://${i[`Url`]}`;
                img.className = `img`;
                let check = document.createElement(`input`);
                check.type = `checkbox`;
                check.name = `pgimgcheck`;
                check.value = i[`ID`];
                div.appendChild(img);
                div.appendChild(check);
                section.appendChild(div);
            }
        })
        .catch(error => console.log('error', error));
}

async function getWorkImg(){
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    let section = document.getElementById('workimglist');
    await fetch("http://146.56.199.136:8080/api/picture?page=0&page_size=100", requestOptions)
        .then(response => response.json())
        .then(result => {
            //用result替换images
            for (let i of result[`images`]){
                let div = document.createElement(`div`);
                div.className = `item`;
                let img = document.createElement(`img`);
                img.src = `http://${i[`Url`]}`;
                img.className = `img`;
                let check = document.createElement(`input`);
                check.type = `checkbox`;
                check.name = `workimgcheck`;
                check.value = i[`ID`];
                div.appendChild(img);
                div.appendChild(check);
                section.appendChild(div);
            }
        })
        .catch(error => console.log('error', error));
 }
 async function getImgs(){
     await getWorkImg();
     await getPGImg();
 }
async function uploadWork(event){
    const formData = new FormData();
    formData.append("token", "123456");
    formData.append('file', event.target.files[0]);
    await fetch('http://146.56.199.136:8080/api/picture', {
        method: 'post',
        body: formData
    }).then(response => response.json())
        .then((data) => {
            console.log(data);
        });
    location.reload();
}

async function uploadPg(event) {
    const formData = new FormData();
    formData.append(`tag`,`playground`);
    formData.append("token", "123456");
    formData.append('file', event.target.files[0]);
    await fetch('http://146.56.199.136:8080/api/picture', {
        method: 'post',
        body: formData
    }).then(response => response.json())
        .then((data) => {
            console.log(data);
        });
    location.reload();
}

async function deleteImgs(target){
    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
    };
    for(let eachnode of document.getElementsByName(target)){
        if(eachnode.checked){
            await fetch(`http://146.56.199.136:8080/api/picture/${eachnode.value}`,requestOptions).then(res=> {
            }).catch(err=> {
                console.log(err);
            })
        }
    }
    location.reload();
}