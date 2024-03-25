import { Injectable } from '@angular/core';
import IContact from '../../components/shared/models/contact';
import { getFirestore, Firestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private firestore: Firestore;

  constructor() {
    const firebaseApp = initializeApp(firebaseConfig);
    this.firestore = getFirestore(firebaseApp);
  }

  addContact(contact: IContact){
    const contactRef = collection(this.firestore, 'contact');
    return addDoc(contactRef, contact);
  }

}
