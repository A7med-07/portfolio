'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'


const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with cart, WishList, checkout, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    category: 'web',
    github: 'https://github.com/A7med-07/Fresh-Cart',
    demo: 'https://fresh-cart-three-ruby.vercel.app/',
  },
  {
    id: 2,
    title: 'Recipes',
    description: 'Developer portfolio showcase with projects gallery and contact form.',
    image: 'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'JSX', 'Tailwind'],
    category: 'food',
    github: 'https://github.com',
    demo: 'https://recipe-ten-theta.vercel.app/',
  },

 {
    id: 3,
    title: 'Social Media App',
    description: 'Connect with friends, share moments, and stay updated with real-time social networking.',
    image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'TypeScript', 'Tailwind'],
    category: 'web',
    github: 'https://github.com/A7med-07/LinkUp-App',
    demo: 'https://linkup-two-kappa.vercel.app/',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts, maps, and location-based alerts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'API', 'Bootstrap'],
    category: 'web',
    github: 'https://github.com/A7med-07/Weather',
    demo: 'https://weather-psi-wheat-56.vercel.app/',
  },


    {
    id: 5,
    title: 'Game Reviews',
    description: 'Discover, rate, and review your favorite video games with detailed information and ratings.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
    tags: ['React', 'API', 'Tailwind'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://game-reviews-mu.vercel.app/',
  },
  {
    id: 6,
    title: 'Note Book',
    description: 'Personal note-taking app with rich text editor and cloud sync for organizing your thoughts.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://note-book-flame.vercel.app/login',
  },

  {
    id: 7,
    title: 'Portfolio Website',
    description: 'Modern portfolio template with dark mode and smooth animations.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'profile',
    github: 'https://github.com',
    demo: 'https://porfile-three.vercel.app/',
  },
 
  {
    id: 8,
    title: 'Bookmark',
    description: 'Organize and save your favorite websites with tags, categories, and quick search.',
    image: 'https://images.unsplash.com/photo-1709158990536-0cd97cd00345?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['JavaScript', 'LocalStorage', 'Bootstrap'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://bookmark-weld-tau.vercel.app/',
  },

  {
    id: 9,
    title: 'Quotes App',
    description: 'Daily inspiration with beautiful quotes, save favorites, and share wisdom with others.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://quotes-app-ruddy-three.vercel.app/',
  },
  {
    id: 10,
    title: 'Mealfy',
    description: 'Recipe finder and meal planning app with nutritional info and cooking instructions.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    category: 'food',
    github: 'https://github.com',
    demo: 'https://mealfy-psi.vercel.app/',
  },
  {
    id: 11,
    title: 'Fokir',
    description: 'Creative agency portfolio template with modern design and smooth animations.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'profile',
    github: 'https://github.com',
    demo: 'https://fokir-ten-zeta.vercel.app/',
  },
  {
    id: 12,
    title: 'Devfolio',
    description: 'Developer portfolio showcase with projects gallery and contact form.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'profile',
    github: 'https://github.com',
    demo: 'https://dev-folio-virid.vercel.app/',
  },

]

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Apps' },
  { id: 'food', name: 'Food' },
  { id: 'profile', name: 'Profile' }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory)
  // عرض أول 6 أو الكل
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my recent work and personal projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, idx) => (
              <div
                key={project.id}
                className="project-card bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-purple-600 opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-30">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex gap-4">

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          {/* Load More / Show Less Button */}
          {filteredProjects.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {showAll ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    Load More ({filteredProjects.length - 6} more projects)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
