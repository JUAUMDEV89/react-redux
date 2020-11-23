import './style.css';

function SingIn(){
   return(
     <>
        <div classnName="singin-page">
           <input type="email" />
           <input type="password" />
           <button onClick={()=>{ alert("Clicou!") }}>Entrar</button>
        </div>
     </>
   )
}