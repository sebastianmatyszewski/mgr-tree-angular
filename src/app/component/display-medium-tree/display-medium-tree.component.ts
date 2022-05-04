import { Component, OnInit } from '@angular/core';
import { TreeModel } from 'src/app/model/tree-model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-display-medium-tree',
  templateUrl: './display-medium-tree.component.html',
  styleUrls: ['./display-medium-tree.component.css']
})
export class DisplayMediumTreeComponent implements OnInit {

  treeList : TreeModel[] = [];
  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.getSmallTrees();
    console.log(this.treeList)
  }

  getSmallTrees(){
    this.data.getMediumTrees().subscribe(res => {
      this.treeList = res.map(e => {
        const data: any = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching Tree data')
    })
  }
}