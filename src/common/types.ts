import { IconName } from "@fortawesome/pro-light-svg-icons";

export interface skillSet {
  label: string;
  icon: IconName;
  description: string;
  skillList: string[]
}

export interface project {
  title: string;
  description: string;
  image: string;
  direction: 'left' | 'right';
}

export interface configType {
  skills: skillSet[],
  projects: project[]
}
