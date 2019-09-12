import { IconName, IconLookup } from "@fortawesome/fontawesome-svg-core";

export interface skillSet {
  label: string;
  icon: IconName;
  skillList: string[];
}

export interface project {
  title: string;
  description: string;
  image: string;
  direction: 'left' | 'right';
}

export interface link {
  icon: IconLookup;
  title: string;
  link: string;
}

export interface configType {
  skills: skillSet[];
  projects: project[];
  links: link[];
}
