import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Item {
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor() {
    //private afs: AngularFirestore
    //   this.itemsCollection = afs.collection<Item>('items');
    //   this.items = this.itemsCollection.valueChanges();
  }
   addItem(item: Item) {
    
  this.itemsCollection.add(item);
  console.log(this.itemsCollection)
   }
}
