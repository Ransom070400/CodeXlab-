import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Background from '../components/Background';

export default function Team() {
  const team = [
    {
      name: 'Eze Ransom',
      role: 'Team Lead and Developer',
      image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//Ransom.jpg',
      socials: {
        twitter: 'https://x.com/eze_ransom',
        github: 'https://github.com/Ransom070400',
        linkedin: 'https://www.linkedin.com/in/eze-ransom-281640295',
      },
    },
    {
      name: 'George-Goldman',
      role: 'Lead Blockchain Developer',
      image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//WhatsApp%20Image%202025-01-27%20at%2015.37.20_47bb3e93.jpg',
      socials: {
        twitter: 'https://x.com/0xgeorgegoldman',
        github: 'https://github.com/georgegoldman',
        linkedin: '#',
      },
    },
    {
      name: 'Assumpta Kaosi',
      role: 'Lead Designer',
      image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//WhatsApp%20Image%202025-01-25%20at%2011.15.33_6c2bbb52.jpg',
      socials: {
        twitter: 'https://x.com/assumptakaosi',
        github: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Hillary',
      role: 'Lead Frontend Developer',
      image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//WhatsApp%20Image%202025-01-27%20at%2015%20(1).23',
      socials: {
        twitter: 'https://x.com/HillaryEbuka2',
        github: '#',
        linkedin: '#',
      },
    },


    {
      name: 'Afam',
      role: 'Backend Developer',
      image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//111662034.jpg',
      socials: {
        twitter: 'https://x.com/PhyroKelstein',
        github: 'https://github.com/2022phyro',
        linkedin: '#',
      },
    },

    
    {
      name: 'Nedu',
      role: 'Frontend Developer',
      image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//V0e3__w1_400x400.jpg',
      socials: {
        twitter: 'https://x.com/chisco_JS',
        github: '#',
        linkedin: '#',
      },
    },


  ];

  return (
    <div className="relative min-h-screen pt-20">
      <Background />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Meet the innovators behind Code-X Lab
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    <a href={member.socials.twitter} className="text-gray-300 hover:text-purple-400">
                      <Twitter size={20} />
                    </a>
                    <a href={member.socials.github} className="text-gray-300 hover:text-purple-400">
                      <Github size={20} />
                    </a>
                    <a href={member.socials.linkedin} className="text-gray-300 hover:text-purple-400">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
