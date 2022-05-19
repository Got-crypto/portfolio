import { useEffect, useState } from "react";
import Logo from "./Navbar/logo";
import Navigation from "./Navbar/navigation";

export default function Navbar( {
    scrollToAchievementsSection,
    scrollToIntroductionSection,
    scrollToProjectsSection,
    scrollToSkillsSection,
    handleShowPictureOverlay,

} ){
    const [navbarDisplayed, setNavbarDisplayed] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
 
    useEffect(()=>{
        let scrollLocation = window.pageYOffset

        setScrollPosition(scrollLocation)
        console.log('scrollLocation', scrollLocation)
    }, [])
    return (
        <nav className="w-full flex relative h-auto z-20 justify-center">
            <div className="h-20 w-full fixed z-20"/>
            <div className="max-w-screen-lg fixed z-20 mx-auto font-bold text-sm  w-full h-20 items-center grid grid-cols-3">
                <Logo 
                    handleShowPictureOverlay={handleShowPictureOverlay} 
                />
                <Navigation  
                    scrollToIntroductionSection={scrollToIntroductionSection}
                    scrollToAchievementsSection={scrollToAchievementsSection}
                    scrollToProjectsSection={scrollToProjectsSection}
                    scrollToSkillsSection={scrollToSkillsSection}
                />
            </div>
        </nav>
    )
}