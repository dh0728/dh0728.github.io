import profileImg from "../assets/images/profileImg.jpg"
import { Mail, Github, Globe } from "lucide-react"; // 아이콘 임포트

const AboutMe = () => {

    const aboutItems = [
        // { label: "이름", value: "송동현" },
        // { label: "생년월일", value: "1999.07.28" },
        { label: "Email", value: "dustkscjswo@naver.com" , type: "email"},
        { label: "Blog", value: "https://gyeongsangman.tistory.com/", type: "link" },
        { label: "Github", value: "https://github.com/dh0728", type: "link"},
    ];

    const tmi = ["#백엔드", "#웹개발자", "#파이썬 좋아", "#자바도 좋아" ,"#열정맨", "#중꺽그마" ,"#ISFP", "#축구가 취미", "#코딩이 취미", "#운동 좋아"]
    
    return(
        // <div className="relative w-full h-[65%] flex gap-8 justify-center">
        <div className="relative w-full h-auto 
                        flex flex-col md:flex-row 
                        gap-4 md:gap-6 lg:gap-8   
                        justify-center            
                        items-center md:items-start 
                        px-4                /* 모바일 기본 */
                        md:px-6           /* 태블릿 이상 */
                        lg:px-12         /* PC 이상 */
                        
                        ">
            <img 
                src={profileImg} 
                alt="내 이미지" 
                className="w-34 h-32 md:w-48 md:h-auto lg:w-[20%] lg:h-auto
                            object-contain shadow-2xl rounded-xl"
            />

            <div className="w-full h-[35%] md:w-[60%] lg:w-[40%]
                           flex flex-col justify-center
                           text-base md:text-lg lg:text-2xl
            ">
                <div className="text-center 
                                font-bold leading-relaxed text-gray-800 mb-6
                                text-base md:text-xl lg:text-2xl
                ">
                  <span className="text-blue-500">요구사항</span>을 기술로 해석하고,<br />
                  가장 <span className="text-blue-500">효율적인 구조</span>로 풀어내는 <strong>개발자 <span className="text-blue-500">송동현</span></strong>입니다
                </div>

                <div className="flex flex-col items-center md:flex-row gap-4 justify-center 
                                h-[20%]    
                ">
                    {/* 버튼세게(github, blog, email) 각 버튼안에 아이콘 넣을 예정 색색은 text-blue-500 */}
                    <a 
                      href="mailto:dustkscjswo@naver.com"
                      className="
                        flex items-center justify-center gap-2 
                        w-[30%] md:w-[25%] h-12
                        px-2 py-2
                        bg-blue-500 rounded-xl
                        text-white font-normal
                        shadow-sm hover:shadow-md
                        hover:bg-blue-400 transition
                        "
                    >
                      <Mail size={30} className="text-white" />
                      <span>Email</span>
                    </a>
                    <a 
                      href="https://github.com/dh0728"
                      target= "_blank"
                      className="
                        flex items-center justify-center gap-2 
                        w-[30%] md:w-[25%] h-12
                        px-2 py-2
                        bg-blue-500 rounded-xl
                        text-white font-normal
                        shadow-sm hover:shadow-md
                        hover:bg-blue-400 transition
                        "
                    >
                    <Github size={30} className="text-white" />
                    <span>GitHub</span>
                
                    </a>

                    <a 
                      href="https://gyeongsangman.tistory.com/"
                      target="_blank"
                      className="
                        flex items-center justify-center gap-2 
                        w-[30%] md:w-[25%] h-12
                        px-2 py-2
                        bg-blue-500 rounded-xl
                        text-white font-normal
                        shadow-sm hover:shadow-md
                        hover:bg-blue-400 transition
                        "
                    >
                      <Globe size={30} className="text-white" />
                      <span>Blog</span>       
                    </a>
                </div>

                <div className="tmi w-full justify-center items-center hidden md:flex flex-wrap gap-4 px-8 mt-8">
                    {tmi.map((item, index) =>(
                      <div
                        key= {index}
                        className="bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default AboutMe;