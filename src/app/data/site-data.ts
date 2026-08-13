export interface ServiceDetail {
  slug: string;
  title: string;
  short: string;
  icon: string;
  intro: string;
  offerings: { name: string; description: string }[];
  highlights: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  scope: string[];
  stats: { label: string; value: string }[];
}

export const COMPANY = {
  name: 'ANHUE TECH',
  tagline: 'Engineering Services',
  slogan: 'Your trusted partner for reliable, cost-efficient solutions',
  address: 'L23 B3 Cynthia St., D.A. Compound, San Andres, Cainta, Rizal 1900',
  hours: 'Monday - Friday · 8:00 - 17:00',
  email: 'admin@anhuetech.com',
  phone: '(632) 8656 9232',
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'mechanical-electrical',
    title: 'Mechanical & Electrical Services',
    short: 'Design, installation and commissioning of mechanical and electrical systems for industrial and commercial facilities.',
    icon: 'bolt',
    intro:
      'Our mechanical and electrical division delivers end-to-end M&E solutions — from load analysis and system design to installation, testing and commissioning. We ensure code-compliant, energy-efficient systems that keep your facility running safely and reliably.',
    offerings: [
      { name: 'Electrical Design & Installation', description: 'Power distribution, panel boards, transformers, busway systems and lighting design built to Philippine Electrical Code standards.' },
      { name: 'HVAC Systems', description: 'Heating, ventilation and air-conditioning design, ducting works, chiller and AHU installation and balancing.' },
      { name: 'Generator & UPS Systems', description: 'Standby power solutions including genset installation, automatic transfer switches and uninterruptible power supplies.' },
      { name: 'Fire Detection & Suppression', description: 'FDAS design and installation, sprinkler systems and fire pump packages integrated with building management.' },
      { name: 'Testing & Commissioning', description: 'Insulation resistance testing, load bank testing, thermographic scanning and complete system handover documentation.' },
      { name: 'Energy Audits', description: 'Facility power quality studies and efficiency recommendations that reduce operating costs.' },
    ],
    highlights: ['Licensed electrical engineers', 'Code-compliant installations', '24/7 emergency response', 'Energy-efficient designs'],
  },
  {
    slug: 'construction-renovation',
    title: 'Construction & Renovation',
    short: 'Full-service general construction, fit-outs and renovation works for commercial, industrial and residential projects.',
    icon: 'crane',
    intro:
      'From ground-up construction to interior fit-outs and major renovations, we manage every phase of your build — planning, permits, procurement, execution and turnover — with strict quality control and transparent costing.',
    offerings: [
      { name: 'General Construction', description: 'Complete building construction from foundation to finishing, delivered on time and on budget.' },
      { name: 'Office & Commercial Fit-Outs', description: 'Interior architecture, partitions, ceilings, flooring and MEP integration for workspaces and retail.' },
      { name: 'Building Renovation', description: 'Structural retrofitting, facade upgrades and space reconfiguration for aging facilities.' },
      { name: 'Design & Build', description: 'Single-point responsibility from concept design through construction, minimizing risk and cost overruns.' },
      { name: 'Project Management', description: 'Scheduling, cost control, safety management and quality assurance across the project lifecycle.' },
      { name: 'Permits & Compliance', description: 'Assistance with building permits, occupancy certificates and regulatory documentation.' },
    ],
    highlights: ['Design & build capability', 'Dedicated project managers', 'Strict safety standards', 'Transparent costing'],
  },
  {
    slug: 'structural-civil',
    title: 'Structural & Civil Works',
    short: 'Structural steel fabrication, concrete works, earthworks and site development executed with engineering precision.',
    icon: 'beam',
    intro:
      'Our structural and civil team handles foundations, structural steel, reinforced concrete and site development works. We combine sound engineering analysis with disciplined field execution to build structures that last.',
    offerings: [
      { name: 'Structural Steel Works', description: 'Fabrication and erection of steel frames, trusses, mezzanines, platforms and canopies.' },
      { name: 'Reinforced Concrete Works', description: 'Foundations, columns, beams, slabs and retaining walls cast to specification.' },
      { name: 'Earthworks & Site Development', description: 'Excavation, grading, compaction, drainage and roadway construction.' },
      { name: 'Structural Retrofitting', description: 'Strengthening of existing structures including carbon fiber reinforcement and steel jacketing.' },
      { name: 'Structural Assessment', description: 'Condition surveys, structural integrity evaluation and as-built verification.' },
      { name: 'Waterproofing & Concrete Repair', description: 'Injection grouting, membrane systems and spall repair for durable structures.' },
    ],
    highlights: ['In-house fabrication', 'Certified welders', 'Materials testing', 'Engineered to code'],
  },
  {
    slug: 'water-systems',
    title: 'Water System Services',
    short: 'Water supply, treatment, plumbing and wastewater systems for buildings, industrial plants and communities.',
    icon: 'drop',
    intro:
      'We design and build complete water infrastructure — from deep wells and pumping stations to treatment plants and plumbing distribution — ensuring clean, reliable water supply and compliant wastewater management.',
    offerings: [
      { name: 'Water Treatment Plants', description: 'Filtration, softening, reverse osmosis and disinfection systems for potable and process water.' },
      { name: 'Pumping Stations & Deep Wells', description: 'Well drilling, submersible and booster pump systems with automated controls.' },
      { name: 'Plumbing & Sanitary Works', description: 'Complete building plumbing including supply lines, fixtures, and sanitary drainage.' },
      { name: 'Sewage Treatment Plants', description: 'STP design, installation and rehabilitation compliant with DENR effluent standards.' },
      { name: 'Rainwater Harvesting', description: 'Collection, storage and reuse systems that cut water costs and support sustainability.' },
      { name: 'Pipeline Works', description: 'Transmission and distribution pipelines with hydro-testing and leak detection.' },
    ],
    highlights: ['DENR-compliant designs', 'Automated pump controls', 'Potable water certified', 'Sustainable solutions'],
  },
  {
    slug: 'security-communication',
    title: 'Security & Communication Systems',
    short: 'CCTV, access control, structured cabling and integrated communication networks for safe, connected facilities.',
    icon: 'shield',
    intro:
      'We integrate modern electronic security and communication technologies — surveillance, access control, structured cabling and network infrastructure — into unified systems that protect your people and assets.',
    offerings: [
      { name: 'CCTV & Surveillance', description: 'IP camera systems, video analytics, NVR storage and remote monitoring solutions.' },
      { name: 'Access Control Systems', description: 'Card, biometric and mobile-credential access with time attendance integration.' },
      { name: 'Structured Cabling', description: 'Cat6/Cat6A and fiber optic backbone cabling, certified and fully documented.' },
      { name: 'Network Infrastructure', description: 'Switching, routing, wireless coverage design and server room build-outs.' },
      { name: 'PA & Intercom Systems', description: 'Public address, background music and intercom systems for buildings and campuses.' },
      { name: 'Alarm & Intrusion Detection', description: 'Perimeter protection, motion sensing and centralized alarm monitoring.' },
    ],
    highlights: ['Certified system integrators', 'Scalable IP platforms', 'Fully documented cabling', 'Remote monitoring ready'],
  },
  {
    slug: 'maintenance',
    title: 'Maintenance Services',
    short: 'Preventive and corrective maintenance programs that maximize uptime and extend the life of your facilities.',
    icon: 'gear',
    intro:
      'Our maintenance teams keep facilities performing at their best through planned preventive maintenance, rapid corrective response and condition-based monitoring — reducing downtime and total cost of ownership.',
    offerings: [
      { name: 'Preventive Maintenance Programs', description: 'Scheduled inspection and servicing of electrical, mechanical and plumbing systems.' },
      { name: 'HVAC Maintenance', description: 'Chiller, AHU, and split-type servicing, refrigerant management and coil cleaning.' },
      { name: 'Genset & Electrical PM', description: 'Generator load testing, panel thermal scanning, breaker servicing and re-torquing.' },
      { name: 'Corrective & Emergency Repairs', description: '24/7 response teams for breakdowns, leaks and electrical faults.' },
      { name: 'Facility Management Support', description: 'Embedded technicians and helpdesk support under service level agreements.' },
      { name: 'Equipment Overhaul', description: 'Pump, motor and compressor rebuilds with genuine parts and warranty.' },
    ],
    highlights: ['24/7 emergency response', 'SLA-backed programs', 'Skilled resident technicians', 'Digital maintenance logs'],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: 'industrial-plant-electrical-upgrade',
    title: 'Industrial Plant Electrical Upgrade',
    category: 'Mechanical & Electrical',
    location: 'Cainta, Rizal',
    year: '2024',
    summary: 'Complete power distribution upgrade for a manufacturing facility including new switchgear, transformers and standby generation.',
    scope: ['2000A main switchgear replacement', '1500kVA transformer installation', '1250kVA standby genset with ATS', 'Thermal scanning and load balancing'],
    stats: [
      { label: 'Capacity', value: '1.5 MVA' },
      { label: 'Duration', value: '6 months' },
      { label: 'Downtime', value: 'Zero' },
    ],
  },
  {
    slug: 'corporate-office-fit-out',
    title: 'Corporate Office Fit-Out',
    category: 'Construction & Renovation',
    location: 'Pasig City',
    year: '2024',
    summary: 'Design and build of a 2,400 sqm corporate headquarters with modern open-plan workspaces and integrated MEP systems.',
    scope: ['Interior architecture and space planning', 'Complete MEPF works', 'Structured cabling for 300 workstations', 'Acoustic meeting suites'],
    stats: [
      { label: 'Floor Area', value: '2,400 sqm' },
      { label: 'Duration', value: '4 months' },
      { label: 'Workstations', value: '300+' },
    ],
  },
  {
    slug: 'warehouse-steel-structure',
    title: 'Warehouse Steel Structure',
    category: 'Structural & Civil Works',
    location: 'Taytay, Rizal',
    year: '2023',
    summary: 'Fabrication and erection of a clear-span steel warehouse with reinforced concrete foundations and site development.',
    scope: ['320 tons structural steel fabrication', 'Clear-span truss erection', 'Reinforced concrete foundations', 'Site drainage and paving'],
    stats: [
      { label: 'Steel Tonnage', value: '320 T' },
      { label: 'Clear Span', value: '36 m' },
      { label: 'Duration', value: '8 months' },
    ],
  },
  {
    slug: 'water-treatment-facility',
    title: 'Water Treatment Facility',
    category: 'Water System Services',
    location: 'Antipolo City',
    year: '2023',
    summary: 'Turnkey water treatment plant delivering potable water for a residential community of 1,200 households.',
    scope: ['Deep well development', 'Filtration and chlorination systems', 'Elevated water storage tank', 'Distribution pipeline network'],
    stats: [
      { label: 'Capacity', value: '50 m³/hr' },
      { label: 'Households', value: '1,200' },
      { label: 'Pipeline', value: '4.2 km' },
    ],
  },
  {
    slug: 'campus-security-integration',
    title: 'Campus Security Integration',
    category: 'Security & Communication',
    location: 'Marikina City',
    year: '2024',
    summary: 'Integrated CCTV, access control and public address system across a multi-building school campus.',
    scope: ['180 IP cameras with analytics', 'Biometric access on 24 entry points', 'Campus-wide PA system', 'Fiber backbone between buildings'],
    stats: [
      { label: 'Cameras', value: '180' },
      { label: 'Buildings', value: '6' },
      { label: 'Fiber Runs', value: '3.5 km' },
    ],
  },
  {
    slug: 'facility-maintenance-program',
    title: 'Commercial Facility Maintenance Program',
    category: 'Maintenance Services',
    location: 'Quezon City',
    year: '2022 – Present',
    summary: 'Ongoing preventive maintenance contract covering HVAC, electrical and plumbing systems for a commercial complex.',
    scope: ['Monthly HVAC preventive maintenance', 'Quarterly electrical thermal scanning', 'Genset load testing', '24/7 emergency response coverage'],
    stats: [
      { label: 'Uptime', value: '99.8%' },
      { label: 'Assets Covered', value: '450+' },
      { label: 'Response Time', value: '< 2 hrs' },
    ],
  },
];

