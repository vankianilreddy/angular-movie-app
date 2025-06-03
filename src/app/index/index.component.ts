import { Component } from '@angular/core';
import { RouterModule ,Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
       RouterModule,
       HttpClientModule,
       CommonModule,
       FormsModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
 query: string = '';
  results: any[] = [];

  constructor(private authservice: AuthService) {}

    onSearch(): void {
    if (!this.query.trim()) return;
    this.authservice.searchMovies(this.query).subscribe((data) => {
      this.results = data.results;
    });
  }

}
