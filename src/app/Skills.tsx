'use client';

import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMysql,
  SiPython,
  SiFirebase,
  SiShadcnui,
  SiSupabase,
  SiGithub
} from 'react-icons/si';

interface SkillsProps {
  darkMode: boolean;
}

interface TechSkill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  colorDark: string;
  colorLight: string;
}

interface TechCategory {
  title: string;
  skills: TechSkill[];
}

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const techCategories: TechCategory[] = [
  {
    title: 'Front-end Web Development',
    skills: [
      { name: 'TypeScript', icon: SiTypescript, colorDark: 'text-blue-500', colorLight: 'text-blue-600' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, colorDark: 'text-cyan-400', colorLight: 'text-cyan-500' },
      { name: 'Next.js', icon: SiNextdotjs, colorDark: 'text-white', colorLight: 'text-gray-900' },
      { name: 'Shadcn UI', icon: SiShadcnui, colorDark: 'text-white', colorLight: 'text-gray-900'},
      { name: 'React.js', icon: SiReact, colorDark: 'text-cyan-400', colorLight: 'text-cyan-500' },
      { name: 'JavaScript', icon: SiJavascript, colorDark: 'text-yellow-500', colorLight: 'text-yellow-600'},
      { name: 'HTML5', icon: SiHtml5, colorDark: 'text-orange-500', colorLight: 'text-orange-600'},
      { name: 'CSS3', icon: SiCss3, colorDark: 'text-blue-500', colorLight: 'text-blue-600'}
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, colorDark: 'text-green-500', colorLight: 'text-green-600' },
      { name: 'PHP', icon: SiPhp, colorDark: 'text-purple-500', colorLight: 'text-purple-600' },
      { name: 'Python', icon: SiPython, colorDark: 'text-yellow-400', colorLight: 'text-yellow-600' },
      { name: 'MySQL', icon: SiMysql, colorDark: 'text-blue-600', colorLight: 'text-blue-700' },
      { name: 'Firebase', icon: SiFirebase, colorDark: 'text-orange-500', colorLight: 'text-orange-600' },
      { name: 'Supabase', icon: SiSupabase, colorDark: 'text-green-400', colorLight: 'text-green-600' }
    ]
  },
  {
    title: 'Tools & Version Control',
    skills: [
      { name: 'Git', icon: SiGit, colorDark: 'text-orange-600', colorLight: 'text-orange-700' },
      { name: 'Github', icon: SiGithub, colorDark: 'text-gray-300', colorLight: 'text-gray-800' }
    ]
  }
];

const workExperiences: WorkExperience[] = [
  {
    title: 'Part-Time Data Encoder',
    company: 'Lifesavers Drugtesting Center',
    period: '2025 - Present',
    description: 'Responsible for encoding clients personal information into the system.'
  },
  {
    title: 'Part-Time Data Encoder',
    company: 'Lifesavers Drugtesting Center',
    period: '2025 - Present',
    description: 'Responsible for encoding clients personal information into the system.'
  },
  {
    title: 'Part-Time Data Encoder',
    company: 'Lifesavers Drugtesting Center',
    period: '2025 - Present',
    description: 'Responsible for encoding clients personal information into the system.'
  },
  {
    title: 'Part-Time Data Encoder',
    company: 'Lifesavers Drugtesting Center',
    period: '2025 - Present',
    description: 'Responsible for encoding clients personal information into the system.'
  }
];

export default function Skills({ darkMode }: SkillsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05
      }
    }
  };

  return (
    <section
      id="skills"
      className={`${
        darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'
      } min-h-screen py-20 px-4 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology & Experiences
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Tech Stack Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-8"
            >
              My Techstack
            </motion.h3>
            
            <div className="space-y-8">
              {techCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={categoryVariants}
                  className="space-y-4"
                >
                  <motion.h4 
                    variants={itemVariants}
                    className={`text-lg font-semibold ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    {category.title}
                  </motion.h4>
                  
                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3"
                  >
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={cardVariants}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`${
                          darkMode
                            ? 'bg-[#1e293b] border-gray-700 hover:bg-[#334155]'
                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        } border rounded-lg p-3 sm:p-4 text-center transition-all duration-300 cursor-pointer group`}
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <skill.icon 
                            className={`w-6 h-6 md:w-7 md:h-7 ${
                              darkMode ? skill.colorDark : skill.colorLight
                            } group-hover:scale-110 transition-transform duration-300`}
                          />
                          <span className="font-medium text-xs sm:text-sm leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-8"
            >
              Work Experience
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              {workExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  className={`${
                    darkMode
                      ? 'bg-[#1e293b]/50'
                      : 'bg-gray-50'
                  } px-6 py-4 rounded-lg transition-all duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      darkMode ? 'bg-blue-400' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {experience.company}
                      </h4>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      } mb-1`}>
                        {experience.title} | {experience.period}
                      </p>
                      <p className={`text-sm leading-relaxed ${
                        darkMode ? 'text-gray-400' : 'text-gray-700'
                      }`}>
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}