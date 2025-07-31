import codeNovaMainImg from "../../assets/images/codeNovaMainImg.png";
import {
  Calendar,
  Users,
  Laptop,
  UserCog,
  BarChart3,
  Code,
  Github,
  Youtube,
  Link,
  UserCheck,
  Award
} from "lucide-react";

const CodeNovaHeader = () => {

    const tech = ["React", "JS", "Tailwind", "Spring"]

    return(
        <div className="relative w-full h-[65%] flex flex-col md:flex-row justify-center gap-8 items-start mt-16 md:mt-28 lg:mt-40">
            
            {/* 프로젝트 정보 */}
            <div className=" w-full md:w-[50%] h-full flex flex-col md:flex-row gap-8 text-xs md:text-base">
                
                <div className=" w-full md:w-[40%] h-full flex flex-col gap-2 ml-8 mt-8">

                    {/* 개발기간 */}
                    <div className="flex w-full items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-500"/>
                            <span className="text-blue-500 text-sm"> 기간 :</span>
                        </div>
                        <div>
                            2025.04.14 ~ 2025.05.22
                        </div>
                    </div>

                    {/* 개발인원 */}
                    <div className="flex w-full items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span className="text-blue-500 text-sm"> 인원 :</span>
                        </div>
                        <div>
                            6인 프로젝트
                        </div>
                    </div>

                    {/* 역할 */}
                    <div className="flex w-full items-center gap-2">
                        <div className="flex items-center gap-2">
                            <UserCog className="w-4 h-4 text-blue-500" />
                            <span className="text-blue-500 text-sm"> 역할 :</span>
                        </div>
                        <div>
                            Backend
                        </div>
                    </div>

                    {/* 기여도 */}
                    <div className="flex w-full items-center gap-2">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-blue-500" />
                            <span className="text-blue-500 text-sm"> 기여도 :</span>

                        </div>
                        <div>
                            30%
                        </div>
                    </div>

                    {/* 수상내역 */}
                    <div className="flex w-full items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-blue-500" />
                            <span className="text-blue-500 text-sm"> 수상내역 :</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col text-xs ml-8">
                        <span>
                            - SSAFY 프로젝트 전시발표회 전시부문 1등 
                        </span>
                        <span>
                            - SSAFY 2학기 자율 프로젝트 최우수상
                        </span>
                    </div>

                    {/* tool */}
                    <div className="flex w-full gap-2">
                        <Code className="w-4 h-4 text-blue-500" />
                        <div className="flex flex-wrap gap-2">
                            {tech.map((item, idx) => (
                            <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs shadow-sm" key={idx}> 
                                {item} 
                            </span>
                        ))}
                        </div>

                    </div>

                    {/* 깃헙레포 */}
                    <div className="flex w-full items-center gap-2">
                        <Link className="w-4 h-4 text-blue-500" />
                        <a href="https://github.com/dh0728/codeNova?tab=readme-ov-file"
                            className="
                            flex items-center justify-center gap-2 
                            w-auto 
                            px-2 py-1
                            bg-gray-300 rounded-xl
                            shadow-sm hover:shadow-md
                            hover:bg-gray-500 transition"
                        >
                            <Github className="w-4 h-4" />
                            <span className="text-xs md:text-base">깃헙</span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=H6nqYdognwc"
                            className="
                            flex items-center justify-center gap-2 
                            w-auto 
                            px-2 py-1
                            bg-red-200 rounded-xl
                            shadow-sm hover:shadow-md
                            hover:bg-red-300 transition"
                        >
                            <Youtube className="w-4 h-4 text-red-500" />
                            <span className="text-red-600 text-xs md:text-base"> 영상</span>
                
                           
                        </a>
                    </div>
                </div>
                {/* 구현 기능 */}
                <div className="flex flex-col w-full md:w-[40%] gap-2 mt-8 ml-8">
                    
                    <div className="w-full flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-blue-500"/>
                        <span className="text-blue-500 text-xs md:text-base">구현기능 :</span> 
                    </div>

                    <ul className="list-none ml-5 space-y-1 text-sm leanding-relaxed">
                        <li>
                            <strong>싱글페이지</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 실시간 코드 타이핑 게임 화면 구성</li>
                              <li>- KeyLogs AES 기반 암호화</li>
                            </ul>
                        </li>
                        <li>
                            <strong>코드 리뷰 페이지</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- Highlight.js 기반 코드 하이라이팅</li>
                              <li>- AI 챗봇</li>
                            </ul>
                        </li>
                        <li>
                            <strong>마이페이지</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 사용자 닉네임 및 전화번호 수정 기능</li>
                              
                            </ul>
                        </li>
                        <li>
                            <strong>설정</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 색약자용 텍스트 색상 커스터마이징</li>
                              <li>- 게임 사운드 볼륨 조절</li>
                            </ul>
                        </li>
                        <li>
                            <strong>랭킹 페이지</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 실시간 타속 랭킹</li>
                            </ul>
                        </li>
                        
                        <li>
                            <strong>매크로 감지</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 일력 로그 기반 이상 행위 탐지 및 판단</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="w-full md:w-[40%] flex h-full items-center justify-center">
                <img src={codeNovaMainImg} alt="코드노바메인이미지지" 
                    className="rounded-2xl w-[80%] md:w-full h-auto"
                />
            </div>
            
        </div>
    )
}

export default CodeNovaHeader;