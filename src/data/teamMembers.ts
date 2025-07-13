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
      linkedin: 'https://www.linkedin.com/in/setusairam-y/',
      // twitter: 'https://twitter.com/sarahjohnson',
      github: 'https://github.com/setusairam'
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
      linkedin: 'https://www.linkedin.com/in/pinnamaneni-praneeth/',
      github: 'https://github.com/pinnamanenipraneeth08'
    }
  },
  {
    id: '3',
    name: 'Naga Sai',
    role: 'App & Full Stack Developer',
    department: 'Leadership',
    bio: 'Leads with technical expertise, building scalable and innovative solutions across the stack.',
    image: 'images/usericon.png',
    skills: ['System Architecture', 'AI/ML', 'Cloud Computing', 'Technical Leadership'],
    social: {
      linkedin: 'https://www.linkedin.com/in/sirius-ar/',
      github: 'https://github.com/sirius54817'
    }
  },
  {
    id: '4',
    name: 'Somanadh',
    role: 'Mobile app Developer',
    department: 'Leadership',
    bio: 'Leads with technical expertise, building scalable and innovative solutions across the stack.',
    image: 'images/usericon.png',
    skills: ['System Architecture', 'AI/ML', 'Cloud Computing', 'Technical Leadership'],
    social: {
      linkedin: 'https://www.linkedin.com/in/somanadh-chowdary-jonnalagadda-337b25267/',
      github: 'https://github.com/Somanadh9319'
    }
  },
  {
    id: '5',
    name: 'Chaitanya',
    role: 'Web & Full Stack Developer',
    department: 'Leadership',
    bio: 'Leads with technical expertise, building scalable and innovative solutions across the stack.',
    image: 'images/usericon.png',
    skills: ['System Architecture', 'AI/ML', 'Cloud Computing', 'Technical Leadership'],
    social: {
      linkedin: 'https://www.linkedin.com/in/kancheti-chaitanya-493a49265/',
      github: 'https://github.com/kancheti-chaitanya'
    }
  },
];

export const departments = ['All', 'Leadership', 'Engineering', 'Design', 'Operations'];