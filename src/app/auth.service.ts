import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private url = 'http://localhost:3000/api';
  // private url = 'http://localhost:3000/api';
  private apiKey = 'c41ed211b980b62273cd19473beca22c';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMovieDetails(id: number): Observable<any> {

    return this.http.get(
    `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
  );
}

  getFeelGoodMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35,10751,18,10749&sort_by=popularity.desc&language=en-US`
    );
  }

  getActionFixMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28&sort_by=popularity.desc&language=en-US`
    );
  }
  getMindBenderMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53,9648,878,18&sort_by=popularity.desc&language=en-US`
    );
  }

  searchMovies(query: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/search/movie`, {
    params: {
      api_key: this.apiKey,
      query: query
    }
  });
}

}
