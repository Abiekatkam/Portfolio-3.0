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
  id?: string;
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

export interface EducationProps {
  degree: string; 
  field: string; 
  institution: string;
  in: string;
  out: string;
  description?: string | undefined;
  images?: string[];
  location?: string;
  locationUrl?: string;
  skills?: string[] | [];
}

export interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string; 
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


export interface ProjectListProps {
  id: string;
  title: string;
  category: string;
  duration?: string;
  overview: string;
  contributions: string[];
  technologies: string[];
  impact: string[];
  coverImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface PageNavigationProps {
  previous?: {
    title: string;
    description: string;
    href: string;
  };

  next?: {
    title: string;
    description: string;
    href: string;
  };
}