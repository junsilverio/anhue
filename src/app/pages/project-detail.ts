import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PageHeroComponent } from '../shared/page-hero';
import { CtaBannerComponent } from '../shared/cta-banner';
import { IconComponent } from '../shared/icon';
import { PROJECTS } from '../data/site-data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, PageHeroComponent, CtaBannerComponent, IconComponent],
  template: `
    @if (project(); as p) {
      <app-page-hero [eyebrow]="p.category" [title]="p.title" [lead]="p.summary" />

      <section class="section">
        <div class="container split">
          <div>
            <span class="eyebrow">Scope of Work</span>
            <h2 class="section-title">Project scope</h2>
            <ul class="scope-list">
              @for (item of p.scope; track item) {
                <li><app-icon name="check" class="check" />{{ item }}</li>
              }
            </ul>
          </div>
          <div class="glass-card facts">
            <h3>Project Facts</h3>
            <div class="fact"><span class="fact-label">Category</span><span>{{ p.category }}</span></div>
            <div class="fact"><span class="fact-label">Location</span><span>{{ p.location }}</span></div>
            <div class="fact"><span class="fact-label">Year</span><span>{{ p.year }}</span></div>
            @for (s of p.stats; track s.label) {
              <div class="fact"><span class="fact-label">{{ s.label }}</span><span class="accent fact-value">{{ s.value }}</span></div>
            }
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          <span class="eyebrow">More Work</span>
          <h2 class="section-title">Related projects</h2>
          <div class="grid-3" style="margin-top: 44px;">
            @for (r of related(); track r.slug) {
              <a class="glass-card related-card" [routerLink]="['/projects', r.slug]">
                <span class="chip">{{ r.category }}</span>
                <h3>{{ r.title }}</h3>
                <span class="meta">{{ r.location }} · {{ r.year }}</span>
              </a>
            }
          </div>
        </div>
      </section>

      <app-cta-banner title="Start a project like this" lead="Tell us your requirements and we'll show you how we can deliver it." />
    } @else {
      <section class="section">
        <div class="container">
          <h2 class="section-title">Project not found</h2>
          <a routerLink="/projects" class="btn btn-primary">Back to Projects</a>
        </div>
      </section>
    }
  `,
  styles: [`
    .split { display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; align-items: start; }
    .scope-list { list-style: none; }
    .scope-list li { display: flex; align-items: center; gap: 12px; padding: 10px 0; color: var(--text-on-dark); }
    .check { width: 20px; height: 20px; color: var(--orange-500); flex-shrink: 0; }
    .facts:hover { transform: none; }
    .facts h3 { font-size: 1.1rem; margin-bottom: 16px; }
    .fact {
      display: flex; justify-content: space-between; gap: 16px;
      padding: 11px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      font-size: 0.93rem;
    }
    .fact:last-child { border-bottom: none; }
    .fact-label { color: var(--text-muted-dark); }
    .fact-value { font-weight: 800; }
    .chip {
      display: inline-block; align-self: flex-start;
      padding: 5px 14px; border-radius: 999px;
      background: rgba(249, 115, 22, 0.14); color: var(--orange-400);
      font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
      margin-bottom: 16px;
    }
    .related-card { display: flex; flex-direction: column; }
    .related-card h3 { font-size: 1.08rem; flex: 1; }
    .meta { margin-top: 14px; color: var(--grey-500); font-size: 0.84rem; font-weight: 600; }
    @media (max-width: 900px) { .split { grid-template-columns: 1fr; } }
  `],
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug'))), { initialValue: null });

  project = computed(() => PROJECTS.find((p) => p.slug === this.slug()));
  related = computed(() => PROJECTS.filter((p) => p.slug !== this.slug()).slice(0, 3));
}
