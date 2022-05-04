import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat'
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TreeModel } from '../model/tree-model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  addTree(tree : TreeModel, size : string, elementsCount: number){
    tree.id = this.afs.createId();
    tree.elementsCount = elementsCount;
    console.log(tree.id);
    switch (size){
      case "small":
        return this.afs.collection('/small').add(tree);
      case "medium":
        return this.afs.collection('/medium').add(tree);
      case "big":
        return this.afs.collection('/big').add(tree);
      default: return this.afs.collection('/errors').add(tree);
    }
    
  }

  getSmallTrees(){
    return this.afs.collection('/small').snapshotChanges();
  }
  getMediumTrees(){
    return this.afs.collection('/medium').snapshotChanges();
  }
  getBigTrees(){
    return this.afs.collection('/big').snapshotChanges();
  }
}
