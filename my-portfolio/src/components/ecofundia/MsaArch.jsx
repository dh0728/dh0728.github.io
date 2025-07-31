import MsaArchImg from "../../assets/images/msa_arch2.png"

const MsaArch = () => {
    return(
                <div className="relative w-full h-[65%] flex flex-col md:flex-row flex-wrap justify-center gap-8 items-start mt-16 md:mt-28 lg:mt-40">
                    
                    {/* 프로젝트 정보 */}
                    <div className="w-full md:w-[40%] h-full flex flex-col gap-8 text-xs md:text-sm lg:text-base">
                        
                        <div className="w-full h-auto flex flex-col gap-2 ml-8 mt-8">
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                MSA 아키텍처 구현
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                <ul className="ml-1 space-y-1 leanding-relaxed">
                                    <li>- MSA 기반의 3-Tier 아키텍처로 서비스를 설계</li>
                                    <li>- Spring Cloud 기반의 MSA 아키텍처 구성 </li>
                                    <li>- Eureka Server를 통한 서비스 등록 및 탐색 구현</li>
                                    <li>- Spring Cloud Gateway로 진입 트래픽 라우팅 처리</li>
                                    <li>- 서비스 간 통신을 위해 Feign Client 도입</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col gap-2 ml-8">
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                설명
                            </div>

                            <div className="flex flex-col w-[95%] gap-2 mt-2">
                                <ul className="ml-1 space-y-1 leanding-relaxed">
                                    <li>- 전체 시스템은 크게 Client, Application, Data 세 개의 계층으로 나뉘어 설계. </li>
                                    <li>- Public한 서비스와 Private한 서비스를 분리하였습니다.</li>
                                    <li>- User, Seller, Business, Notification과 같은 Public 서비스는 클라이언트에서 직접 접근이 가능한 서비스입니다.</li>
                                    <li>- Funding, Coupon, Payment, Chat은 내부에서만 호출 가능한 Private 서비스로 설계</li>
                                    <li>- 계층화 구조와 도메인 중심의 서비스 분리를 통해 보안성 강화, 서비스 간 결합도 감소, 그리고 역할 책임의 명확화할 수 있도록 설계하였습니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                    <div className="w-full md:w-[50%] flex h-full items-center justify-center mt-4">
                        <img src={MsaArchImg} className="w-[80%]" alt="msa아키텍처"/>

                    </div>
                    
                </div>
            )
}

export default MsaArch;