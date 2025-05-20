import logoImg from "../assets/images/logo.png"

const MainHeader = () => {

    return(
        <div className="w-full h-[10%] flex items-center px-2">

            {/*  logo */}
            <img 
                src={logoImg} 
                alt="로고이미지" 
                className="w-[12%]"
            />

            <div className="w-[40%]">

            </div>
            {/* PROFILE */}
            <div className=" font-bold text-2xl mr-12">
                PROFILE
            </div>

            <div className=" font-bold text-2xl mr-12">
                SKILL
            </div>

            {/* PORTFOLIO */}
            <div className=" font-bold text-2xl">
                PORTFOLIO
            </div>
            {/*  */}


        </div>
    );
}

export default MainHeader;