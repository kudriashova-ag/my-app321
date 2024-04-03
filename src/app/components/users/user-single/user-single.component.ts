import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-single',
  standalone: true,
  imports: [],
  templateUrl: './user-single.component.html',
  styleUrl: './user-single.component.css'
})
export class UserSingleComponent {
  @Input() user: any;
}
