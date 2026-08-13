import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../shared/page-hero';
import { CtaBannerComponent } from '../shared/cta-banner';
import { IconComponent } from '../shared/icon';
import { PROJECTS } from '../data/site-data';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, PageHeroComponent, CtaBannerComponent, IconComponent],
  template: `
    <app-page-hero
      eyebrow="Our Work"
      title="Projects Portfolio"
      lead="A track record of engineering projects delivered with quality, safety and value across industries."
    />

    <section class="section">
      <div class="container">
        <div class="filters">
          @for (c of categories; track c) {
            <button class="filter" [class.active]="c === activeCategory()" (click)="activeCategory.set(c)">{{ c }}</button>
          }
        </div>
        <div class="grid-3" style="margin-top: 40px;">
          @for (p of filtered(); track p.slug) {
            <a class="glass-card project-card" [routerLink]="['/projects', p.slug]">
              <span class="chip">{{ p.category }}</span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.summary }}</p>
              <span class="meta">{{ p.location }} · {{ p.year }}</span>
              <span class="link">View project <app-icon name="arrow" class="link-ic" /></span>
            </a>
          }
        </div>
      </div>
    </section>

    <app-cta-banner title="Have a project in mind?" lead="Let's talk about how we can bring the same quality and discipline to your build." />
  `,
  styles: [`
    .filters { display: flex; gap: 10px; flex-wrap: wrap; }
    .filter {
      padding: 9px 20px; border-radius: 999px; cursor: pointer;
      background: var(--glass-bg); border: 1px solid var(--glass-border);
      color: var(--text-on-dark); font-weight: 600; font-size: 0.86rem;
      font-family: inherit;
      transition: background 0.2s ease, border-color 0.2s ease;
    }
    .filter:hover { border-color: rgba(249, 115, 22, 0.5); }
    .filter.active { background: var(--orange-500); border-color: var(--orange-500); color: #fff; }
    .chip {
      display: inline-block; align-self: flex-start;
      padding: 5px 14px; border-radius: 999px;
      background: rgba(249, 115, 22, 0.14); color: var(--orange-400);
      font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
      margin-bottom: 16px;
    }
    .project-card { display: flex; flex-direction: column; }
    .project-card h3 { font-size: 1.12rem; margin-bottom: 10px; }
    .project-card p { color: var(--text-muted-dark); font-size: 0.92rem; flex: 1; }
    .meta { margin-top: 16px; color: var(--grey-500); font-size: 0.84rem; font-weight: 600; }
    .link { display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; color: var(--orange-500); font-weight: 700; font-size: 0.9rem; }
    .link-ic { width: 16px; height: 16px; }
  `],
})
export class ProjectsComponent {
  categories = ['All', ...new Set(PROJECTS.map((p) => p.category))];
  activeCategory = signal('All');
  filtered = computed(() =>
    this.activeCategory() === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === this.activeCategory())
  );
}
