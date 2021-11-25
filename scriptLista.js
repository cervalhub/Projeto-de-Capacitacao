class Tarefa{

    constructor(){
        this.arrayTarefas = [];
    }

    enviar(){
    let tarefa =  this.lerDados();

 if(this.validaCampos(tarefa)){
    this.adicionar(tarefa);
 }   
    
    this.listaTabela();
    }

    listaTabela(){
        let tbdodyLista = document.getElementById('tbdodyLista');
        tbody.innerText = '';
    

        for(let i = 0; i < this.arrayTarefas.length; i++){
            
            let tr = tbdodyLista.insertRow();

            let td_tarefas = tr.insertCell()
            let td_prioridade = tr.insertCell()
            let td_data = tr.insertCell()
            let td_check = tr.insertCell()

            td_tarefas.innerText = this.arrayTarefas[i].nomeTarefa;
            td_prioridade.innerText = this.arrayTarefas[i].prioridade;
            td_data.innerText = this.arrayTarefas[i].data;
            td_check.innerHTML = "<input type='checkbox'></input>";

        }

    }

    validaCampos(tarefa) {
        let msg = '';
        if(tarefa.nomeTarefa == ''){

            msg += '- Por favor, informe a tarefa! \n'

        }
        if(tarefa.prioridade == 0){
            msg += '- Por favor, informe a prioridade! \n'
        }
        if(tarefa.data == ''){
            msg += '- Por favor, informe a data! \n'
        }
        if(msg != ''){
            alert(msg);
            return false
        }
        return true;
    }

    adicionar(tarefa){
        this.arrayTarefas.push(tarefa);
    }

    lerDados(){
        let tarefa =  {}

      tarefa.nomeTarefa = document.getElementById('tarefas').value;
      tarefa.prioridade = document.getElementById('prioridade').value;
      tarefa.data = document.getElementById('dataDois').value
    


        return tarefa;
    }
}

var tarefa = new Tarefa();