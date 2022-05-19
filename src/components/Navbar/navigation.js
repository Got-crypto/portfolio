/* eslint-disable default-case */
import { motion } from 'framer-motion'
import * as ROUTES from '../../constants/routes'

export default function Navigation({
    scrollToAchievementsSection,
    scrollToSkillsSection,
    scrollToProjectsSection,
    scrollToIntroductionSection
}){
    return (
        <div className="hidden md:col-span-2 md:flex h-full items-center justify-self-end justify-between w-4/5">
            {ROUTES.MENU.map((item)=>{
                return(
                    <motion.button 
                        key={item.id} 
                        title={item.name} 
                        className="hover:border-b-2 font-mono border-green-600 flex justify-center items-center h-2/3 px-2"
                        whileHover={{scale:1.1}}
                        onClick={ ()=>{
                            switch (item.name) {
                                case "INTRODUCTION": return scrollToIntroductionSection()
                                case "SKILLS": return scrollToSkillsSection()
                                case "PROJECTS": return scrollToProjectsSection()
                                case "ACHIEVEMENTS": return scrollToAchievementsSection()
                            }
                        } }
                    >
                        {item.name}
                    </motion.button>
                )
            })}
        </div>
    )
}