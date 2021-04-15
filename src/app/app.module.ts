import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyB4_jY_zXe6wloH9JZGRPwh01bgh7OFwIY",
  authDomain: "chat-react-491db.firebaseapp.com",
  projectId: "chat-react-491db",
  storageBucket: "chat-react-491db.appspot.com",
  messagingSenderId: "536665703041",
  appId: "1:536665703041:web:096601f117884cb9220380"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpMod
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
