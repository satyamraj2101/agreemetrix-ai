import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
  align?: 'left' | 'right';
  children?: ReactNode;
}

export interface StatItem {
  value: string;
  label: string;
  trend?: string;
  trendUp?: boolean;
}
