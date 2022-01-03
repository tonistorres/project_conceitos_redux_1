// declarando referencias de constantes usadas no HTML
const btnDecrement = document.getElementById("decrement");
const btnIncrement = document.getElementById("increment");
const btnIncremet10 = document.getElementById("incrementBy10");
const resultCount =document.getElementById("value");
const infoMensagem=document.getElementById("user-experience");
const btnAperte=document.getElementById("btn-aperte");
// Capturando Componnente HTML para thema 
const containerDescribeProject=document.querySelector('.container-describe-project');


//PASSO 3- Criaremos um reducer que será responsável pelo controle
// de atualização do estado no store da nossa aplicação. O  reducer
// é uma função que recebe como parâmetro um state e uma action é
// onde irá conter a regra de negócio da aplicação que irá fazer as
// alterações necessárias no nosso estado global.


const decrement = "DECREMENT";
const increment = "INCREMENT";
const increment10 = "INCREMENT10";
const changeTheme ="CHANGE_THEME";


const ESTADO_INICIAL={
  value:0,
  mensagem:'Redux:Estado inicial ZERO',
  theme:'dark'  
}


function counteReducer(state = ESTADO_INICIAL, action) {
  
  switch (action.type) {
    
    case decrement:
      return {
        ...state,
        value:state.value - action.value,
        mensagem:state.mensagem='Redux:Estado decrementado em -1'
      };
    case increment:
      return {
        ...state,
        value:state.value + action.value,
        mensagem:state.mensagem='Redux:Estado decrementado em +1'
      };
    case increment10:
        return {
          ...state,
          value:state.value + action.value,
          mensagem:state.mensagem='Redux:Estado decrementado em +10'
        };
    case changeTheme:
      return{
        ...state,
        //alterar o tema 
        theme:state.theme ==='light' ? 'dark' : 'light',
        mensagem:state.theme==='light' ? `Redux:O Tema está🧛‍♂️🧛‍♂️🧛‍♂️🧛‍♂️🧛‍♂️🧛‍♂️` : `Redux:O Tema está 😁😁😁😁😁`
      }     
    default:
      return state;
  }
}

//PASSO 1- Temos um objeto do tipo Redux que invoca uma função nativa
// createStore() que cria a loja que precisamos para guardar o
// estado global da nossa aplicação.
// essa função retorna um objeto que irei atribuir à uma constante
const store = Redux.createStore(
  counteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// PASSO 2 - Criar as Acitons que serão 
// desparadas pelo dispatch
// Quando falo criar as actions estou falando de criar à regra de negócio 
// que serão disparadas pelo despatch no reducer que irá efetuar essa modificação 
// no store
const actionDecrement ={
    type:decrement,
    value:1,
    mensagem:"Redux:State atualizado em -1"
}
const actionIncrement ={
    type:increment,
    value:1,
    mensagem:"Redux:State atualizado em +1"
}
const actionIncrement10 ={
    type:increment10,
    value:10,
    mensagem:"Redux:State atualizado em +10"
}

const actionTheme ={
  type:changeTheme,
  mensagem:'Redux:Parabéns!!😀😀 Tema Alterado com sucesso!!!🎉🎉🎉🎉 ',
  theme:ESTADO_INICIAL.theme

}
//colocar escutadores aos botões
btnDecrement.addEventListener("click", () => {
  //PASSO 3- agora eu vou disparar um pedido para DECREMENTAR meu valor
  // dentro da store
  store.dispatch(actionDecrement);
  infoMensagem.style.background="red";
  infoMensagem.style.color="white";
  infoMensagem.style.paddingTop="10px";
  infoMensagem.style.paddingBottom="10px";
  infoMensagem.style.paddingLeft="10px";
  infoMensagem.style.paddingRight="10px";
});

btnIncrement.addEventListener("click", () => {
  //PASSO 3 - agora eu vou disparar um pedido para INCREMENTAR meu valor
  // dentro da store
  store.dispatch(actionIncrement);
  infoMensagem.style.background="#3b5323";
  infoMensagem.style.color="white";
  infoMensagem.style.paddingTop="10px";
  infoMensagem.style.paddingBottom="10px";
  infoMensagem.style.paddingLeft="10px";
  infoMensagem.style.paddingRight="10px";
});

btnIncremet10.addEventListener("click", () => {
  //PASSO 3- agora eu vou disparar um pedido para INCREMENTAR meu valor
  // dentro da store
  store.dispatch(actionIncrement10);
  infoMensagem.style.background="#304635";
  infoMensagem.style.color="white";
  infoMensagem.style.paddingTop="10px";
  infoMensagem.style.paddingBottom="10px";
  infoMensagem.style.paddingLeft="10px";
  infoMensagem.style.paddingRight="10px";

});


btnAperte.addEventListener('click', () => {
store.dispatch(actionTheme);
infoMensagem.style.background="#EE82E7";
infoMensagem.style.color="white";
infoMensagem.style.paddingTop="10px";
infoMensagem.style.paddingBottom="10px";
infoMensagem.style.paddingLeft="10px";
infoMensagem.style.paddingRight="10px";

});


//PASSO 4 - SubScribe
store.subscribe(() => {
  const {value,mensagem,theme}=store.getState();
console.log('qual tema selecionado?:',theme);
  resultCount.innerText=value;
  infoMensagem.innerText=mensagem;

  //Capturando componente html para mudar tema 
  document.body.className=theme;
  // containerDescribeProject.className=theme;
})








