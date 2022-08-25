import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TreeModel } from 'src/app/model/tree-model';

@Component({
  selector: 'app-generated-tree',
  templateUrl: './generated-tree.component.html',
  styleUrls: ['./generated-tree.component.css'],
})
export class GeneratedTreeComponent implements OnInit, OnChanges {
  @ViewChild('mainDiv', { static: false }) mainDiv!: ElementRef;
  @Input() generatedTree!: TreeModel;
  countId = 0;
  dom!: TreeModel;

  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['generatedTree'].firstChange) {
      this.dom = JSON.parse(changes['generatedTree'].currentValue.treeTable);
    }
  }

  ngOnInit(): void {}

  createLeaf() {
    this.renderer.setStyle(
      this.mainDiv.nativeElement,
      'background-color',
      'pink'
    );
    console.time('doSomething');
    this.createLeafs(this.dom);
    console.timeEnd('doSomething');
  }

  createLeafs(tree: any) {
    this.generate(tree, this.mainDiv.nativeElement, 0);
  }

  generate(tree: any, parent: any, level: number) {
    if (Array.isArray(tree)) {
      tree.forEach((element: any) => {
        this.createElement(element, parent, level + 1);
      });
    } else {
      return this.createElement(tree, parent, level);
    }
  }

  createElement(tree: any, parent: any, level: number) {
    let color: Array<string> = [
      'green',
      'pink',
      'yellow',
      'blue',
      'red',
      'magenta',
      'grey',
      'gold',
      'brown',
      'white',
    ];
    if (Array.isArray(tree)) {
      const div = this.renderer.createElement('div');
      this.renderer.setStyle(div, 'background-color', color[level]);
      this.renderer.setStyle(div, 'margin', '20px');
      this.renderer.appendChild(parent, div);
      this.generate(tree, div, level);
    } else {
      let type;
      switch (tree) {
        case 0:
          type = 'h1';
          break;
        case 1:
          type = 'p';
          break;
        case 2:
          type = 'h3';
          break;
        case 3:
        default:
          type = 'span';
          break;
      }
      // return React.createElement(type, {style:{backgroundColor: color[level]}}, makeid(20));
      const obj = this.renderer.createElement(type);
      this.renderer.appendChild(obj, this.renderer.createText(this.makeid(20)));
      this.renderer.setAttribute(obj, 'id', this.countId.toString());
      this.renderer.setStyle(obj, 'background-color', color[level]);
      return this.renderer.appendChild(parent, obj);
    }
  }

  makeid(length: number) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  addLeaf() {
    console.time('addChild');
    let listItems = Array.from(
      this.mainDiv.nativeElement.querySelectorAll('div')
    );
    listItems.forEach((listItem) => {
      let h1 = this.renderer.createElement('h1');
      this.renderer.appendChild(h1, this.renderer.createText(this.makeid(20)));
      this.renderer.setAttribute(h1, 'id', this.countId.toString());
      this.renderer.setStyle(h1, 'background-color', 'black');
      this.renderer.appendChild(listItem, h1);
    });
    console.timeEnd('addChild');
  }

  removeTree() {
    console.time('deleteTree');
    this.renderer.removeChild(
      this.el.nativeElement,
      this.mainDiv.nativeElement
    );
    console.timeEnd('deleteTree');
  }

  changeLeafColor() {
    console.time('changeLeaf');
    let listItems = Array.from(
      this.mainDiv.nativeElement.querySelectorAll('*')
    );
    console.log(listItems);
    listItems.forEach((listItem, j) => {
      this.renderer.setStyle(listItem, 'color', 'green');
    });
    console.timeEnd('changeLeaf');
  }
}
