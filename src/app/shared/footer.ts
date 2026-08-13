import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../data/site-data';
import { IconComponent } from './icon';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, IconComponent],
  template: `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <div class="brand-name">ANHUE <em>TECH</em></div>
          <div class="brand-sub">Engineering Services</div>
          <p class="blurb">{{ company.slogan }}.</p>
        </div>
        <div>
          <h4>Company</h4>
          <a routerLink="/about">About Us</a>
          <a routerLink="/mission-vision-values">Mission, Vision & Values</a>
          <a routerLink="/leadership">Leadership & Team</a>
          <a routerLink="/clients">Clients & Partners</a>
        </div>
        <div>
          <h4>Services</h4>
          <a routerLink="/services/mechanical-electrical">Mechanical & Electrical</a>
          <a routerLink="/services/construction-renovation">Construction & Renovation</a>
          <a routerLink="/services/structural-civil">Structural & Civil Works</a>
          <a routerLink="/services/water-systems">Water Systems</a>
          <a routerLink="/services/security-communication">Security & Communication</a>
          <a routerLink="/services/maintenance">Maintenance Services</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p class="contact-line"><app-icon name="pin" class="ic" />{{ company.address }}</p>
          <p class="contact-line"><app-icon name="clock" class="ic" />{{ company.hours }}</p>
          <p class="contact-line"><app-icon name="mail" class="ic" />{{ company.email }}</p>
          <p class="contact-line"><app-icon name="phone" class="ic" />{{ company.phone }}</p>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© {{ year }} ANHUE TECH Engineering Services. All rights reserved.</span>
        <a routerLink="/contact" class="accent">Request a Quote →</a>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #060d1a;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
      padding-top: 64px;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1.2fr 1.4fr;
      gap: 40px;
      padding-bottom: 48px;
    }
    .brand-name { font-weight: 900; font-size: 1.3rem; color: #fff; }
    .brand-name em { font-style: normal; color: var(--orange-500); }
    .brand-sub { font-size: 0.62rem; letter-spacing: 0.34em; text-transform: uppercase; color: var(--grey-300); margin-bottom: 16px; }
    .blurb { color: var(--text-muted-dark); font-size: 0.92rem; max-width: 280px; }
    h4 { font-size: 0.95rem; margin-bottom: 16px; color: #fff; }
    .footer-grid a { display: block; color: var(--text-muted-dark); font-size: 0.9rem; padding: 5px 0; transition: color 0.2s ease; }
    .footer-grid a:hover { color: var(--orange-400); }
    .contact-line { display: flex; gap: 10px; color: var(--text-muted-dark); font-size: 0.9rem; padding: 5px 0; align-items: flex-start; }
    .ic { width: 17px; height: 17px; flex-shrink: 0; color: var(--orange-500); margin-top: 4px; }
    .footer-bottom {
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
      padding-block: 22px;
      color: var(--grey-500); font-size: 0.85rem;
    }
    @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr; } }
  `],
})
export class FooterComponent {
  company = COMPANY;
  year = new Date().getFullYear();
}
