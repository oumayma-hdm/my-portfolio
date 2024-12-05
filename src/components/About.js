import React from 'react';
import Timeline from './Timeline'; // Assuming you have a Timeline component

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mb-8 text-center text-purple-400">About Me</h2>
        
        {/* Flex container for the two sections */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Simulated Computer Window 1 */}
          <div className="border-4 border-purple-500 rounded-lg shadow-lg flex-1 min-w-[300px]">
            <div className="flex items-center justify-between px-4 py-2 border-b border-purple-500">
              <span className="text-sm text-white-400 font-mono">my-skills.yml</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6 max-w-xl mx-auto">
              {/* Languages & Tools Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-green-500 mb-4 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>Languages &amp; Tools
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">PHP</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">JavaScript</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">TypeScript</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Twig</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Tailwind</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">MySQL</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Bash</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">C/C++</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-blue-400 mb-4 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>Frameworks &amp; Libraries
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Drupal</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">React</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Tailwind</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">NextJs</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">VueJs</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">ThreeJs</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Json</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">JsonAPI</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-yellow-500 mb-4 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Cloud &amp; DevOps
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">AWS</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Docker</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Jenkins</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Git</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">CI/CD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Computer Window 2 */}
          <div className="border-4 border-purple-500 rounded-lg shadow-lg flex-1 min-w-[300px]">
            <div className="flex items-center justify-between px-4 py-2 border-b border-purple-500">
              <span className="text-sm text-white-400 font-mono">about-me.txt</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6 max-w-xl mx-auto">
              <pre className="text-white-400 text-lg font-mono whitespace-pre-wrap">
                {`Hi! I'm `}
                <span className="text-purple-300 font-bold">Oumayma El Haddam</span>
                {`, an enthusiastic `}
                <span className="text-yellow-300 font-bold">Junior Web Developer</span>
                {` with over `}
                <span className="text-green-300 font-bold">2 years</span>
                {` of experience in crafting dynamic `}
                <span className="text-blue-300 font-bold">Drupal</span>
                {` and `}
                <span className="text-blue-400 font-bold">React.js</span>
                {` websites. I'm passionate about `}
                <span className="text-red-300 font-bold">innovation</span>
                {`, web development, and continuous learning.\n\nI love transforming ideas into high-performance digital experiences and always look for new challenges to grow my skills.`}
              </pre>
              <div className="mt-4 p-4 bg-gray-300 rounded-lg shadow-md">
                <code className="text-sm text-gray-800">
                  {`const greet = () => {\n  console.log("Hello, World!");\n};\n\ngreet();`}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;