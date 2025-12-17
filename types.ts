import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}
