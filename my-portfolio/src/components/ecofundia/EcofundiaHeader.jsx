import EcofundiaMainImg from "../../assets/images/EcofundiaMain.png";
import ChatingImg from "../../assets/images/chating.jpg"

const EcofundiaHeader = () => {
    return(
        <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start">
            
            {/* 프로젝트 정보 */}
            <div className="w-[50%] h-full flex gap-8">
                
                <div className="w-[40%] h-full flex flex-col gap-2 ml-8 mt-8">

                    {/* 개발기간 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            개발 기간: 
                        </div>
                        <div>
                            2025.02.24 ~ 2025.04.11
                        </div>
                    </div>

                    {/* 개발인원 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            개발 인원: 
                        </div>
                        <div>
                            6인 프로젝트
                        </div>
                    </div>

                    {/* 역할 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            역할: 
                        </div>
                        <div>
                            Backend
                        </div>
                    </div>

                    {/* 기여도 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            기여도: 
                        </div>
                        <div>
                            30%
                        </div>
                    </div>

                    {/* 기여도 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            기술: 
                        </div>
                        <ul className="list-none ml-5 space-y-1 text-sm leanding-relaxed">
                            <li>
                                <strong>Spring</strong>
                            </li>
                            <li>
                                <strong>JAVA</strong>
                            </li>
                            <li>
                                <strong>Kafka</strong>
                            </li>
                            <li>
                                <strong>MySQL</strong>
                            </li>
                             <li>
                                <strong>MongoDB</strong>
                            </li>
                             <li>
                                <strong>Redis</strong>
                            </li>
                        </ul>
                    </div>

                </div>
                {/* 구현 기능 */}
                <div className="flex flex-col w-[40%] gap-2 mt-8">
                    <div className="w-[20%]">
                        구현기능 
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
                            <strong>화면면 렌더링 API</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 펀딩 상품 리스트 조회 api 구현</li>
                              <li>- 5개씩 상품을 페이지네이션</li>
                              <li>- 펀딩 상품 상세 페이지 api 구현</li>
                              <li>- 판매자 상세정보 api 구현현</li>
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

            <div className="w-[40%] flex h-full items-center justify-center gap-4">
                <img src={EcofundiaMainImg} alt="ecofundia이미지" 
                    className="rounded-2xl  h-full"
                />
                <img src={ChatingImg} alt="ecofundia이미지" 
                    className="rounded-2xl  h-full"
                />
            </div>
            
        </div>
    )
}

export default EcofundiaHeader;