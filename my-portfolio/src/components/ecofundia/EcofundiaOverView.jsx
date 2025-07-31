import msaAcrhImg from "../../assets/images/msa_arch.png";

const EcofundiaOverView = () => {

        return(
            <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start mt-16 md:mt-28 lg:mt-40">
                
                {/* 프로젝트 정보 */}
                <div className="w-full md:w-[40%] h-full flex flex-col md:flex-row gap-8 text-xs md:text-sm lg:text-base">
                    
                    <div className="w-[90%] md:w-full h-full flex flex-col gap-2 ml-8 mt-8 p-1">
                        <div>
                            최근 크라우드 펀딩 시장은 빠르게 성장하고 있는데요. 특히, 친환경에 대한 관심이 높아지면서 환경 보호 키워드가 
                            포함된 제품의 수요가 증가하고 있으며, 산불과 같은 재난 상황에서도 시민들은 펀딩을 통해 자발적으로 도움을 
                            주는 등 선한 영향력을 실천하는 흐름이 뚜렷하게 나타나고 있습니다. 이러한 사회적 흐름 속에서, 
                            작은 실천이 모여 큰 변화를 이끌어낼 수 있도록 돕는 친환경 크라우드 펀딩 플랫폼, ECO FUNDIA를 기획하게 되었습니다.
                        </div>
                    
                    {/* 구현 기능 */}
                    <div className="flex flex-col w-full gap-2 mt-4">
                        <ul className="list-none ml-5 space-y-1 leanding-relaxed">
                            <li>
                                <strong>리얼 타임 모금액</strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- 실시간 모금액 조회 - Redis + STOMP </li>
                                  <li>- 금액 페이지에 있는 사용자만 구독</li>
                                  <li>- Redis를 활용한 캐싱으로 조회성능 개선</li>
                                </ul>
                            </li>
                            <li>
                                <strong>펀딩 상품 단체 채팅방</strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- 펀딩 상품 오픈 채팅 Kafka + STOMP</li>
                                  <li>- 채팅 기록을 DB에 저장해 지워지지 않도록 관리</li>
                                </ul>
                            </li>
                            <li>
                                <strong>쿠폰 발급</strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- Redis + Lua 스크립트 기반으로 쿠폰 발급 시스템구축</li>
                                  <li>- 동시성 제어를 효과적으로 처리</li>
                                  <li>- Kafka를 활용해 쿠폰 발급 이력을 비동기로 저장</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
    
                    </div>
                </div>
    
                <div className="w-[80%] md:w-[50%] flex h-full items-center">
                    <img src={msaAcrhImg} alt="아키텍처" 
                        className="w-full"
                    />

                    {/* 화면 이미지들 */}
                    {/* <div className="w-[50%] flex flex-col p-2 gap-2">
                        <img src={multImg} alt="아키텍처" 
                        className="w-full"
                        />
                    <img src={meteoImg} alt="아키텍처" 
                        className="w-full"
                    />
                    </div> */}
                </div>
                
            </div>
        )
}

export default EcofundiaOverView;