import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Sidebar, Footer, RouterOutlet],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
