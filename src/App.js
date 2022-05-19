import { lazy, Suspense, useRef, useState } from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Navbar from './components/navbar'
import Footer from './components/footer'
import NavMenuButton from './components/Navbar/nav-menu-button'
import ProfileOverlay from './components/Navbar/profile-overlay'

const Dashboard = lazy( () => import('./pages/dashboard'))

export default function App(){

  const [hidden, setHidden] = useState(false)
  const [isDisplayed, setIsDisplayed] = useState(false)
  
  const introductionSection = useRef(null)
  const projectsSection = useRef(null)
  const achievementsSection = useRef(null)
  const skillsSection = useRef(null)


  const scrollToIntroductionSection = ()=>{
    return introductionSection.current.focus()
  }
  const scrollToProjectsSection = ()=>{
    return projectsSection.current.focus()
  }
  const scrollToAchievementsSection = () => achievementsSection.current.focus()
  
  const scrollToSkillsSection = ()=>{
    return skillsSection.current.focus()
  }

  const handleNavMenu = ()=> {
    setHidden(!hidden)
  }

  const handleShowPictureOverlay = ()=>{
    setIsDisplayed(!isDisplayed)
  }
  const handleHidePictureOverlay = ()=>{
    setIsDisplayed(!isDisplayed)
  }

  return(
    <>
      <ProfileOverlay handleHidePictureOverlay={handleHidePictureOverlay} isDisplayed={isDisplayed} />
      <Navbar 
        handleShowPictureOverlay={handleShowPictureOverlay} 
        scrollToIntroductionSection={scrollToIntroductionSection} 
        scrollToAchievementsSection={scrollToAchievementsSection}
        scrollToProjectsSection={scrollToProjectsSection}
        scrollToSkillsSection={scrollToSkillsSection}
      />
      <NavMenuButton 
        scrollToIntroductionSection={scrollToIntroductionSection} 
        handleNavMenu={handleNavMenu} 
        hidden={hidden} 
        setHidden={setHidden}
        scrollToAchievementsSection={scrollToAchievementsSection}
        scrollToProjectsSection={scrollToProjectsSection}
        scrollToSkillsSection={scrollToSkillsSection} 
      />
        <Suspense fallback={
            <div className='h-screen w-full max-w-screen-lg mx-auto animate-pulse flex justify-center items-center'>
              <p>
                <svg className="w-20 h-20 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>
                  Please wait ...
                </span>
              </p>
            </div>
        } >
          <Switch>
              <Route 
                path={ROUTES.DASHBOARD} 
                scrollToIntroductionSection={scrollToIntroductionSection} 
                exact                 
              >
                <Dashboard
                  introductionSection={introductionSection}
                  achievementsSection={achievementsSection}
                  projectsSection={projectsSection}
                  skillsSection={skillsSection}
                  scrollToSkillsSection={scrollToSkillsSection}
                />

              </Route>
          </Switch>
        </Suspense>
      <Footer />
    </>
  )
}