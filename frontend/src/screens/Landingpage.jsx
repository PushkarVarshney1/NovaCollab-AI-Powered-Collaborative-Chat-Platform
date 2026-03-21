import React from 'react'
import { Link } from 'react-router-dom'
import { Code, Zap, Users, Terminal, Bot } from 'lucide-react'

const features = [
  {
    icon: <Bot className="w-8 h-8 text-white" />,
    title: "AI-Powered Coding",
    description: "Just type @ai and describe what you want. Our AI creates complete applications instantly.",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time. See changes instantly as others code.",
    color: "from-green-600 to-green-700"
  },
  {
    icon: <Terminal className="w-8 h-8 text-white" />,
    title: "Instant Execution",
    description: "Your code runs immediately in the browser. No setup, no downloads, no configuration.",
    color: "from-purple-600 to-purple-700"
  }
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DevMate</span>
            </div>
            
            <div className="flex items-center gap-5">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors text-lg px-6">Home</a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors text-lg px-6">Demo</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors text-lg px-6">Features</a>
              <Link to="/login" className="text-gray-300 hover:text-white transition-colors text-lg px-6">Login</Link>
              <Link to="/register" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg ml-8">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Page */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="text-center space-y-12">
            <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700/50 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300 font-medium">AI-Powered Development Platform</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="block text-white mb-4">Code with AI,</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Build Together
              </span>
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed text-gray-400 max-w-4xl mx-auto">
              Create applications instantly using AI. Collaborate in real-time. 
              Run code in your browser without any setup required.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Link to="/register" className="px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-blue-500/25">
                Get Started Free
              </Link>
              <Link to="/login" className="px-10 py-4 bg-gray-800/50 text-white rounded-lg hover:bg-gray-700/50 transition-all duration-200 transform hover:scale-105 font-semibold text-lg border border-gray-700/50 backdrop-blur-sm">
                Sign In
              </Link>
            </div>

            <div className="pt-16 max-w-3xl mx-auto">
              <div className="bg-gray-800/30 rounded-xl border border-gray-700/30 overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="bg-gray-900/50 px-6 py-4 flex items-center space-x-3 border-b border-gray-700/30">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400">DevMate IDE</span>
                </div>
                <div className="p-8 bg-black/50">
                  <div className="font-mono text-left space-y-3">
                    <div className="text-gray-500">// Chat with AI to create apps</div>
                    <div className="text-blue-400">You: @ai make a node server</div>
                    <div className="text-green-400">AI: ✓ Creating Express server...</div>
                    <div className="text-green-400">AI: ✓ Files generated successfully!</div>
                    <div className="text-yellow-400">$ npm start</div>
                    <div className="text-green-400">🚀 Server running on port 3000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - Full Page */}
      <section id="demo" className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">How It Works</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  From idea to running application in 3 simple steps. Watch our demo to see DevMate in action.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Create Project</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">Start a new project and invite your team members to collaborate</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Chat with AI</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">Type @ai and describe what you want to build</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Run Instantly</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">Your code runs immediately in the browser</p>
                  </div>
                </div>
              </div>

              <Link to="/register" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Try It Now - Free
              </Link>
            </div>

            <div className="relative">
              <a 
                href="https://www.youtube.com/watch?v=PV6fuOEGNzY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative group cursor-pointer"
              >
                <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-blue-500 transition-colors shadow-2xl">
                  <div className="relative">
                    <img 
                      src="https://img.youtube.com/vi/PV6fuOEGNzY/maxresdefault.jpg"
                      alt="DevMate Demo Video"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Watch Demo</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">See how DevMate transforms your ideas into working applications</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Full Page */}
      <section id="features" className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Why Choose DevMate?</h2>
            <p className="text-xl text-gray-400 leading-relaxed">Everything you need to build modern applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-10 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-8`}>
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section - Full Page */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">What Can You Build?</h2>
            <p className="text-xl text-gray-400 leading-relaxed">Just ask AI and watch it create</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <h3 className="text-3xl font-bold text-white">Try These Commands:</h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
                  <code className="text-blue-400 text-lg">@ai create a React todo app</code>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
                  <code className="text-green-400 text-lg">@ai make a Node.js API server</code>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
                  <code className="text-purple-400 text-lg">@ai build a chat application</code>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
                  <code className="text-yellow-400 text-lg">@ai create a dashboard with charts</code>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl border border-gray-800/50 backdrop-blur-sm">
              <div className="bg-black/50 px-6 py-4 rounded-t-xl border-b border-gray-800/50">
                <span className="text-gray-400 text-lg">Live Preview</span>
              </div>
              <div className="p-16 text-center">
                <div className="text-8xl mb-8">🚀</div>
                <h4 className="text-3xl font-bold text-white mb-6">Your App Running</h4>
                <p className="text-gray-400 text-xl leading-relaxed">Code executes instantly in the browser</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Page */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="text-center space-y-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Join thousands of developers using AI to build faster and smarter applications
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Link to="/register" className="px-12 py-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Get Started Free
              </Link>
              <Link to="/login" className="px-12 py-5 bg-gray-800/50 text-white rounded-lg hover:bg-gray-700/50 font-semibold text-xl border border-gray-700/50 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">DevMate</span>
            </div>
            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-white transition text-lg">Privacy</a>
              <a href="#" className="hover:text-white transition text-lg">Terms</a>
              <a href="#" className="hover:text-white transition text-lg">Support</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-lg">
            <p>&copy; 2025 DevMate. Build smarter with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
