/**
 * @format
 */
import {
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/outline';
import dealflowIcon from '../public/thumbsUpDown.svg';

import { BriefcaseIcon } from '@heroicons/react/solid';
import dealflow from '../public/dealflow.svg';
import portfolio from '../public/portfolioManagement.svg';
import fund from '../public/fundPerformance.svg';
import lpReporting from '../public/lpReporting.svg';

export const products = [
  {
    name: 'Deal Flow Management',
    description:
      'Bring your deals from Email, Whatsapp, Pitch forms into a single portal.',
    href: 'dealflow',
    icon: ChevronDoubleUpIcon,
  },
  {
    name: 'Portfolio Management',
    description:
      'Centrally track your portfolio’s MIS, Investment and Valuation metrics. ',
    href: 'portfolio',
    icon: BriefcaseIcon,
  },
  {
    name: 'Fund Performance Management',
    description: 'Track your fund’s performance.',
    href: 'fund',
    icon: RefreshIcon,
  },
  {
    name: 'LP Reporting',
    description:
      'Create DIY Reports with metrics and charts from all the departments.',
    href: 'lpreporting',
    icon: ChartBarIcon,
  },
];

export const productsForHomePage = [
  {
    id: 1,
    name: 'Deal Flow Management',
    description: `Bring your deals from Email, Whatsapp,
     Pitch forms into a single portal. Collaborate, communicate and close seamlessly.`,
    image: dealflow,
  },
  {
    id: 2,
    name: 'Portfolio Management',
    description: `Centrally track your portfolio’s MIS, Investment and Valuation metrics.
       Improve governance in your portfolio by automatically detecting discrepancies in investor updates.`,
    image: portfolio,
  },
  {
    id: 3,
    name: 'Fund Performance Management',
    description: `Track your fund’s performance across multiple funds, currencies
     and investments across the lifetime of your fund.`,
    image: fund,
  },
  {
    id: 4,
    name: 'LP Reporting',
    description: `Create DIY Reports with metrics and charts from all the departments in the organization with qualitative
     and quantitative analysis laid on top. Brand your reports and track opens.`,
    image: lpReporting,
  },
];

export const more = [
  {
    name: 'Compare',
    description: "Compare Taghash with it's competitor",
    href: 'compare',
    icon: CursorClickIcon,
  },
];
