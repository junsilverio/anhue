import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home').then((m) => m.HomeComponent),
    title: 'ANHUE TECH Engineering Services',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about').then((m) => m.AboutComponent),
    title: 'About Us | ANHUE TECH',
  },
  {
    path: 'mission-vision-values',
    loadComponent: () => import('./pages/mission-vision').then((m) => m.MissionVisionComponent),
    title: 'Mission, Vision & Values | ANHUE TECH',
  },
  {
    path: 'leadership',
    loadComponent: () => import('./pages/leadership').then((m) => m.LeadershipComponent),
    title: 'Leadership & Team | ANHUE TECH',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services').then((m) => m.ServicesComponent),
    title: 'Services Overview | ANHUE TECH',
  },
  {
    path: 'services/:slug',
    loadComponent: () => import('./pages/service-detail').then((m) => m.ServiceDetailComponent),
    title: 'Service Details | ANHUE TECH',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects').then((m) => m.ProjectsComponent),
    title: 'Projects Portfolio | ANHUE TECH',
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/project-detail').then((m) => m.ProjectDetailComponent),
    title: 'Project Details | ANHUE TECH',
  },
  {
    path: 'clients',
    loadComponent: () => import('./pages/clients').then((m) => m.ClientsComponent),
    title: 'Clients & Partners | ANHUE TECH',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact').then((m) => m.ContactComponent),
    title: 'Contact / Request a Quote | ANHUE TECH',
  },
  { path: '**', redirectTo: '' },
];
