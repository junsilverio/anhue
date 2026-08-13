import { Component } from '@angular/core';
import { PageHeroComponent } from '../shared/page-hero';
import { CtaBannerComponent } from '../shared/cta-banner';
import { IconComponent } from '../shared/icon';
import { VALUES } from '../data/site-data';

@Component({
  selector: 'app-mission-vision',
  imports: [PageHeroComponent, CtaBannerComponent, IconComponent],
  template: `
    <app-page-hero
      eyebrow="Who We Are"
      title="Mission, Vision & Values"
      lead="The principles that guide every decision we make and every project we deliver."
    />

    <section class="section">
      <div class="container grid-2">
        <div class="glass-card mv-card">
          <span class="card-icon"><app-icon name="target" /></span>
          <h2>Our Mission</h2>
          <p>
            To deliver reliable, cost-efficient engineering solutions that exceed client expectations —
            built with quality workmanship, executed safely, and supported for the long term.
          </p>
        </div>
        <div class="glass-card mv-card">
          <span class="card-icon"><app-icon name="eye" /></span>
          <h2>Our Vision</h2>
          <p>
            To be the most trusted engineering services partner in the Philippines — recognized for
            technical excellence, integrity and the lasting value we create for clients and communities.
          </p>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <span class="eyebrow">Our Core Values</span>
        <h2 class="section-title">What we stand for</h2>
        <div class="grid-3" style="margin-top: 44px;">
          @for (v of values; track v.name) {
            <div class="glass-card">
              <span class="card-icon"><app-icon [name]="v.icon" /></span>
              <h3 class="v-title">{{ v.name }}</h3>
              <p class="v-text">{{ v.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <app-cta-banner title="Share our values?" lead="Partner with a team that puts integrity and quality at the center of every project." />
  `,
  styles: [`
    .mv-card h2 { font-size: 1.5rem; margin-bottom: 14px; }
    .mv-card p { color: var(--text-muted-dark); font-size: 1.02rem; }
    .v-title { font-size: 1.12rem; margin-bottom: 10px; }
    .v-text { color: var(--text-muted-dark); font-size: 0.93rem; }
  `],
})
export class MissionVisionComponent {
  values = VALUES;
}
