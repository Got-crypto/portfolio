import { useEffect } from "react"
import Achievements from "../components/Dashboard/achievements"
import Introduction from '../components/Dashboard/introduction'
import Projects from "../components/Dashboard/projects"
import Skills from "../components/Dashboard/skills"
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export default function Dashboard({ introductionSection, achievementsSection, projectsSection, skillsSection, scrollToSkillsSection }){
    useEffect(()=>{
        document.title = 'My PortFolio - Home'
    }, [])
    return (
        <SimpleBar style={{  }}>
            <div className="h-auto flex flex-col w-full relative z-10">
                <Introduction introductionSection={introductionSection} scrollToSkillsSection={scrollToSkillsSection}/>
                <Skills skillsSection={skillsSection} />
                <Projects projectsSection={projectsSection} />
                <Achievements achievementsSection={achievementsSection} />
            </div>
        </SimpleBar>
    )
}