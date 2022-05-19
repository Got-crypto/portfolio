import { motion } from "framer-motion";

export default function Introduction({introductionSection, scrollToSkillsSection}){
    return (
        <>
            <div tabIndex="0" ref={introductionSection} className="bg-hero bg-cover bg-center bg-no-repeat h-screen bg-blend-lighten bg-slate-300 w-full flex items-center justify-center">
                <div className="w-5/6 md:w-full max-w-screen-sm lg:max-w-screen-lg">
                    <p className="text-4xl md:text-5xl lg:text-6xl capitalize font-bold">Welcome to my site ...</p>
                    <p className="text-xs md:text-sm leading-7 font-medium mt-10 w-4/5">
                        Hi, I am Gerrard Carrey, Born and raised in Blantyre, Malawi. My time is UTC+2 if that is somehow 
                        necessary to you. Went to Millennium University in Blantyre, Malawi. I like coding very much you can check my
                        skills under <button className="font-bold hover:underline cursor-pointer" onClick={()=>{
                            return scrollToSkillsSection()
                        }}>skills</button> {' '} 
                        section below. I have always wanted to be a programmer since I was a teen. I am gamer too I love video games, 
                        coffee (please buy me some, thank you in advance), and I am a hooper, point guard.
                    </p>
                    <div className="inline-flex mt-10  w-96">
                        <motion.button whileHover={{scale:1.2}} whileTap={{scale:1.1}} className="h-14 inline-flex justify-center items-center w-28 rounded text-sm text-white font-bold bg-primary">
                            <p>Hire Me</p>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </motion.button>
                        <motion.button whileHover={{scale:1.1}} whileTap={{scale:1.05}} className="h-14 inline-flex justify-center items-center w-36 rounded text-sm text-primary font-bold bg-slate-300 ml-10">
                            <p>Watch Video</p>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </motion.button>
                    </div>
                </div>
            </div>
        </>
    )
}