import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Works from './components/Works'
import DesignGuideline from './components/DesignGuideline'
import BirdFlyBy from './components/BirdFlyBy'

function App() {
  const sectionOrder = ['experience', 'works', 'skills', 'guideline']
  const [activeSection, setActiveSection] = useState('experience')
  const [transitionDirection, setTransitionDirection] = useState('from-right')

  const renderActiveSection = () => {
    if (activeSection === 'experience') return <Experience />
    if (activeSection === 'works') return <Works />
    if (activeSection === 'skills') return <Skills />
    return <DesignGuideline />
  }

  const handleSectionChange = (nextSection) => {
    if (nextSection === activeSection) return

    const currentIndex = sectionOrder.indexOf(activeSection)
    const nextIndex = sectionOrder.indexOf(nextSection)

    setTransitionDirection(nextIndex > currentIndex ? 'from-right' : 'from-left')
    setActiveSection(nextSection)
  }

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={handleSectionChange} />
      <main>
        <div key={activeSection} className={`section-fade-in ${transitionDirection}`}>
          {renderActiveSection()}
        </div>
      </main>
      <BirdFlyBy />
    </div>
  )
}

export default App
