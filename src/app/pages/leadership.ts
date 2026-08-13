import { Component } from '@angular/core';
import { PageHeroComponent } from '../shared/page-hero';
import { CtaBannerComponent } from '../shared/cta-banner';
import { TEAM } from '../data/site-data';

@Component({
  selector: 'app-leadership',
  imports: [PageHeroComponent, CtaBannerComponent],
  template: `
    <app-page-hero
      eyebrow="Who We Are"
      title="Leadership & Team"
      lead="Experienced engineers and managers who lead from the field — hands-on, accountable and committed to your success."
    />

    <section class="section">
      <div class="container">
        <div class="grid-3">
          @for (m of team; track m.name) {
            <div class="glass-card member">
              <div class="avatar">{{ initials(m.name) }}</div>
              <h3>{{ m.name }}</h3>
              <span class="role">{{ m.role }}</span>
              <p>{{ m.bio }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <span class="eyebrow">Our People</span>
        <h2 class="section-title">Backed by 80+ skilled professionals</h2>
        <p class="section-lead">
          Behind our leadership team is a full complement of licensed engineers, certified welders,
          electricians, plumbers, technicians and safety officers — trained, equipped and ready to deliver.
        </p>
      </div>
    </section>

    <app-cta-banner title="Work with our team" lead="Bring your project requirements to engineers who take ownership from kickoff to turnover." />
  `,
  styles: [`
    .member { text-align: center; }
    .avatar {
      width: 88px; height: 88px; border-radius: 50%;
      display: grid; place-items: center; margin: 0 auto 20px;
      background: linear-gradient(135deg, var(--orange-500), var(--orange-600));
      font-weight: 900; font-size: 1.6rem; color: #fff;
    }
    .member h3 { font-size: 1.12rem; margin-bottom: 4px; }
    .role { display: block; color: var(--orange-400); font-weight: 700; font-size: 0.86rem; margin-bottom: 14px; }
    .member p { color: var(--text-muted-dark); font-size: 0.92rem; }
  `],
})
export class LeadershipComponent {
  team = TEAM;

  initials(name: string): string {
    return name.split(' ').map((n) => n[0]).slice(0, 2).join('');
  }
}
