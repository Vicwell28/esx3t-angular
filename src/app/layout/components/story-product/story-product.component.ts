import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-product',
  templateUrl: './story-product.component.html',
  styleUrls: ['./story-product.component.css']
})
export class StoryProductComponent {

  @Input() flexDirection?: string;
  @Input() marginLeft?: string;
  @Input() img?: string;
  @Input() title?: string;
  @Input() text?: string;

  // constructor() {
  //   this.flexDirection = "row-reverse"
  //   this.marginLeft = "auto"
  // }

    // flex-direction: row-reverse;
    // marginLeft: auto;

}
