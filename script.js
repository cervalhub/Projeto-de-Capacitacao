var requestOptions = {method: 'GET',redirect: 'follow'};
fetch("https://dog-api.kinduff.com/api/facts", requestOptions)
.then(response => response.json()).
then(result => {
    frase.fraseApi = document.getElementById('frase').value;
})
.catch(error => console.log('error', error));

