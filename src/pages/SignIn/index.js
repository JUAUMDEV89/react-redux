import './style.css';

function SignIn(){
   return(
     <>
        <div className="signIn-page">
           <h2>SignIn</h2>
           <input type="email" />
           <input type="password" />
           <button onClick={()=>{ alert("Clicou!") }}>Entrar</button>
        </div>
     </>
   )
}

export default SignIn;