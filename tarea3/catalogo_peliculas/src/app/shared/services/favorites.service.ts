import { Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  readonly favorites = signal<Movie[]>([]);

  toggleFavorite(movie: Movie): void {
    const currentFavorites = this.favorites();
    const isFavorite = currentFavorites.some((favorite) => favorite.id === movie.id);

    if (isFavorite) {
      this.favorites.set(currentFavorites.filter((favorite) => favorite.id !== movie.id));
      return;
    }

    this.favorites.set([...currentFavorites, movie]);
  }

  isFavorite(movieId: number): boolean {
    return this.favorites().some((favorite) => favorite.id === movieId);
  }

  removeFavorite(movieId: number): void {
    this.favorites.set(this.favorites().filter((favorite) => favorite.id !== movieId));
  }
}
