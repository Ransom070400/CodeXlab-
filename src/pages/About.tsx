import { motion } from 'framer-motion';
import Background from '../components/Background';

export default function About() {
  const features = [
    {
      title: 'Web3 Development',
      description: 'Building decentralized applications that power the future of the internet.',
    },
    {
      title: 'Blockchain Solutions',
      description: 'Creating secure, transparent, and efficient blockchain infrastructures.',
    },
    {
      title: 'Smart Contracts',
      description: 'Developing and auditing secure smart contracts for various blockchain platforms.',
    },
    {
      title: 'DeFi Protocols',
      description: 'Innovating in decentralized finance with cutting-edge protocols and solutions.',
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
              About Us
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            We are a team of passionate developers and innovators pushing the boundaries
            of what's possible in the Web3 space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}