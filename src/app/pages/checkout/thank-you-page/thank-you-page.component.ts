import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `<div class="container">
  <h1 class="title">Thank you!</h1>

  <p class="content">
      Your order is on the way!
  </p>
  
  <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quibusdam iure? 
      Nobis maxime at repudiandae quod odit enim sapiente dolorum. Alias, officiis aliquid
      voluptate quod ex voluptas numquam dolore vel.
  </span>

</div>`,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent{
}
