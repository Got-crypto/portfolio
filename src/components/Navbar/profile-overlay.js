import Pictures from './pictures'
import Identification from './identification'
import { motion } from 'framer-motion'

export default function ProfileOverlay({handleHidePictureOverlay, isDisplayed}){
    return (
        <motion.div 
            animate={{
                scale: isDisplayed ? 1 : 0
            }}
            transition={{
                delay: isDisplayed ? 0 : 0.2
            }}
            className={`fixed ${!isDisplayed && 'hidden'} z-40 h-screen w-full  flex justify-center items-center`}
        >
            <div className="fixed z-30 h-full opacity-30 bg-slate-900 w-full " />
            <motion.div 
                className="fixed h-auto -mt-6 bg-primary w-full md:w-3/5 z-40 rounded-2xl"
                animate={{
                    y: isDisplayed ? 0 : -1000,
                    opacity: isDisplayed ? 1 : 0
                }}
                transition={{
                    delay: isDisplayed ? .2 : 0
                }}
            >
                <motion.button 
                    onClick={handleHidePictureOverlay} 
                    title="close"
                    whileHover={{scale:1.2, rotate: 360}}
                >
                    <svg 
                        className="w-10 h-10 text-red-500" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                </motion.button>
                <Pictures handleHidePictureOverlay={handleHidePictureOverlay} isDisplayed={isDisplayed}/>
                <Identification />
            </motion.div>
        </motion.div>
    )
}