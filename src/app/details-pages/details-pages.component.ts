import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-pages.component.html',
  styleUrl: './details-pages.component.css'
})
export class DetailsPagesComponent implements OnInit{
  movie: any;

  constructor(private route: ActivatedRoute, private authservice: AuthService) {}

  
  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.authservice.getMovieDetails(movieId).subscribe(data => {
      this.movie = data;
    });
  }

}
