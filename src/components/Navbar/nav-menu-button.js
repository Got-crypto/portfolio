import { useEffect } from 'react'
import * as ROUTES from '../../constants/routes'
import { motion } from 'framer-motion'

export default function NavMenuButton({
    handleNavMenu, 
    hidden, 
    setHidden, 
    scrollToIntroductionSection,
    scrollToAchievementsSection,
    scrollToSkillsSection,
    scrollToProjectsSection
}){
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            window.innerWidth === '768px' && setHidden(false)
        })
    }, [])
    return (
        <div className="fixed ml-28 mt-96 flex justify-center z-30">
            <motion.ul 
                className={`bg-primary flex-col h-36 flex justify-center w-36 fixed md:hidden rounded-3xl`}
                initial={{scale: 0}}
                animate={{scale: hidden ? 1 : 0}}
            >   
                {
                    ROUTES.MENU.map((item)=>{
                        return(
                            <motion.li 
                                key={item.id}
                                className="py-1 mx-auto text-white w-4/5 text-sm font-bold border-green-600 hover:border-b-2 cursor-pointer"
                                whileHover={{scale:1.1}}
                                onClick={()=>{
                                    // eslint-disable-next-line default-case
                                    switch (item.name) {
                                        case "INTRODUCTION": return scrollToIntroductionSection() 
                                        case "SKILLS": return scrollToSkillsSection()
                                        case "PROJECTS": return scrollToProjectsSection()
                                        case "ACHIEVEMENTS": return scrollToAchievementsSection()
                                    }
                                }}
                            >
                                {item.name}
                            </motion.li>
                        )
                    })
                    
                }
            </motion.ul>
            <motion.button
                onClick={handleNavMenu}
                className="inline-flex justify-center p-2 items-center fixed z-50 shadow-2xl rounded-2xl bg-primary h-auto mt-32 mr-28 text-white md:hidden font-bold"
                initial={{scale:0}}
                animate={{scale:1}}
                drag
                dragConstraints={{
                    right: 10,
                    bottom: 1,
                    left: 1,
                    top: 10,
                }}
                whileHover={{scale:1.1}}
                whileTap={{
                    scale: 1.05
                }}
                transition={{duration:.1}}
            >
                Menu
                {
                    hidden ? (
                        <p className='p-2'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </p>
                    ) : (
                        <p className='p-2'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </p>
                    )
                }
            </motion.button>
        </div>
    )
}