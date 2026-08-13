import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  template: `
    <section class="page-hero">
      <div class="hero-decor"></div>
      <div class="container fade-up">
        <span class="eyebrow">{{ eyebrow }}</span>
        <h1 class="hero-title">{{ title }}</h1>
        @if (lead) {
          <p class="hero-lead">{{ lead }}</p>
        }
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      position: relative;
      padding: 110px 0 90px;
      background:
        radial-gradient(900px 420px at 85% -10%, rgba(249, 115, 22, 0.16), transparent 60%),
        linear-gradient(135deg, var(--navy-800) 0%, var(--navy-900) 65%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      overflow: hidden;
    }
    .hero-decor {
      position: absolute;
      right: -120px; top: -80px;
      width: 480px; height: 480px;
      background: linear-gradient(135deg, rgba(249, 115, 22, 0.22), transparent 70%);
      clip-path: polygon(35% 0, 100% 0, 100% 100%, 65% 100%);
      pointer-events: none;
    }
    .hero-title { font-size: clamp(2rem, 4.5vw, 3.2rem); margin-bottom: 16px; }
    .hero-lead { color: var(--text-muted-dark); max-width: 640px; font-size: 1.1rem; }
  `],
})
export class PageHeroComponent {
  @Input({ required: true }) title = '';
  @Input() eyebrow = 'ANHUE TECH';
  @Input() lead = '';
}
