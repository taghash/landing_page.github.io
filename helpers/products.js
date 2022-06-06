import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

export const products = [
  {
    name: 'Analytics and Reporting',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Deal Flow Management',
    description: 'Bring your deals from Email, Whatsapp, Pitch forms into a single portal. Collaborate, communicate and close seamlessly.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Portfolio Management', description: "Centrally track your portfolio’s MIS, Investment and Valuation metrics. Improve governance in your portfolio by automatically detecting discrepancies in investor updates.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Fund Performance Management',
    description: 'Track your fund’s performance across multiple funds, currencies and investments across the lifetime of your fund.',
    href: '#',
    icon: RefreshIcon,
  },
]