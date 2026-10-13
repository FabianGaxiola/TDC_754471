import { Routes } from '@angular/router';
import { FavoritesPage } from './pages/favorites/favorites';
import { MovieDetailPage } from './pages/movie-detail/movie-detail';
import { MoviesPage } from './pages/movies/movies';

export const routes: Routes = [
  { path: '', component: MoviesPage },
  { path: 'movies/:id', component: MovieDetailPage },
  { path: 'favorites', component: FavoritesPage },
  { path: '**', redirectTo: '' },
];