export const TEAM = [
  { name: 'Antonio Hue', role: 'Founder & Managing Director', bio: 'Over 25 years of experience leading engineering and construction projects across the Philippines.' },
  { name: 'Maria Santos', role: 'Chief Operations Officer', bio: 'Drives operational excellence, safety culture and on-time delivery across all project sites.' },
  { name: 'Ramon Dela Cruz', role: 'Head of Engineering', bio: 'Licensed professional engineer specializing in electrical systems design and power distribution.' },
  { name: 'Elena Reyes', role: 'Head of Construction', bio: 'Leads construction and renovation delivery with a focus on quality workmanship and cost control.' },
  { name: 'Jose Villanueva', role: 'Head of Maintenance Services', bio: 'Builds and manages preventive maintenance programs for industrial and commercial clients.' },
  { name: 'Carla Mendoza', role: 'Business Development Manager', bio: 'Partners with clients to shape solutions that match their technical and budget requirements.' },
];

export const VALUES = [
  { name: 'Integrity', description: 'We do what is right — honest costing, transparent reporting and accountable delivery.', icon: 'shield' },
  { name: 'Excellence', description: 'Quality workmanship in every weld, wire and wall. We never compromise on standards.', icon: 'star' },
  { name: 'Safety', description: 'Every worker goes home safe. Safety is engineered into every plan and every site.', icon: 'helmet' },
  { name: 'Innovation', description: 'We adopt modern methods and technologies that deliver better value to our clients.', icon: 'bulb' },
  { name: 'Reliability', description: 'We keep our promises — on schedule, on budget and built to last.', icon: 'clock' },
  { name: 'Client Focus', description: 'Long-lasting relationships built on trust, responsiveness and results.', icon: 'handshake' },
];

export const CLIENTS = [
  'Rizal Manufacturing Corp.', 'Metro Pacific Estates', 'San Andres Development Group', 'Cainta Industrial Park',
  'Eastwood Property Holdings', 'Sierra Logistics Inc.', 'Antipolo Water District', 'Marikina Learning Campus',
  'Pasig Commercial Ventures', 'Highland Foods Corporation', 'Vertex Realty Partners', 'Nova Retail Group',
];
