import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, SERVICES, PROJECTS } from '../data/site-data';
import { IconComponent } from '../shared/icon';
import { CtaBannerComponent } from '../shared/cta-banner';

@Component({
  selector: 'app-home',
  imports: [RouterLink, IconComponent, CtaBannerComponent],
  template: `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-art"></div>
      <div class="hero-diagonal"></div>
      <div class="container hero-inner fade-up">
        <h1 class="hero-title">
          <span class="line">ANHUE <span class="accent">TECH</span></span>
          <span class="line">ENGINEERING</span>
          <span class="line">SERVICES</span>
        </h1>
        <p class="hero-sub">{{ company.slogan }}</p>
        <div class="hero-actions">
          <a routerLink="/services" class="btn btn-primary">Our Services <app-icon name="arrow" class="btn-ic" /></a>
          <a routerLink="/projects" class="btn btn-ghost">Explore Our Work <app-icon name="arrow" class="btn-ic" /></a>
        </div>
      </div>

      <!-- Info strip -->
      <div class="container">
        <div class="glass-card info-strip">
          <div class="info-item">
            <app-icon name="pin" class="info-ic" />
            <div>
              <h4>Location</h4>
              <p>{{ company.address }}</p>
            </div>
          </div>
          <div class="info-item">
            <app-icon name="clock" class="info-ic" />
            <div>
              <h4>Working Hours</h4>
              <p>{{ company.hours }}</p>
            </div>
          </div>
          <div class="info-item">
            <app-icon name="mail" class="info-ic" />
            <div>
              <h4>Stay Connected</h4>
              <p>{{ company.email }}<br />{{ company.phone }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Value pillars -->
    <section class="section">
      <div class="container">
        <div class="grid-3 pillars">
          @for (p of pillars; track p.title) {
            <div class="pillar">
              <span class="card-icon"><app-icon [name]="p.icon" /></span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Services preview -->
    <section class="section section-alt">
      <div class="container">
        <span class="eyebrow">What We Do</span>
        <h2 class="section-title">Complete Engineering Solutions</h2>
        <p class="section-lead">Six specialized service lines, one accountable partner — from design to build to maintain.</p>
        <div class="grid-3" style="margin-top: 44px;">
          @for (s of services; track s.slug) {
            <a class="glass-card service-card" [routerLink]="['/services', s.slug]">
              <span class="card-icon"><app-icon [name]="s.icon" /></span>
              <h3>{{ s.title }}</h3>
              <p>{{ s.short }}</p>
              <span class="link">Learn more <app-icon name="arrow" class="link-ic" /></span>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- Featured projects -->
    <section class="section">
      <div class="container">
        <span class="eyebrow">Our Work</span>
        <h2 class="section-title">Featured Projects</h2>
        <div class="grid-3" style="margin-top: 44px;">
          @for (pr of featured; track pr.slug) {
            <a class="glass-card project-card" [routerLink]="['/projects', pr.slug]">
              <span class="chip">{{ pr.category }}</span>
              <h3>{{ pr.title }}</h3>
              <p>{{ pr.summary }}</p>
              <span class="meta">{{ pr.location }} · {{ pr.year }}</span>
            </a>
          }
        </div>
        <div style="margin-top: 40px; text-align: center;">
          <a routerLink="/projects" class="btn btn-ghost">View All Projects <app-icon name="arrow" class="btn-ic" /></a>
        </div>
      </div>
    </section>

    <app-cta-banner />
  `,
  styles: [`
    .hero {
      position: relative;
      overflow: hidden;
      padding-bottom: 72px;
      background:
        radial-gradient(1100px 560px at 78% 20%, rgba(249, 115, 22, 0.14), transparent 60%),
        linear-gradient(120deg, var(--navy-900) 45%, var(--navy-700) 100%);
    }
    .hero-art {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
      background-size: 56px 56px;
      mask-image: radial-gradient(ellipse at 75% 30%, #000 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-diagonal {
      position: absolute; right: -8%; top: -20%;
      width: 42%; height: 160%;
      background: linear-gradient(135deg, rgba(249, 115, 22, 0.38), rgba(249, 115, 22, 0.06));
      transform: skewX(-16deg);
      pointer-events: none;
    }
    .hero-inner { position: relative; padding: 110px 0 80px; }
    .hero-title { font-size: clamp(2.6rem, 6.4vw, 4.6rem); font-weight: 900; }
    .hero-title .line { display: block; }
    .hero-sub { margin-top: 22px; font-size: 1.2rem; color: var(--grey-300); max-width: 460px; }
    .hero-actions { display: flex; gap: 16px; margin-top: 36px; flex-wrap: wrap; }
    .btn-ic { width: 18px; height: 18px; }

    .info-strip {
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      background: rgba(15, 32, 56, 0.85);
      padding: 36px 40px;
    }
    .info-strip:hover { transform: none; }
    .info-item { display: flex; gap: 16px; align-items: flex-start; }
    .info-ic { width: 40px; height: 40px; color: var(--orange-500); flex-shrink: 0; }
    .info-item h4 { text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.82rem; margin-bottom: 6px; }
    .info-item p { color: var(--text-muted-dark); font-size: 0.92rem; }
    @media (max-width: 900px) { .info-strip { grid-template-columns: 1fr; } }

    .pillars .pillar { text-align: center; padding: 12px; }
    .pillars .card-icon { margin-inline: auto; background: rgba(249, 115, 22, 0.12); }
    .pillar h3 { font-size: 1.1rem; margin-bottom: 10px; }
    .pillar p { color: var(--text-muted-dark); font-size: 0.94rem; }

    .service-card { display: flex; flex-direction: column; }
    .service-card h3 { font-size: 1.15rem; margin-bottom: 10px; }
    .service-card p { color: var(--text-muted-dark); font-size: 0.93rem; flex: 1; }
    .link { display: inline-flex; align-items: center; gap: 8px; margin-top: 18px; color: var(--orange-500); font-weight: 700; font-size: 0.9rem; }
    .link-ic { width: 16px; height: 16px; }

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
  `],
})
export class HomeComponent {
  company = COMPANY;
  services = SERVICES;
  featured = PROJECTS.slice(0, 3);
  pillars = [
    { icon: 'shield', title: 'Reliable', text: 'Delivering dependable solutions you can count on.' },
    { icon: 'gear', title: 'Cost-Efficient', text: 'Smart engineering solutions that maximize value.' },
    { icon: 'users', title: 'Experienced Team', text: 'Skilled professionals with decades of industry expertise.' },
    { icon: 'helmet', title: 'Quality Workmanship', text: 'Committed to excellence in every project we undertake.' },
    { icon: 'handshake', title: 'Client Focused', text: 'Building long-lasting relationships through trust and results.' },
  ];
}
