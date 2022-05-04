import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { TreeModel } from 'src/app/model/tree-model';

@Component({
  selector: 'app-generated-tree',
  templateUrl: './generated-tree.component.html',
  styleUrls: ['./generated-tree.component.css']
})
export class GeneratedTreeComponent implements OnInit, OnChanges{
  @ViewChild('mainDiv', { static: false }) mainDiv!: ElementRef; 
  @Input() generatedTree!: TreeModel;
  countId = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['generatedTree'].firstChange){
      this.drawTree(JSON.parse(changes['generatedTree'].currentValue.treeTable));
    }
  }

  ngOnInit(): void {
    
  }
  drawTree(tree: TreeModel){
    // this.countId = 0;
    this.generateTree(tree, this.mainDiv.nativeElement, 0);
  }
 
  generateTree(tree: any, parent: any, level: number){
    let h5 = this.renderer.createElement('h5'); 
    let div = this.renderer.createElement('div'); 
    let p = this.renderer.createElement('p'); 
    this.renderer.setStyle(h5,'background-color', '#ffcc5c');
    this.renderer.setStyle(h5, 'margin', '40px')
    this.renderer.setStyle(p,'background-color', '#bd5734');
    this.renderer.setStyle(p, 'margin', '40px')
    let color: Array<string> = ['green', 'pink', 'yellow', 'blue', 'red', 'magenta','grey', 'gold', 'brown', 'white'];
    let ul = this.renderer.createElement('ul'); 
    let li = this.renderer.createElement('li'); 
    this.renderer.setStyle(ul,'background-color', '#5b9aa0');
    this.renderer.setStyle(ul, 'margin', '40px')
    for (var index = 0; index < tree.length; index++) {   
        if(Array.isArray(tree[index])){
          this.renderer.setStyle(div,'background-color', color[level]);
          this.renderer.setStyle(div, 'margin', '40px')
          this.renderer.addClass(div, "div")
          this.renderer.addClass(div, "div"+this.countId)
          this.renderer.appendChild(parent,  div);
          this.generateTree(tree[index], div, level+1)
        }else{
          if(tree[index] == 0){
            this.renderer.appendChild(h5,  this.renderer.createText('0'));
            this.renderer.setAttribute(h5, "id", this.countId.toString())
            this.renderer.appendChild(parent,  h5);
          }
          
          if(tree[index] == 1){
            this.renderer.appendChild(p,  this.renderer.createText('1'));
            this.renderer.setAttribute(p, "id", this.countId.toString())
            this.renderer.appendChild(parent,  p);
          }
          
          if(tree[index] == 2){
            this.renderer.appendChild(p,  this.renderer.createText('2'));
            this.renderer.setAttribute(p, "id", this.countId.toString())
            this.renderer.appendChild(parent,  p);
          }
          
          if(tree[index] == 3){
            let li1 =this.renderer.createElement('li');
            this.renderer.appendChild(li1,  this.renderer.createText(this.makeid(20)));
            this.renderer.appendChild(ul,  li1);
            let li2 =this.renderer.createElement('li');
            this.renderer.appendChild(li2,  this.renderer.createText(this.makeid(20)));
            this.renderer.appendChild(ul,  li2);
            let li3 =this.renderer.createElement('li');
            this.renderer.appendChild(li3,  this.renderer.createText(this.makeid(20)));
            this.renderer.appendChild(ul,  li3);
            this.renderer.setAttribute(ul, "id", this.countId.toString())
            this.renderer.appendChild(parent,  ul);
          }
          this.countId++;
      }
    }
  }

  makeid(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  }

  addLeaf(){
    let listItems = Array.from(this.mainDiv.nativeElement.querySelectorAll('div'))
    // console.log(listItems)
    listItems.forEach((listItem, j) => {
      let h1 = this.renderer.createElement('h1');
      this.renderer.appendChild(h1,  this.renderer.createText(this.makeid(20)));
      this.renderer.setAttribute(h1, "id", this.countId.toString())
      this.renderer.setStyle(h1, 'background-color', 'black');  
      this.renderer.appendChild(listItem,  h1);
    });
  }

  remove(tree: any){
    tree.forEach((treeElem: any) => {
      if(treeElem.classList.contains('div')){
        this.remove(treeElem);
      }else{
        this.renderer.removeChild(tree, treeElem.nativeElement);
      }
    });
  }

  removeTree(){
    this.renderer.removeChild(this.el.nativeElement, this.mainDiv.nativeElement)
  }

  changeLeafColor(){
    let listItems = Array.from(this.mainDiv.nativeElement.querySelectorAll('*'))
    console.log(listItems)
    listItems.forEach((listItem, j) => {
      this.renderer.removeStyle(listItem, 'background-color');
      this.renderer.setStyle(listItem, 'color', 'green');
      }
    );
  }
}
