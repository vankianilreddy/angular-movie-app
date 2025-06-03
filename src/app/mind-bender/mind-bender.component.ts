import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule ,Router } from '@angular/router';
@Component({
  selector: 'app-mind-bender',
  standalone: true,
  imports: [CommonModule, HttpClientModule , RouterModule],
  templateUrl: './mind-bender.component.html',
  styleUrl: './mind-bender.component.css'
})
export class MindBenderComponent implements OnInit{
  movies: any[] = [];

  constructor(private authservice: AuthService) {}

    ngOnInit() {
    this.authservice.getMindBenderMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }
}
