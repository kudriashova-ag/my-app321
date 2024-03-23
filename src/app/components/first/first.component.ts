import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgClass],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  user: string = 'Bob';
  fruits: string[] = ['apple', 'orange', 'kiwi'];
  isActive: boolean = false;

  count: number = 0;
  increment(): void {
    this.count++;
  }
}
