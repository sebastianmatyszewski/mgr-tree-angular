import { Component, OnInit } from '@angular/core';
import { TreeModel } from 'src/app/model/tree-model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-generate-tree',
  templateUrl: './generate-tree.component.html',
  styleUrls: ['./generate-tree.component.css']
})
export class GenerateTreeComponent implements OnInit {

  treeList : TreeModel[] = [];
  id : string = '';
  treeTable : string = '';
  TreeObj: TreeModel = {
    id: '',
    elementsCount: 0,
    treeTable: ''
  };
  generatedTree: any;
  elementsCount = 0;
  constructor(private data : DataService) { }

  ngOnInit(): void {
  }

  addTree(tree: any, size: string, elementsCount: number){
    this.TreeObj.id = '';
    this.TreeObj.treeTable = tree;
    switch (size){
      case "small":
        this.data.addTree(this.TreeObj, "small", elementsCount);
        break;
      case "medium":
        this.data.addTree(this.TreeObj, "medium", elementsCount);
        break;
      case "big":
        this.data.addTree(this.TreeObj, "big", elementsCount);
        break;
    }
  }

  generateSmallTree(){
    this.elementsCount = 0;
    this.generatedTree = this.generateTree(5, 4, 6)
    console.log(this.generatedTree);
    console.log(this.elementsCount);
    this.addTree(JSON.stringify(this.generatedTree), "small", this.elementsCount);
  }
  
  generateMediumTree(){
    this.elementsCount = 0;
    this.generatedTree = this.generateTree(4, 5, 9)
    console.log(this.generatedTree);
    console.log(this.elementsCount);
    this.addTree(JSON.stringify(this.generatedTree), "medium", this.elementsCount);
  }

  generateBigTree(){
    this.elementsCount = 0;
    this.generatedTree = this.generateTree(0, 3, 7)
    console.log(this.generatedTree);
    console.log(this.elementsCount);
    this.addTree(JSON.stringify(this.generatedTree), "big", this.elementsCount);
  }

  generateTree(level: number, min: number, max: number) : any[]{
    var max_elements = Math.floor(Math.random() * (max - min + 1) + min)
    var max_level = 10;
    var nested_array = [];
    for (var index = 0; index < max_elements; index++) {
      this.elementsCount++;
      if (level <= max_level && Math.floor((Math.random() * 2)) == 0) {
        nested_array.push(this.generateTree(level + 1, min, max));
      } else {
        switch (Math.floor((Math.random() * 4))) {
          case 0:	nested_array.push(1); 
          break;
          case 1:	nested_array.push(2);
          break;
          case 2:	nested_array.push(3);
          break;
          default:	nested_array.push(0); 
          break;
        }
      }
    }   
    return nested_array;                
  }
}
