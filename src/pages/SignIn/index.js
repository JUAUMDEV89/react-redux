import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

function SignIn(){
   const { loadingSignInRequest } = useSelector((state)=> state.auth );
   const dispatch = useDispatch();

   
   return(
     <>
        <div className="signIn-page">
           <h2>SignIn</h2>
           <input type="email" />
           <input type="password" />
           <button onClick={() => dispatch(signInRequest({ email: 'test@email.com', password:'12345678' }))}>{loadingSignInRequest ? 'carregando...' : 'Entrar'}</button>
        </div>
     </>
   )
}

export default SignIn;