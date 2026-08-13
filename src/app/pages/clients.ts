import { Component } from '@angular/core';
import { PageHeroComponent } from '../shared/page-hero';
import { CtaBannerComponent } from '../shared/cta-banner';
import { IconComponent } from '../shared/icon';
import { CLIENTS } from '../data/site-data';

@Component({
  selector: 'app-clients',
  imports: [PageHeroComponent, CtaBannerComponent, IconComponent],
  template: `
    <app-page-hero
      eyebrow="Partnerships"
      title="Clients & Partners"
      lead="We're proud to serve organizations across manufacturing, real estate, logistics, education and public utilities."
    />

    <section class="section">
      <div class="container">
        <div class="grid-4">
          @for (c of clients; track c) {
            <div class="glass-card client-card">
              <span class="client-ic"><app-icon name="building" /></span>
              <span class="client-name">{{ c }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <span class="eyebrow">Testimonials</span>
        <h2 class="section-title">What our clients say</h2>
        <div class="grid-3" style="margin-top: 44px;">
          @for (t of testimonials; track t.author) {
            <div class="glass-card quote-card">
              <span class="quote-mark">“</span>
              <p>{{ t.quote }}</p>
              <div class="author">
                <strong>{{ t.author }}</strong>
                <span>{{ t.role }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <app-cta-banner title="Become a partner" lead="Join the growing list of organizations that trust ANHUE TECH with their facilities." />
  `,
  styles: [`
    .client-card {
      display: flex; flex-direction: column; align-items: center; gap: 14px;
      text-align: center; padding: 28px 18px;
    }
    .client-ic { width: 38px; height: 38px; color: var(--orange-500); }
    .client-name { font-weight: 700; font-size: 0.94rem; color: var(--text-on-dark); }
    .quote-card { display: flex; flex-direction: column; }
    .quote-mark { font-size: 3rem; line-height: 1; color: var(--orange-500); font-weight: 900; }
    .quote-card p { color: var(--text-muted-dark); font-size: 0.95rem; flex: 1; margin: 8px 0 20px; }
    .author { display: flex; flex-direction: column; }
    .author strong { color: #fff; font-size: 0.95rem; }
    .author span { color: var(--grey-500); font-size: 0.83rem; }
  `],
})
export class ClientsComponent {
  clients = CLIENTS;
  testimonials = [
    {
      quote: 'ANHUE TECH delivered our electrical upgrade with zero downtime to our production lines. Professional from survey to turnover.',
      author: 'Plant Manager',
      role: 'Rizal Manufacturing Corp.',
    },
    {
      quote: 'Their design-and-build team turned our office fit-out around in four months — on budget and beautifully executed.',
      author: 'Facilities Director',
      role: 'Pasig Commercial Ventures',
    },
    {
      quote: 'The maintenance program has kept our complex at 99.8% uptime. Their response teams are fast and thorough.',
      author: 'Property Manager',
      role: 'Eastwood Property Holdings',
    },
  ];
}
