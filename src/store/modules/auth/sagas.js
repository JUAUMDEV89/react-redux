import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api.js';

export function* signIn({ payload }){
   try{
     const { email, password } = payload;

     const response = yield call(api.post, '',{ email, password });
   }catch(err){

   }
}