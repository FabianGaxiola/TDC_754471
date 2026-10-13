import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Input() isFavorite = false;

  @Output() toggleFavorite = new EventEmitter<Movie>();
}
