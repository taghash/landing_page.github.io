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
    name: 'Deal Flow Management',
    description: 'Bring your deals from Email, Whatsapp, Pitch forms into a single portal.',
    href: 'dealflow',
    icon: CursorClickIcon,
  },
  { name: 'Portfolio Management', description: "Centrally track your portfolio’s MIS, Investment and Valuation metrics. ", href: 'portfolio', icon: ShieldCheckIcon },
  {
    name: 'Fund Performance Management',
    description: 'Track your fund’s performance.',
    href: 'fund',
    icon: RefreshIcon,
  },
  {
    name: 'LP Reporting',
    description: 'Create DIY Reports with metrics and charts from all the departments.',
    href: 'lpreporting',
    icon: ChartBarIcon
  }
]