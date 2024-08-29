import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedServicesModule } from '@ng-hackathon-monorepo/shared-services';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [SharedServicesModule, RouterOutlet ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  
}
