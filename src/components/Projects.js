import React from 'react';
import Timeline from './Timeline'; // Assuming you have a Timeline component

const Projects = () => {
  return (
    <section id="project" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mb-8 text-center text-purple-400">Projects</h2>
        {/* Flex container for the two sections */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Simulated Computer Window 1 */}
          <div className="border-4 border-purple-500 rounded-lg shadow-lg flex-1 min-w-[300px]">
            <div className="flex items-center justify-between px-4 py-2 border-b border-purple-500">
              <span className="text-sm text-white-400 font-mono">personal-projects.json</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6 max-w-xl mx-auto">
            
              <div className="space-y-6">
                <div>
                  <h3 className="text-green-500 mb-4 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>Carreer guidance website based on mbti test based on AI suggetions
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">React</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">JavaScript</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">TypeScript</span>
                                     </div>
                </div>
                <div>
                  <h3 className="text-blue-400 mb-4 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>Watch Store Project
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Drupal</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">React</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Reduxjs</span>
                            </div>
                </div>
                <div>
                  <h3 className="text-yellow-500 mb-4 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Movie Application

                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">React</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">JavaScript</span>
                                      </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Computer Window 2 */}
          <div className="border-4 border-purple-500 rounded-lg shadow-lg flex-1 min-w-[300px]">
            <div className="flex items-center justify-between px-4 py-2 border-b border-purple-500">
              <span className="text-sm text-white-400 font-mono">Projects.php</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6 max-w-xl mx-auto">
            <div className="space-y-6">
                <div>
                  <h3 className="text-orange-500 mb-4 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>Used Car Sales Platform - Chaabilldocaz.ma
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Drupal</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Next.js</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">React</span>
                                     </div>
                </div>
                <div>
                  <h3 className="text-pink-400 mb-4 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span> Showcase Website for Morocco's Leading Steel Producer - Sonasid.ma
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Drupal</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">React</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Next.js</span>
                            </div>
                </div>
                <div>
                  <h3 className="text-yellow-500 mb-4 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Ongoing management and maintenance of multiple platforms, including Drupal updates as well as performance and security testing.

                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">React</span>
                    <span className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default">Drupal</span>
                                      </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
