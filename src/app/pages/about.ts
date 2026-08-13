import { Component } from '@angular/core';
import { PageHeroComponent } from '../shared/page-hero';
import { CtaBannerComponent } from '../shared/cta-banner';
import { IconComponent } from '../shared/icon';

@Component({
  selector: 'app-about',
  imports: [PageHeroComponent, CtaBannerComponent, IconComponent],
  template: `
    <app-page-hero
      eyebrow="Who We Are"
      title="About ANHUE TECH"
      lead="An engineering services company built on integrity, quality workmanship and long-term client relationships."
    />

    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Our Story</span>
          <h2 class="section-title">Engineering with purpose since day one</h2>
          <p class="body-text">
            ANHUE TECH Engineering Services was founded to give industrial, commercial and residential
            clients a single trusted partner for their engineering needs. From our home base in Cainta,
            Rizal, we deliver mechanical, electrical, civil and specialized systems works across the
            Philippines.
          </p>
          <p class="body-text">
            What began as a small team of engineers has grown into a multi-disciplinary company with
            in-house design, fabrication and field execution capabilities. We take pride in projects
            delivered on time, on budget and built to last — and in the clients who keep coming back.
          </p>
        </div>
        <div class="stats-panel glass-card">
          @for (s of stats; track s.label) {
            <div class="stat">
              <span class="stat-value">{{ s.value }}</span>
              <span class="stat-label">{{ s.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <span class="eyebrow">Why Choose Us</span>
        <h2 class="section-title">What sets us apart</h2>
        <div class="grid-3" style="margin-top: 44px;">
          @for (d of differentiators; track d.title) {
            <div class="glass-card">
              <span class="card-icon"><app-icon [name]="d.icon" /></span>
              <h3 class="card-title">{{ d.title }}</h3>
              <p class="card-text">{{ d.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <app-cta-banner title="Want to know more about us?" lead="Get in touch and let's discuss how our team can support your next project." />
  `,
  styles: [`
    .split { display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: center; }
    .body-text { color: var(--text-muted-dark); margin-bottom: 18px; }
    .stats-panel { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .stats-panel:hover { transform: none; }
    .stat { text-align: center; padding: 24px 10px; }
    .stat-value { display: block; font-size: 2.2rem; font-weight: 900; color: var(--orange-500); }
    .stat-label { color: var(--text-muted-dark); font-size: 0.86rem; }
    .card-title { font-size: 1.1rem; margin-bottom: 10px; }
    .card-text { color: var(--text-muted-dark); font-size: 0.93rem; }
    @media (max-width: 900px) { .split { grid-template-columns: 1fr; } }
  `],
})
export class AboutComponent {
  stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '80+', label: 'Skilled Professionals' },
    { value: '98%', label: 'Client Retention' },
  ];
  differentiators = [
    { icon: 'users', title: 'Multi-Disciplinary Team', text: 'Licensed engineers, certified tradesmen and experienced project managers under one roof.' },
    { icon: 'helmet', title: 'Safety First Culture', text: 'Rigorous safety programs and toolbox practices protect our people and your site.' },
    { icon: 'gear', title: 'In-House Capability', text: 'Design, fabrication and installation handled internally for tighter quality and cost control.' },
    { icon: 'clock', title: 'On-Time Delivery', text: 'Disciplined scheduling and proactive coordination keep projects on track.' },
    { icon: 'shield', title: 'Quality Assurance', text: 'Documented QA/QC procedures and testing at every stage of the work.' },
    { icon: 'handshake', title: 'Aftercare & Support', text: 'Warranty support and maintenance programs long after turnover.' },
  ];
}
