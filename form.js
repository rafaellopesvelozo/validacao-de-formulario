
//msg de alerta
let msgError = document.getElementById('msgError')
let msgSuccess = document.getElementById('msgSuccess')


//nome
let labelNome = document.getElementById('labelNome');
let nome = document.getElementById('name');
let validnome = false;

//usuário
let labelUsuario = document.getElementById('labelUsuario');
let usuario = document.getElementById('usuario');
let validusuario = false;

//senha
let labelSenha = document.getElementById('labelSenha');
let senha = document.getElementById('password');
let validsenha = false;

//confirmar senha
let labelConfirmarSenha = document.getElementById('labelConfirmarSenha');
let confirmarSenha = document.getElementById('confirm-password');
let validconfirmarSenha = false;



//evento nome
nome.addEventListener('keyup', ()=>{

    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: #FF4A4A');
        labelNome.innerHTML = '<strong>Nome *Insira no mínimo 2 caracteres.</strong>'
        validnome = false;
    
    }else{
        labelNome.innerHTML = '<strong>Nome</strong>'
        labelNome.setAttribute('style', 'color: black');
        validnome = true;
    }
})

//evento usuário
usuario.addEventListener('keyup', ()=>{

    if(usuario.value.length <= 2){
        labelUsuario.setAttribute('style', 'color: #FF4A4A');
        labelUsuario.innerHTML = '<strong>Usuário *Insira no mínimo 2 caracteres.</strong>'
        validusuario = false;

    }else{
        labelUsuario.innerHTML = '<strong>Usuário</strong>'
        labelUsuario.setAttribute('style', 'color: black');
        validusuario = true;

    }
})

//evento senha
senha.addEventListener('keyup', ()=>{

    if(senha.value.length <= 6){
        labelSenha.setAttribute('style', 'color: #FF4A4A');
        labelSenha.innerHTML = '<strong>Senha *Insira no mínimo 6 caracteres.</strong>'
        validsenha = false;
        
    }else{
        labelSenha.innerHTML = '<strong>Senha</strong>'
        labelSenha.setAttribute('style', 'color: black');
        validsenha = true;

    }
})


//evento confirmar senha
confirmarSenha.addEventListener('keyup', ()=>{

    if(senha.value != confirmarSenha.value){
        labelConfirmarSenha.setAttribute('style', 'color: #FF4A4A');
        labelConfirmarSenha.innerHTML = '<strong>Confirmar Senha *As Senhas não conferem.</strong>'
        validconfirmarSenha = false;
        
    }else{
        labelConfirmarSenha.setAttribute('style', 'color: black');
        labelConfirmarSenha.innerHTML = '<strong>Confirmar Senha </strong>'
        validconfirmarSenha = true;
        

    }
})






//botao cadastrar 'onclick'
function cadastrar(){

    if(validnome && validusuario && validsenha && validconfirmarSenha){

        //cadastrar usuário no local storage
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        //incrementar essa lista user no local storage
        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhacad: senha.value
                 
            }
        )

        //salvar lista no locarl storage    
        localStorage.setItem('listaUser', JSON.stringify(listaUser));

       


        //msg alerta caso sucesso
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML ='<strong>Cadastrando... usuário</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML =''  
        
        setTimeout(function(){

             //3s para ir para login, para usuário logar
            window.location.href = 'https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwjk-JCknv_1AhX3ILkGHXEyAm4QPAgI'

        },3000)
    }
    else{  
        
        
        //msg alerta caso error
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML ='<strong>Preencha os Campos Corretamente</strong>'
        msgSuccess.setAttribute('style', 'display: none') 
        msgSuccess.innerHTML =''
        
        setTimeout(function(){

            //3s para remover o alerta de erro
            msgError.remove()
            msgError.innerHTML = '' 
            location.reload();
         
        },3000)

        

    }  
    
}

