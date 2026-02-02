export interface StatInsight {
  key: string
  value: number
  trend: string
  helper: string
  icon: string
  accent: string
}

export interface ActivityItem {
  id: number
  project: string
  description: string
  time: string
  tag: string
  color: string
}

export interface ReviewItem {
  id: number
  project: string
  date: string
  type: 'design' | 'tech' | 'site'
  status: 'pending' | 'confirmed' | 'draft'
  facilitator: string
}

export const statTiles: StatInsight[] = [
  {
    key: 'dashboard.stats.activeProjects',
    value: 18,
    trend: '+2 vs semaine dernière',
    helper: 'Paris, Lyon, Marseille',
    icon: 'mdi-domain',
    accent: 'primary',
  },
  {
    key: 'dashboard.stats.resolvedAlerts',
    value: 12,
    trend: '4 urgences levées',
    helper: 'Structures & fluides',
    icon: 'mdi-alert-circle-check',
    accent: 'secondary',
  },
  {
    key: 'dashboard.stats.reviewsPending',
    value: 5,
    trend: '3 avant vendredi',
    helper: 'Projets Île-de-France',
    icon: 'mdi-clipboard-text-clock',
    accent: 'info',
  },
  {
    key: 'dashboard.stats.siteVisits',
    value: 9,
    trend: '2 visites ajoutées',
    helper: 'Semaine du 9 février',
    icon: 'mdi-map-marker-path',
    accent: 'warning',
  },
]

export const activityFeed: ActivityItem[] = [
  {
    id: 1,
    project: 'Grand Opéra',
    description: "Maquette BIM V4 validée et partagée aux bureaux d'études",
    time: '08:45',
    tag: 'BIM',
    color: 'primary',
  },
  {
    id: 2,
    project: 'Campus Nova',
    description: 'Décision comité : validation façade double-peau',
    time: '10:12',
    tag: 'Comité',
    color: 'secondary',
  },
  {
    id: 3,
    project: 'Tour Elan',
    description: 'Note sécurité incendie mise à jour par Atelier Lenoir',
    time: '11:20',
    tag: 'Sécurité',
    color: 'error',
  },
  {
    id: 4,
    project: 'EcoQuartier Rive Sud',
    description: 'Compte-rendu visite chantier ajouté (lot C3)',
    time: '14:05',
    tag: 'Chantier',
    color: 'success',
  },
]

export const reviewSchedule: ReviewItem[] = [
  {
    id: 1,
    project: 'Tour Elan',
    date: '2026-02-05',
    type: 'tech',
    status: 'pending',
    facilitator: 'Atelier Atria',
  },
  {
    id: 2,
    project: 'Grand Opéra',
    date: '2026-02-11',
    type: 'design',
    status: 'confirmed',
    facilitator: 'Studio ADN',
  },
  {
    id: 3,
    project: 'Campagne Horizon',
    date: '2026-02-14',
    type: 'site',
    status: 'draft',
    facilitator: 'Agence Terranova',
  },
]
