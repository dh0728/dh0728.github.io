import logoImg from "../assets/images/logo.png"
// import { useNavigate } from 'react-router-dom'

const MainHeader = ({ onMoveToSection }) => {

    // const navigate = useNavigate();

    return(
        <div className="fixed top-0 left-0 w-full h-[12%] flex items-center px-2 bg-white/50 z-10">

            {/*  logo */}
            <img 
                src={logoImg} 
                alt="로고이미지" 
                className="w-[12%] cursor-pointer transition-all duration-200 hover:text-[#3BA9F2] hover:scale-105"
                onClick={() => onMoveToSection('about')}
            />

            <div className="w-[40%]">

            </div>
            {/* PROFILE */}
            <div className=" font-bold text-2xl mr-12 cursor-pointer transition-all duration-200 hover:text-[#3BA9F2] hover:scale-105"
                onClick={() => onMoveToSection('about')}
            >
                ABOUT ME
            </div>

            <div className=" font-bold text-2xl mr-12 cursor-pointer transition-all duration-200 hover:text-[#3BA9F2] hover:scale-105"
                onClick={() => onMoveToSection('career')}
            >
                CAREER
            </div>

            <div className=" font-bold text-2xl mr-12 cursor-pointer transition-all duration-200 hover:text-[#3BA9F2] hover:scale-105"
                onClick={() => onMoveToSection('skill')}
            >
                SKILL
            </div>

            {/* PORTFOLIO */}
            <div className=" font-bold text-2xl cursor-pointer transition-all duration-200 hover:text-[#3BA9F2] hover:scale-105">
                PORTFOLIO
            </div>
            {/*  */}


        </div>
    );
}

export default MainHeader;