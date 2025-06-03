import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule ,Router } from '@angular/router';

@Component({
  selector: 'app-feel-good',
  standalone: true,
  imports: [CommonModule, HttpClientModule , RouterModule],
  templateUrl: './feel-good.component.html',
  styleUrl: './feel-good.component.css'
})
export class FeelGoodComponent implements OnInit{
  movies: any[] = [];

  constructor(private authservice: AuthService) {}

    ngOnInit() {
    this.authservice.getFeelGoodMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }
}
