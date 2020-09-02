import app from "firebase/app";
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config={
   
        apiKey: "AIzaSyAlaejAYcivgfsB4BKzxxlkXmDBZCXaj38",
        authDomain: "shelterize-85afb.firebaseapp.com",
        databaseURL: "https://shelterize-85afb.firebaseio.com",
        projectId: "shelterize-85afb",
        storageBucket: "shelterize-85afb.appspot.com",
        messagingSenderId: "330142403675",
        appId: "1:330142403675:web:05d8781e3c394456b5c37e"
     
}
app.initializeApp(config)

class Firebase{
    constructor(){
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
    }
    login(email,password){
        return this.auth.signInWithEmailAndPassword(email, password)
    }
    logout(){
        return this.auth.signOut()
    }
    async register(name, email, password){
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.authcurrentUser.updateProfile({
            displayName: name
        })
    }
}
export default new Firebase()