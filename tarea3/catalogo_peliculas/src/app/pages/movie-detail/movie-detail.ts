import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MOVIES } from '../../data/movies';
import { Movie } from '../../shared/models/movie';
import { FavoritesService } from '../../shared/services/favorites.service';

@Component({
  selector: 'app-movie-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss',
})
export class MovieDetailPage {
  private readonly route = inject(ActivatedRoute);
  readonly favoritesService = inject(FavoritesService);

  readonly movie = signal<Movie | null>(null);
  readonly isFavorite = computed(() => {
    const movie = this.movie();
    return movie ? this.favoritesService.isFavorite(movie.id) : false;
  });

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const movieId = Number(params.get('id'));
      const selectedMovie = MOVIES.find((movie) => movie.id === movieId) ?? null;
      this.movie.set(selectedMovie);
    });
  }

  toggleFavorite(): void {
    const movie = this.movie();
    if (movie) {
      this.favoritesService.toggleFavorite(movie);
    }
  }
}
