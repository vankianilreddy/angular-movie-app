# Angular Movie App (TMDB API)

This is a movie browsing web application built using Angular 17 Version and integrated with The Movie Database (TMDB) API. It allows users to search, explore, and view details about movies and TV shows in a clean UI.

## Project Overview

The Angular Movie App is a single-page application that fetches movie data from the TMDB API. Users can:
- Search for movies and TV shows
- View trending and popular content
- Browse by categories (e.g., Feel-good, Action Fix and Mind Binders)
- View detailed info about selected media.

This project is ideal for learning how to:
- Work with APIs in Angular
- Implement routing
- Use Angular services and components
- Handle asynchronous data

## Features

- Movie and TV show search
- Trending & popular listings
- Movie/TV details with overview, cast
- Lazy loading modules
- Responsive and clean UI with Bootstrap 5

## Techincal Details

- **Frontend Framework**: Angular 17
- **API**: [TMDB API](https://developer.themoviedb.org/docs)
- **CSS Framework**:Bootstrap 5
- **Other Tools**: RxJS, Angular CLI, TypeScript

## How to Install and Run Locally
1. Prerequisites
  Make sure you have the following installed: 
  Node.js (LTS version recommended): Download Node.js
  Angular CLI (Globally): npm install -g @angular/cli (run this in command prompt)

2. Clone the Repository
   - git clone https://github.com/vankianilreddy/angular-movie-app
     cd angular-movie-app

3. Install Dependencies
   Run npm install (run this command in vs code terminal This will install all the required node modules listed in package.json.)

4. Run the Development Server
   Run ng serve --open (Then open http://localhost:4200 in your browser)

## To Deploy

   Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
