"use client"

import { useContext, useState, useEffect } from "react"
import { UserContext } from "../context/user.context"
import axios from "../config/axios"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const { user, setUser } = useContext(UserContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectName, setProjectName] = useState("")
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    setUser(null)
    navigate("/login")
  }

  const createProject = (e) => {
    e.preventDefault()
    if (!projectName.trim()) return
    axios.post("/api/projects/create", { name: projectName })
      .then(() => {
        setIsModalOpen(false)
        setProjectName("")
        fetchProjects()
      }).catch(console.error)
  }

  


  const fetchProjects = () => {
    axios.get("api/projects/all")
      .then(res => {
        setProjects(res.data.projects)
        setIsLoading(false)
      }).catch(() => setIsLoading(false))
  }
  const deleteProject = (projectId) => {
  axios.delete(`/api/projects/delete/${projectId}`,
  { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
  )
    .then(() => {
      console.log('Deleted successfully');
      fetchProjects();
    })
    .catch((err) => {
      console.error('Delete error:', err.response?.data || err.message);
    });
};


  const formatDate = (date) => date ? new Date(date).toLocaleDateString() : "Just now"

  useEffect(() => {
    // Check for token in URL params (from Google auth)
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    
    if (tokenFromUrl) {
        localStorage.setItem('token', tokenFromUrl);
        // Clean URL
        window.history.replaceState({}, document.title, '/home');
    }
    
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-xl sticky top-0 z-10 shadow-xl border-b border-gray-700/50 mb-8">
        <div className="container mx-auto px-8 py-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex justify-center items-center shadow-lg">
              <svg className="w-9 h-9 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">DevMate AI</h1>
              <p className="text-sm text-gray-400 mt-1">Your Smart Collaboration Hub</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="text-sm text-gray-400">Welcome back,</p>
              <p className="font-semibold text-white text-lg">{user?.email}</p>
            </div>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-8 pt-24 pb-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Your Workspace</h2>
          <p className="text-gray-400 mt-2 text-lg">Create, Manage & Collaborate on Your Projects</p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 p-6 rounded-lg shadow animate-pulse h-40"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Create New Project Card */}
            <div onClick={() => setIsModalOpen(true)}
              className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 p-6 rounded-lg shadow border-2 border-dashed border-gray-600 cursor-pointer hover:bg-gray-700/50 flex flex-col justify-center items-center min-h-[180px] transition">
              <p className="text-blue-400 text-2xl font-bold mb-2">+</p>
              <p className="text-white font-semibold">Start a New Project</p>
            </div>

            {/* Project Cards */}
            {projects.map((proj) => (
              <div key={proj._id} className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between min-h-[180px] group">
                {/* Delete Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteProject(proj._id)
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 opacity-0 group-hover:opacity-100 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Clickable Card */}
                <div onClick={() => navigate(`/project`, { state: { project: proj } })} className="flex flex-col flex-1 justify-between cursor-pointer">
                  <h3 className="text-lg font-semibold text-white truncate">{proj.name}</h3>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                    <span>Created: {formatDate(proj.createdAt)}</span>
                    <span>{proj.users?.length || 0} Members</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && projects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-white mb-4">No Projects Yet</h3>
            <p className="text-gray-400 mb-6">Kickstart your journey by creating your first project!</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        )}
      </main>

      {/* Create Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 p-8 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-white">Let's Build Something New!</h2>
            <form onSubmit={createProject} className="space-y-4">
              <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-600 px-4 py-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Project Name" required />
              <div className="flex space-x-2">
                <button type="button" onClick={() => { setIsModalOpen(false); setProjectName("") }}
                  className="flex-1 bg-gray-700 border border-gray-600 text-white py-2 rounded hover:bg-gray-600">Cancel</button>
                <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Create Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home






















