export interface WorkProps {
  position: string;
  in: string;
  out: string;
  description: string;
  projects?: {
    name: string;
    description: string;
    started?: string;
    ended?: string;
    active?: boolean;
    links?: {
      name: string;
      url: string;
    };
  };
  company: {
    name: string;
    website: string;
  };
}
