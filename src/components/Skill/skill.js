import { motion } from "framer-motion";

export default function SkillDescription({ skill, description, icon, isOpen, setIsOpen }){
    return (
        <motion.div 
            className="absolute h-screen w-screen mx-auto z-40 flex items-center justify-center"
            animate={{
                scale: isOpen ? 1 : 0
            }}
            initial={{
                scale: 0
            }}
        >
            <div className="min-h-fit h-auto w-64 rounded mx-auto p-4 bg-primary text-white text-sm font-bold z-40">                
                <button 
                    className="h-5 w-5 text-white border-2 border-white rounded-full"
                    onClick={()=>setIsOpen(!isOpen)}
                >
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
                {
                    skill === "ecma6" ? (
                        <div className="h-14 w-14" title={skill}>
                            {icon}
                        </div>
                    ) : (
                        <img className="h-14 w-14" title={skill} src={icon} alt={skill} />
                    )
                }
                <p className="mt-2 uppercase text-sm font-bold text-white">
                    {skill}
                </p>
                <p className="mt-12 text-sm font-bold text-white">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}