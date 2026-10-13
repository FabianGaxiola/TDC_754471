import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card';
import { MOVIES } from '../../data/movies';
import { Movie } from '../../shared/models/movie';
import { FavoritesService } from '../../shared/services/favorites.service';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MovieCardComponent],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class MoviesPage {
  readonly movies = MOVIES;
  private readonly fb = inject(FormBuilder);
  readonly favoritesService = inject(FavoritesService);

  readonly filterForm = this.fb.nonNullable.group({
    query: [''],
    director: [''],
    producer: [''],
    genre: [''],
    year: [''],
  });

  readonly filteredMovies = computed(() => {
    const values = this.filterForm.getRawValue();
    const query = values.query.trim().toLowerCase();
    const director = values.director.trim().toLowerCase();
    const producer = values.producer.trim().toLowerCase();
    const genre = values.genre.trim().toLowerCase();
    const year = values.year.trim();

    return this.movies.filter((movie) => {
      const matchesQuery =
        !query ||
        movie.title.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query);
      const matchesDirector = !director || movie.director.toLowerCase().includes(director);
      const matchesProducer = !producer || movie.producer.toLowerCase().includes(producer);
      const matchesGenre = !genre || movie.genre.toLowerCase().includes(genre);
      const matchesYear = !year || movie.year.toString().includes(year);

      return matchesQuery && matchesDirector && matchesProducer && matchesGenre && matchesYear;
    });
  });

  toggleFavorite(movie: Movie): void {
    this.favoritesService.toggleFavorite(movie);
  }

  clearFilters(): void {
    this.filterForm.reset({
      query: '',
      director: '',
      producer: '',
      genre: '',
      year: '',
    });
  }
}
