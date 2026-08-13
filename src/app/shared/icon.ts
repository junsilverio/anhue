import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const ICONS: Record<string, string> = {
  bolt: '<path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z"/>',
  crane: '<path d="M3 21h18M6 21V8l10-5v18M16 3l5 3v4h-5M9 12h4M9 16h4"/>',
  beam: '<path d="M3 6h18M3 18h18M6 6v12M12 6v12M18 6v12M6 6l6 12M12 6l6 12"/>',
  drop: '<path d="M12 2s7 7.5 7 12.5A7 7 0 0 1 5 14.5C5 9.5 12 2 12 2Z"/><path d="M9 14a3 3 0 0 0 3 3"/>',
  shield: '<path d="M12 2 4 5.5V11c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5.5L12 2Z"/><path d="m9 12 2 2 4-4"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.51 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1Z"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/>',
  helmet: '<path d="M4 15a8 8 0 0 1 16 0M2 15h20v3H2zM10 4h4v4h-4z"/>',
  bulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  handshake: '<path d="m11 17 2 2a2 2 0 1 0 3-3M14 14l2.5 2.5a2 2 0 1 0 3-3L14 8l-3 2a2.4 2.4 0 0 1-3-3l3.5-2.5a5.5 5.5 0 0 1 6 0L21 7M2 7l5 8M22 7l-4 8M3.5 5.5 8 8"/>',
  pin: '<path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4.5-6.2"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4M8 7h2M14 7h2M8 11h2M14 11h2"/>',
};

@Component({
  selector: 'app-icon',
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" [innerHTML]="path"></svg>`,
  styles: [`:host { display: inline-flex; } svg { width: 100%; height: 100%; }`],
})
export class IconComponent {
  path: SafeHtml = '';

  constructor(private readonly sanitizer: DomSanitizer) {}

  @Input() set name(value: string) {
    this.path = this.sanitizer.bypassSecurityTrustHtml(ICONS[value] ?? '');
  }
}
