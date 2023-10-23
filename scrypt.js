
// obj filme
class filme{
        //função construtora
        constructor( nome,duracao,nota,strem){
                this.nome = nome;
                this.duracao=duracao;
                this.nota=nota;
                this.strem= strem;
        }


}
let movie=[];
const movie_1 = new filme("verdade","1:40",10,"youtube");
const movie_2 = new filme("vingadores","2:00",8,"disney");
const movie_3 = new filme("avatar","3:00",10,"disney");



movie[0]= movie_1;
movie[1]= movie_2;
movie[2]= movie_3;

//criação de filmes 

function MakeMovie(){
        let show = document.querySelector(".CadastraFilme")
        show.style.display= 'block';
        
}

//pesquisa

function search() {

        const conteudo = document.getElementById("textinput").value.toLowerCase();
        let achou =0;
        let found = new filme();
       //procurando o filme--------------------------------------------
        for (let i = 0; i < movie.length; i++) {
            if (conteudo === movie[i].nome.toLowerCase()) {
                found = movie[i];
                achou = 1;
                break;
              }
            
        }
        //--------------------------------------------------------------
        
                console.log(found);
                let show = document.querySelector(".ShowMovie");  
                let infos=[2];
                let info = document.querySelector("#info");
                
                infos[0]=document.querySelector("#first");
                infos[1]=document.querySelector("#second");
                infos[2]=document.querySelector("#third");
                
                        
                        show.style.display = 'block';

                        if(achou == 1){
                        
                                info.textContent = found.nome;
                                infos[0].textContent = 'duração: '+found.duracao;
                                infos[1].textContent ='Nota do filme: '+found.nota;
                                infos[2].textContent =' strem: '+ found.strem;
                        }else{
           
                                info.textContent = 'não encontrado';
                                infos[0].textContent ="";
                                infos[1].textContent ="";
                                infos[2].textContent ="";
                        

                        }
                        document.getElementById("textinput").value = ""; //limpando a barra de pesquisa
        
}
    
function ClosePage(classe_1,classe_2){
        let show = document.querySelector('.'+classe_1);  
       const close = document.querySelector( '.'+classe_2);
        show.style.display= 'none';

      
}

function criar(){
        let dados=[3];
       

        dados[0]=document.querySelector("#primeiro")
        dados[1]=document.querySelector("#segundo")
        dados[2]=document.querySelector("#terceiro")
        dados[3]=document.querySelector("#quarto")
        
        let obj= new filme(dados[0].value,dados[1].value,dados[2].value,dados[3].value);
        movie.push(obj);
              
        ClosePage('CadastraFilme','criar_2');
        window.alert("filme cadastrado");
        console.log(movie);

       
        document.querySelector("#primeiro").value= "";
        document.querySelector("#segundo").value="";
        document.querySelector("#terceiro").value="";
        document.querySelector("#quarto").value="";
}

