import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PageHeroComponent } from '../shared/page-hero';
import { CtaBannerComponent } from '../shared/cta-banner';
import { IconComponent } from '../shared/icon';
import { SERVICES } from '../data/site-data';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, PageHeroComponent, CtaBannerComponent, IconComponent],
  template: `
    @if (service(); as s) {
      <app-page-hero eyebrow="Our Services" [title]="s.title" [lead]="s.short" />

      <section class="section">
        <div class="container split">
          <div>
            <span class="eyebrow">Overview</span>
            <h2 class="section-title">What we deliver</h2>
            <p class="intro">{{ s.intro }}</p>
          </div>
          <div class="glass-card highlights">
            <h3>Why ANHUE TECH</h3>
            <ul>
              @for (h of s.highlights; track h) {
                <li><app-icon name="check" class="check" />{{ h }}</li>
              }
            </ul>
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          <span class="eyebrow">Scope of Services</span>
          <h2 class="section-title">Our offerings</h2>
          <div class="grid-3" style="margin-top: 44px;">
            @for (o of s.offerings; track o.name) {
              <div class="glass-card">
                <h3 class="o-title">{{ o.name }}</h3>
                <p class="o-text">{{ o.description }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <span class="eyebrow">Explore More</span>
          <h2 class="section-title">Other services</h2>
          <div class="grid-3" style="margin-top: 44px;">
            @for (other of others(); track other.slug) {
              <a class="glass-card other-card" [routerLink]="['/services', other.slug]">
                <span class="card-icon"><app-icon [name]="other.icon" /></span>
                <h3>{{ other.title }}</h3>
                <span class="link">View details <app-icon name="arrow" class="link-ic" /></span>
              </a>
            }
          </div>
        </div>
      </section>

      <app-cta-banner [title]="'Need ' + s.title + '?'" lead="Send us your requirements and our engineers will prepare a detailed proposal." />
    } @else {
      <section class="section">
        <div class="container">
          <h2 class="section-title">Service not found</h2>
          <a routerLink="/services" class="btn btn-primary">Back to Services</a>
        </div>
      </section>
    }
  `,
  styles: [`
    .split { display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; align-items: start; }
    .intro { color: var(--text-muted-dark); font-size: 1.05rem; }
    .highlights:hover { transform: none; }
    .highlights h3 { font-size: 1.1rem; margin-bottom: 18px; }
    .highlights ul { list-style: none; }
    .highlights li { display: flex; align-items: center; gap: 12px; padding: 9px 0; color: var(--text-on-dark); font-size: 0.95rem; }
    .check { width: 20px; height: 20px; color: var(--orange-500); flex-shrink: 0; }
    .o-title { font-size: 1.05rem; margin-bottom: 10px; }
    .o-text { color: var(--text-muted-dark); font-size: 0.92rem; }
    .other-card { display: flex; flex-direction: column; }
    .other-card h3 { font-size: 1.08rem; flex: 1; }
    .link { display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; color: var(--orange-500); font-weight: 700; font-size: 0.9rem; }
    .link-ic { width: 16px; height: 16px; }
    @media (max-width: 900px) { .split { grid-template-columns: 1fr; } }
  `],
})
export class ServiceDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug'))), { initialValue: null });

  service = computed(() => SERVICES.find((s) => s.slug === this.slug()));
  others = computed(() => SERVICES.filter((s) => s.slug !== this.slug()).slice(0, 3));
}
