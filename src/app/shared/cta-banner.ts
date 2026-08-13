import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink],
  template: `
    <section class="cta-banner">
      <div class="container glass-card cta-card">
        <div>
          <h2>{{ title }}</h2>
          <p>{{ lead }}</p>
        </div>
        <a routerLink="/contact" class="btn btn-primary">Request a Quote</a>
      </div>
    </section>
  `,
  styles: [`
    .cta-banner { padding-block: 72px; }
    .cta-card {
      display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
      background: linear-gradient(120deg, rgba(249, 115, 22, 0.16), rgba(255, 255, 255, 0.05));
      padding: 44px 48px;
    }
    .cta-card:hover { transform: none; }
    h2 { font-size: clamp(1.4rem, 2.6vw, 1.9rem); margin-bottom: 8px; }
    p { color: var(--text-muted-dark); max-width: 560px; }
  `],
})
export class CtaBannerComponent {
  @Input() title = 'Ready to start your project?';
  @Input() lead = 'Talk to our engineers today and get a detailed, transparent proposal for your requirements.';
}
