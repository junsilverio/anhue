import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="container header-inner">
        <a routerLink="/" class="brand" (click)="menuOpen.set(false)">
          <span class="brand-mark">A</span>
          <span class="brand-text">
            <span class="brand-name">ANHUE <em>TECH</em></span>
            <span class="brand-sub">Engineering Services</span>
          </span>
        </a>

        <nav class="nav" [class.open]="menuOpen()">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="menuOpen.set(false)">Home</a>
          <div class="nav-group">
            <a routerLink="/about" routerLinkActive="active" (click)="menuOpen.set(false)">Who we are</a>
            <div class="dropdown">
              <a routerLink="/about" (click)="menuOpen.set(false)">About Us</a>
              <a routerLink="/mission-vision-values" (click)="menuOpen.set(false)">Mission, Vision & Values</a>
              <a routerLink="/leadership" (click)="menuOpen.set(false)">Leadership & Team</a>
            </div>
          </div>
          <div class="nav-group">
            <a routerLink="/services" routerLinkActive="active" (click)="menuOpen.set(false)">What We Do</a>
            <div class="dropdown">
              <a routerLink="/services" (click)="menuOpen.set(false)">Services Overview</a>
              @for (s of serviceLinks; track s.slug) {
                <a [routerLink]="['/services', s.slug]" (click)="menuOpen.set(false)">{{ s.title }}</a>
              }
            </div>
          </div>
          <a routerLink="/projects" routerLinkActive="active" (click)="menuOpen.set(false)">Projects</a>
          <a routerLink="/clients" routerLinkActive="active" (click)="menuOpen.set(false)">Clients</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="menuOpen.set(false)">Contact Us</a>
        </nav>

        <a routerLink="/contact" class="btn btn-primary cta">Get a Quote</a>

        <button class="menu-toggle" (click)="menuOpen.set(!menuOpen())" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .site-header {
      position: sticky;
      top: 0;
      z-index: 100;
      height: var(--header-h);
      background: rgba(10, 22, 40, 0.72);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      transition: background 0.3s ease;
    }
    .site-header.scrolled { background: rgba(10, 22, 40, 0.95); }
    .header-inner {
      display: flex;
      align-items: center;
      gap: 28px;
      height: var(--header-h);
    }
    .brand { display: flex; align-items: center; gap: 12px; }
    .brand-mark {
      width: 42px; height: 42px;
      display: grid; place-items: center;
      background: linear-gradient(135deg, var(--orange-500), var(--orange-600));
      border-radius: 10px;
      font-weight: 900; font-size: 1.4rem; color: #fff;
      clip-path: polygon(0 100%, 50% 0, 100% 100%, 78% 100%, 50% 40%, 22% 100%);
    }
    .brand-text { display: flex; flex-direction: column; line-height: 1.15; }
    .brand-name { font-weight: 900; font-size: 1.1rem; color: #fff; letter-spacing: 0.02em; }
    .brand-name em { font-style: normal; color: var(--orange-500); }
    .brand-sub { font-size: 0.6rem; letter-spacing: 0.34em; text-transform: uppercase; color: var(--grey-300); }
    .nav { display: flex; align-items: center; gap: 26px; margin-left: auto; }
    .nav > a, .nav-group > a {
      font-weight: 600; font-size: 0.93rem; color: var(--text-on-dark);
      padding: 8px 2px; position: relative; transition: color 0.2s ease;
    }
    .nav > a:hover, .nav-group > a:hover, .nav a.active { color: var(--orange-500); }
    .nav a.active::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: 0;
      height: 2px; background: var(--orange-500); border-radius: 2px;
    }
    .nav-group { position: relative; }
    .dropdown {
      position: absolute; top: 100%; left: -16px;
      min-width: 280px;
      background: rgba(15, 32, 56, 0.97);
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      padding: 10px;
      display: none;
      flex-direction: column;
      box-shadow: var(--glass-shadow);
    }
    .nav-group:hover .dropdown, .nav-group:focus-within .dropdown { display: flex; }
    .dropdown a {
      padding: 10px 14px; border-radius: 8px; font-size: 0.9rem; font-weight: 500;
      color: var(--text-on-dark); transition: background 0.15s ease, color 0.15s ease;
    }
    .dropdown a:hover { background: rgba(249, 115, 22, 0.12); color: var(--orange-400); }
    .cta { padding: 11px 22px; }
    .menu-toggle {
      display: none; flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer; padding: 8px;
    }
    .menu-toggle span { width: 24px; height: 2px; background: #fff; border-radius: 2px; }
    @media (max-width: 1080px) {
      .nav {
        position: fixed; inset: var(--header-h) 0 auto 0;
        flex-direction: column; align-items: stretch; gap: 0;
        background: rgba(10, 22, 40, 0.98);
        border-bottom: 1px solid var(--glass-border);
        padding: 16px 24px 24px;
        display: none;
      }
      .nav.open { display: flex; }
      .nav > a, .nav-group > a { padding: 12px 4px; display: block; }
      .dropdown { position: static; display: flex; min-width: 0; border: none; box-shadow: none; background: transparent; padding-left: 18px; }
      .cta { margin-left: auto; }
      .menu-toggle { display: flex; }
    }
  `],
})
export class HeaderComponent {
  scrolled = signal(false);
  menuOpen = signal(false);
  serviceLinks = [
    { slug: 'mechanical-electrical', title: 'Mechanical & Electrical' },
    { slug: 'construction-renovation', title: 'Construction & Renovation' },
    { slug: 'structural-civil', title: 'Structural & Civil Works' },
    { slug: 'water-systems', title: 'Water System Services' },
    { slug: 'security-communication', title: 'Security & Communication' },
    { slug: 'maintenance', title: 'Maintenance Services' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 12);
  }
}
