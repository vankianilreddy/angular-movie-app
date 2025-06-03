import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule ,Router } from '@angular/router';

@Component({
  selector: 'app-action-fix',
  standalone: true,
  imports: [CommonModule, HttpClientModule , RouterModule],
  templateUrl: './action-fix.component.html',
  styleUrl: './action-fix.component.css'
})
export class ActionFixComponent implements OnInit{
  movies: any[] = [];

  constructor(private authservice: AuthService) {}

    ngOnInit() {
    this.authservice.getActionFixMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }
}
