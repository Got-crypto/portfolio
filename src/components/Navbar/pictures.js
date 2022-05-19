import { motion } from 'framer-motion'
import { useState } from 'react'
import * as ROUTES from '../../constants/routes'

export default function Pictures(){

    const [imgPosition, setImgPosition] = useState(2)

    const handleNextPicture = ()=>{
        imgPosition === 2 ? setImgPosition( imgPosition + 1 ) : setImgPosition(2)
    }
    const handlePrevPicture = ()=>{
        imgPosition === 2 ? setImgPosition( imgPosition -1 ) : setImgPosition(2)
    }

    return (
        <div className="h-80 flex items-center justify-center">
            <motion.button 
                title='Prev'
                whileHover={{scale:1.2}}
                onClick={handlePrevPicture}
                className="relative z-40"
            >
                <svg 
                    className="w-10 h-10 text-slate-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" 
                        clipRule="evenodd" 
                    />
                </svg>
            </motion.button>
            <div className="h-full w-3/4 md:w-slider lg:w-4/6 overflow-hidden relative">
                <motion.div 
                    className='absolute w-full h-full inline-flex justify-center items-center'
                    animate={{
                        x: imgPosition === 3 ? -560 : imgPosition === 1 ? 560 : 0
                    }}
                >
                    {
                        ROUTES.PROFILES.map((item)=>{
                            return <img
                                        title={item.description} 
                                        src={item.src} 
                                        key={item.id} 
                                        className='h-full w-full md:w-2/3 rounded mx-28 md:mx20' 
                                        alt={item.description} 
                                    />
                        })
                    }
                </motion.div>
            </div>
            <motion.button 
                title='Next'
                whileHover={{scale:1.2}}
                onClick={handleNextPicture}
                className="relative z-50"
            >
                <svg 
                    className="w-10 h-10 text-slate-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                        clipRule="evenodd" 
                    />
                </svg>
            </motion.button>
        </div>
    )
}