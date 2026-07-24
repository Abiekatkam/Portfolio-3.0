export interface WorkProps {
  position: string;
  in: string;
  out: string;
  description: string;
  images?: string[];
  projects?: WorksProjectsProps[];
  company: {
    name: string;
    website: string;
  };
}

export interface WorksProjectsProps {
  name: string;
  description: string;

  started?: string;
  ended?: string;
  active?: boolean;

  images?: string[];

  links?: {
    name: string;
    url: string;
  }[];
}

export interface MotivationQuote {
  id: number;
  sanskrit: string;
  english: string;
}

export interface EducationProps {
  degree: string; 
  field: string; 
  institution: string;
  in: string;
  out: string;
  description?: string;
  images?: string[];
  location?: string;
  locationUrl?: string;
  skills?: string[];
}

export interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string; // Can be any valid CSS color including hex, rgb, rgba, hsl, var(--color)
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number | string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;          
  coverImage: string;   
  author: string;
  source: string;        
  publishedAt: string;   
  readTime: string;      
}
