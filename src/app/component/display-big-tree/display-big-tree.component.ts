import { Component, OnInit } from '@angular/core';
import { TreeModel } from 'src/app/model/tree-model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-display-big-tree',
  templateUrl: './display-big-tree.component.html',
  styleUrls: ['./display-big-tree.component.css']
})
export class DisplayBigTreeComponent implements OnInit {

  treeList : TreeModel[] = [];
  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.getSmallTrees();
  }

  getSmallTrees(){
    this.data.getBigTrees().subscribe(res => {
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