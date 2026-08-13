import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../shared/page-hero';
import { CtaBannerComponent } from '../shared/cta-banner';
import { IconComponent } from '../shared/icon';
import { SERVICES } from '../data/site-data';

@Component({
  selector: 'app-services',
  imports: [RouterLink, PageHeroComponent, CtaBannerComponent, IconComponent],
  template: `
    <app-page-hero
      eyebrow="What We Do"
      title="Services Overview"
      lead="Six specialized service lines covering the full lifecycle of your facility — design, build, integrate and maintain."
    />

    <section class="section">
      <div class="container grid-3">
        @for (s of services; track s.slug) {
          <a class="glass-card service-card" [routerLink]="['/services', s.slug]">
            <span class="card-icon"><app-icon [name]="s.icon" /></span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.short }}</p>
            <span class="link">View details <app-icon name="arrow" class="link-ic" /></span>
          </a>
        }
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <span class="eyebrow">How We Work</span>
        <h2 class="section-title">A proven delivery process</h2>
        <div class="grid-4" style="margin-top: 44px;">
          @for (step of process; track step.n) {
            <div class="glass-card step">
              <span class="step-n">{{ step.n }}</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <app-cta-banner />
  `,
  styles: [`
    .service-card { display: flex; flex-direction: column; }
    .service-card h3 { font-size: 1.15rem; margin-bottom: 10px; }
    .service-card p { color: var(--text-muted-dark); font-size: 0.93rem; flex: 1; }
    .link { display: inline-flex; align-items: center; gap: 8px; margin-top: 18px; color: var(--orange-500); font-weight: 700; font-size: 0.9rem; }
    .link-ic { width: 16px; height: 16px; }
    .step-n {
      display: inline-block; font-size: 2rem; font-weight: 900;
      color: rgba(249, 115, 22, 0.55); margin-bottom: 12px;
    }
    .step h3 { font-size: 1.05rem; margin-bottom: 8px; }
    .step p { color: var(--text-muted-dark); font-size: 0.9rem; }
  `],
})
export class ServicesComponent {
  services = SERVICES;
  process = [
    { n: '01', title: 'Consult & Assess', text: 'We study your requirements, survey the site and define the scope with you.' },
    { n: '02', title: 'Design & Propose', text: 'Engineered designs with transparent, itemized costing — no surprises.' },
    { n: '03', title: 'Build & Integrate', text: 'Disciplined execution with QA/QC checkpoints and safety management.' },
    { n: '04', title: 'Test & Support', text: 'Commissioning, documentation, warranty and optional maintenance programs.' },
  ];
}
