export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Setu Sai Ram Y',
    role: 'Data Analyst and UI/UX Designer',
    department: 'Leadership',
    bio: 'Blends analytical precision with creativity to deliver impactful digital solutions and data-driven experiences.',
    image: 'images/usericon.png',
    skills: ['Strategic Planning', 'Business Development', 'Team Leadership', 'Product Vision'],
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      // twitter: 'https://twitter.com/sarahjohnson',
      github: 'https://github.com/michaelchen'
    }
  },
  {
    id: '2',
    name: 'Praneeth',
    role: 'Full Stack Developer',
    department: 'Leadership',
    bio: 'Leads with technical expertise, building scalable and innovative solutions across the stack.',
    image: 'images/usericon.png',
    skills: ['System Architecture', 'AI/ML', 'Cloud Computing', 'Technical Leadership'],
    social: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      github: 'https://github.com/michaelchen'
    }
  },
];

export const departments = ['All', 'Leadership', 'Engineering', 'Design', 'Operations'];