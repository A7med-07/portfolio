'use client'

import { useEffect, useState, useRef } from 'react'

const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'HTML & CSS', level: 100, icon: '🌐' },
      { name: 'JavaScript', level: 90, icon: '💛' },
      { name: 'TypeScript', level: 95, icon: '💙' },
      { name: 'sass', level: 85, icon: '💗' },
    ],
  },
  {
    category: 'FrameWork',
    skills: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Next', level: 80, icon: '▲' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨' },
      { name: 'Bootstrap', level: 100, icon: '🅱️' },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: '🔧' },
      { name: 'Vercel', level: 85, icon: '🚀' },
      { name: 'Figma', level: 60, icon: '🎨' },
      { name: 'VS Code', level: 95, icon: '💻' },

    ],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          // Animate skill levels
          setTimeout(() => {
            const levels: { [key: string]: number } = {}
            skillsData.forEach(category => {
              category.skills.forEach(skill => {
                levels[skill.name] = skill.level
              })
            })
            setAnimatedLevels(levels)
          }, 200)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring your ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.map((category, idx) => (
              <div
                key={category.category}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-purple-600 rounded-full"></span>
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                          <span>{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-primary-600 dark:text-primary-400 font-semibold">
                          {animatedLevels[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${animatedLevels[skill.name] || 0}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Also Experienced With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['REST APIs', 'Redux', 'DOM/BOM', 'Ajax', 'jQuery', 'NPM' , 'ShadeCn' , 'HeroUI'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
