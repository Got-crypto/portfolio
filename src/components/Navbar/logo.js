import { motion } from "framer-motion";

export default function Logo({handleShowPictureOverlay}) {
    
    return (
        <motion.div onClick={handleShowPictureOverlay} whileHover={{scale:1.1}} className="hover:border-b-2 border-green-600 col-span-3 justify-center md:col-span-1 md:justify-start w-full h-full inline-flex items-center">
            <div 
                className="h-4/5 cursor-pointer w-16 bg-profile bg-cover rounded-full bg-center bg-no-repeat" 
            />
            <p className="ml-2 font-mono text-sm font-bold cursor-pointer py-2 ">MY PORTFOLIO</p>
        </motion.div>
    )
}