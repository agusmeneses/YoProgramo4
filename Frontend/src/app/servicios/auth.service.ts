import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat'
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    currentUserSubject: BehaviorSubject<any>
    constructor (private afauth: AngularFireAuth, http:HttpClient) {
        this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currentUser")||"{}"))
    }

    async login(email: string, password: string){
        try{
            return await this.afauth.signInWithEmailAndPassword(email,password);
        }
        catch(error){
            console.log('Error login', error);
            return null;
        }
    }
    async loginWithGoogle(){
        try{
           return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        }
        catch(error){
            console.log('Error login google', error);
            return null;
        }
    }
    async register(email: string, password: string){
        try{
            return await this.afauth.createUserWithEmailAndPassword(email,password);
        }
        catch(err){
            console.log('Error register', err);
            return null;
        }
    }
    getUserLogged(){
        return this.afauth.authState;
    }
    logout(){
        return this.afauth.signOut();
    }
    get UsuarioAutenticado()
    {
        return this.currentUserSubject.value;
    }
}