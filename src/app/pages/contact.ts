import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeroComponent } from '../shared/page-hero';
import { IconComponent } from '../shared/icon';
import { COMPANY, SERVICES } from '../data/site-data';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, PageHeroComponent, IconComponent],
  template: `
    <app-page-hero
      eyebrow="Get In Touch"
      title="Contact / Request a Quote"
      lead="Tell us about your project and our engineers will respond with a detailed, transparent proposal."
    />

    <section class="section">
      <div class="container split">
        <div class="glass-card form-card">
          @if (submitted()) {
            <div class="success">
              <span class="success-ic"><app-icon name="check" /></span>
              <h3>Thank you!</h3>
              <p>Your request has been received. Our team will get back to you within one business day.</p>
              <button class="btn btn-ghost" (click)="reset()">Send another request</button>
            </div>
          } @else {
            <h3 class="form-title">Request a Quote</h3>
            <form [formGroup]="form" (ngSubmit)="submit()">
              <div class="row">
                <label>
                  <span>Full Name *</span>
                  <input formControlName="name" type="text" placeholder="Juan Dela Cruz" />
                </label>
                <label>
                  <span>Company</span>
                  <input formControlName="company" type="text" placeholder="Your company" />
                </label>
              </div>
              <div class="row">
                <label>
                  <span>Email *</span>
                  <input formControlName="email" type="email" placeholder="you@company.com" />
                </label>
                <label>
                  <span>Phone</span>
                  <input formControlName="phone" type="tel" placeholder="(0917) 000 0000" />
                </label>
              </div>
              <label>
                <span>Service Needed *</span>
                <select formControlName="service">
                  <option value="" disabled>Select a service</option>
                  @for (s of services; track s.slug) {
                    <option [value]="s.title">{{ s.title }}</option>
                  }
                  <option value="Other">Other / Not sure</option>
                </select>
              </label>
              <label>
                <span>Project Details *</span>
                <textarea formControlName="message" rows="5" placeholder="Describe your project, location and timeline..."></textarea>
              </label>
              @if (form.invalid && attempted()) {
                <p class="error">Please complete all required fields with valid information.</p>
              }
              <button class="btn btn-primary" type="submit">Submit Request <app-icon name="arrow" class="btn-ic" /></button>
            </form>
          }
        </div>

        <div class="side">
          <div class="glass-card side-card">
            <span class="card-icon"><app-icon name="pin" /></span>
            <h3>Visit Us</h3>
            <p>{{ company.address }}</p>
          </div>
          <div class="glass-card side-card">
            <span class="card-icon"><app-icon name="clock" /></span>
            <h3>Working Hours</h3>
            <p>{{ company.hours }}</p>
          </div>
          <div class="glass-card side-card">
            <span class="card-icon"><app-icon name="phone" /></span>
            <h3>Call or Email</h3>
            <p>{{ company.phone }}<br />{{ company.email }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .split { display: grid; grid-template-columns: 1.6fr 1fr; gap: 32px; align-items: start; }
    .form-card:hover { transform: none; }
    .form-title { font-size: 1.4rem; margin-bottom: 24px; }
    form { display: flex; flex-direction: column; gap: 18px; }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    label { display: flex; flex-direction: column; gap: 8px; }
    label span { font-size: 0.85rem; font-weight: 600; color: var(--grey-300); }
    input, select, textarea {
      padding: 13px 16px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--glass-border);
      color: #fff;
      font-family: inherit;
      font-size: 0.95rem;
      transition: border-color 0.2s ease;
    }
    input::placeholder, textarea::placeholder { color: var(--grey-500); }
    input:focus, select:focus, textarea:focus { outline: none; border-color: var(--orange-500); }
    select option { background: var(--navy-800); }
    textarea { resize: vertical; }
    .error { color: #f87171; font-size: 0.88rem; }
    .btn-ic { width: 18px; height: 18px; }
    form .btn { align-self: flex-start; }
    .side { display: flex; flex-direction: column; gap: 20px; }
    .side-card h3 { font-size: 1.05rem; margin-bottom: 8px; }
    .side-card p { color: var(--text-muted-dark); font-size: 0.92rem; }
    .success { text-align: center; padding: 36px 12px; }
    .success-ic {
      width: 64px; height: 64px; border-radius: 50%;
      display: grid; place-items: center; margin: 0 auto 20px;
      background: rgba(34, 197, 94, 0.16); color: #4ade80;
    }
    .success-ic app-icon { width: 32px; height: 32px; }
    .success h3 { font-size: 1.3rem; margin-bottom: 10px; }
    .success p { color: var(--text-muted-dark); margin-bottom: 24px; }
    @media (max-width: 900px) {
      .split { grid-template-columns: 1fr; }
      .row { grid-template-columns: 1fr; }
    }
  `],
})
export class ContactComponent {
  company = COMPANY;
  services = SERVICES;
  submitted = signal(false);
  attempted = signal(false);

  form;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      name: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      service: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submit() {
    this.attempted.set(true);
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  reset() {
    this.form.reset();
    this.attempted.set(false);
    this.submitted.set(false);
  }
}
