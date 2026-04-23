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
                                    <li>- Public 접근 경로와 내부 전용 호출 경로를 구분하여 서비스 접근 범위를 분리하였습니다.</li>
                                    <li>- Funding, Coupon, Payment, Chat 서비스는 클라이언트에서 직접 접근하지 않고, Public 서비스를 통해서만 호출되는 내부 전용 서비스로 구성하였습니다.</li>
                                    <li>- 이러한 구조를 통해 서비스 간 호출 경로를 명확히 하고, 각 도메인의 책임을 분리하여 변경 영향도를 제한할 수 있도록 설계하였습니다.</li>
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