import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card';
import { Movie } from '../../shared/models/movie';
import { FavoritesService } from '../../shared/services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class FavoritesPage {
  readonly favoritesService = inject(FavoritesService);
  readonly favoriteMovies = computed(() => this.favoritesService.favorites());

  toggleFavorite(movie: Movie): void {
    this.favoritesService.toggleFavorite(movie);
  }
}
