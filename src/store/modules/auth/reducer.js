
const initialState = {
    loadingSignInRequest:false,
    isSignedIn: true,
}

export default function auth(state = initialState, action){
   switch (action.type) {
       case '@auth/SIGN_IN_REQUEST':
          return{
              ...state,
              loadingSignInRequest: true,
          }    

          default:
              return state;
   }
}