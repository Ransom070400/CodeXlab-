import { motion } from 'framer-motion';
import Background from '../components/Background';

export default function Projects() {
  const projects = [
    {
      title: 'Metamuse',
      category: 'DeFi',
      description: 'An NFT marketplace and where Artist Collaborate, Create, Mint, Fractionally Distribute and Sell.',
      image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//WhatsApp%20Image%202025-01-29%20at%2012.57.39_ea53122f.jpg',
    },
    {
      title: 'FlowX',
      category: 'Tools',
      description: 'Next-generation Sui blockchain SDK for Financial Inclusion.',
      image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//flow.webp',
    },
    
    {
      title: 'Bingo',
      category: 'Environmental',
      description: 'An AI powered site that connects waste to recyclers.',
      image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//Bingo.jpg',
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
              Our Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Exploring the frontiers of blockchain technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}