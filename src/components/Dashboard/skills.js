import { motion } from 'framer-motion'
import * as ROUTES from '../../constants/routes'
import {useState} from 'react'
import SkillDescription from '../Skill/skill'

export default function Skills({skillsSection}){
    const [skill, setSkill] = useState(null)
    const [description, setDescription] = useState(null)
    const [icon, setIcon] = useState(null)

    const [isOpen, setIsOpen] = useState(false)

    const displaySkillDescription = (skill, description, icon)=>{
        setDescription(description)
        setSkill(skill)
        setIcon(icon)

        setIsOpen(!isOpen)
    }
    return (
        <div tabIndex="0" ref={skillsSection} className="h-auto drop-shadow-2xl bg-hero2 bg-cover bg-no-repeat bg-blend-screen bg-cyan-200 mt-10 w-full flex flex-col items-center relative justify-center py-10">
            <p className="text-6xl font-mono">My SKills</p>
                <SkillDescription
                    skill={skill}
                    description={description}
                    icon={icon}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            <div className="w-full border max-w-screen-lg mt-8 grid p-2 grid-cols-1 md:grid-cols-3 h-full">
                {
                    ROUTES.SKILLS.map((skill)=>{
                        console.log('skill', skill)
                        return (
                            <motion.div
                                key={skill.id} 
                                className="relative shadow-lg m-2 items-center inline-flex border h-16"
                                whileHover={{scale:1.05}}
                                layout
                                >
                                    <div className='h-full w-16'>
                                        {
                                            skill.skill === "ecma6" ? (
                                                <motion.p
                                                    whileTap={{rotate:720}}
                                                    onClick={()=>displaySkillDescription(skill.skill, skill.description, skill.icon)}
                                                >
                                                    {skill.icon}
                                                </motion.p>
                                            ) : (
                                                <motion.img
                                                    whileTap={{rotate:720}} 
                                                    className="h-full w-full" 
                                                    src={skill.icon} 
                                                    alt={skill.skill}
                                                    title={skill.description} 
                                                    onClick={()=>displaySkillDescription(skill.skill, skill.description, skill.icon)}
                                                />
                                            )
                                        }
                                    </div>
                                    <p className='ml-6 capitalize font-serif text-sm'>
                                        {skill.skill}
                                    </p>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}