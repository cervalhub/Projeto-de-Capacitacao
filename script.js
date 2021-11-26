class Index{

    pegarMensagem(){
        var requestOptions = {method: 'GET',redirect: 'follow'};
        let frase = document.getElementById('fraseCachorro');
        
        fetch("https://dog-api.kinduff.com/api/facts", requestOptions)
        .then(response => response.json()).
        then(result => {
           frase.innerHTML = `<p>${result.facts}</p>`
        })
        .catch(error => console.log('error', error));
    }

  

    pegarNome(){
        var requestOptions = {method: 'GET',redirect: 'follow'};
        let label_nomeUsuario = document.getElementById('label_nomeUsuario');
        let imagemPaula = document.getElementById('imagemPaula')
        
        fetch("https://randomuser.me/api/", requestOptions)
        .then(response => response.json()).
        then(result => {
          label_nomeUsuario.innerHTML = `Olá, <span><b>${result.results[0].name.first}</b></span>`
          imagemPaula.innerHTML = `<img src="${result.results[0].picture.thumbnail}" alt="" style:"border-radius:50%">`
         console.log(result)
        })
        .catch(error => console.log('error', error));
    }



    carregarPagina(){
        this.pegarMensagem();
        this.pegarNome();

    }

    pegarFraseYoda(){
        var requestOptions = {method: 'POST',redirect: 'follow'};
        let frase = document.getElementById('fraseCachorro');
        
        fetch("https://funtranslations.com/api/yoda", requestOptions)
        .then(response => response.json()).
        then(result => {
           frase.innerHTML = `<p>${result.facts}</p>`
        })
        .catch(error => console.log('error', error));
    }

    }




var index = new Index();


