import EcofundiaMainImg from "../../assets/images/EcofundiaMain.png";
import ChatingImg from "../../assets/images/chating.jpg"
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
  UserCheck
} from "lucide-react";

const EcofundiaHeader = () => {

    const tech = ["Spring" , "JAVA", "Kafka", "MySQL", "Redis" , "MongoDB"]

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
                            2025.02.24 ~ 2025.04.11
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

                    {/* 기여도 */}
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
                        <a href="https://github.com/dh0728/EcoFundia"
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
                        <a href="https://youtu.be/caPTGYGb8qg"
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
                            <strong>MSA 아키텍처 설계</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 도메인 단위로 서비스 분리</li>
                              <li>- Client, Application, Data</li>
                            </ul>
                        </li>
                        <li>
                            <strong>화면 렌더링 API</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 펀딩 상품 리스트 조회 api 구현</li>
                              <li>- 5개씩 상품을 페이지네이션</li>
                              <li>- 펀딩 상품 상세 페이지 api 구현</li>
                              <li>- 판매자 상세정보 api 구현</li>
                            </ul>
                        </li>
                        <li>
                            <strong>펀딩 상품 오픈채팅</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 관심 있는 유저 간 소통을 위한 채팅방 구현</li>
                              <li>- 참여한 채팅방 목록 조회 및 재입장 기능 지원</li>
                              <li>- STOMP + Kafka 기반의 오픈채팅 시스템 구축</li>
                            </ul>
                        </li>

                    </ul>
                </div>

            </div>

            <div className=" w-full md:w-[40%] flex h-full items-center justify-center gap-4">
                <img src={EcofundiaMainImg} alt="ecofundia이미지" 
                    className="rounded-2xl  w-[35%] h-auto"
                />
                <img src={ChatingImg} alt="ecofundia이미지" 
                    className="rounded-2xl w-[35%] h-auto"
                />
            </div>
            
        </div>
    )
}

export default EcofundiaHeader;