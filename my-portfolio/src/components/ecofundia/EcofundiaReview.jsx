import CodeReviewImg from "../../assets/images/codeReview.png"

const EcofundiaReview = () => {
    return(
                <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start mt-16 md:mt-28 lg:mt-40">
                    
                    {/* 프로젝트 정보 */}
                    <div className="w-full md:w-[45%] h-full flex flex-col text-xs md:text-sm lg:text-sm">
                        
                        <div className="w-[80%] md:w-full h-auto flex flex-col gap-2 ml-8 mt-8">

                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                회고
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                ECO FUNDIA 프로젝트는 제가 처음으로 Spring 기반 MSA 아키텍처를 설계하고, Kafka, Redis, MongoDB 등 다양한 기술 스택을 실무에 적용해본 의미 있는 경험이었습니다. 단순히 기능 구현에 그치지 않고, 트래픽 분산, 메시지 유실 방지, API 보안 등 
                                실서비스에 필요한 요소들을 깊이 고민하며 설계하였습니다. <br/>특히 Kafka 기반 오픈채팅 시스템을 구현하며, 실시간성과 안정적인 데이터 저장을 동시에 달성하기 위해 메시지 버퍼링, 스케줄러, 이중 저장 구조 등을 직접 설계하고 적용한 점은 큰 도전이자 성장의 계기가 되었습니다. 
                                <br/>이번 프로젝트를 통해 단순한 백엔드 개발을 넘어, 시스템 전체의 구조를 바라보며 설계하고 문제를 예측하고 대응하는 시야를 넓힐 수 있었습니다.
                                앞으로도 기술적인 깊이와 시스템적인 통찰을 함께 성장시켜 나가고자 합니다.
                            </div>
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                아쉬운 점
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                이번 프로젝트에서는 기능 개발과 통합에 집중하다 보니, 개별 서비스에 대한 단위 테스트와 통합 테스트 코드 작성이 상대적으로 부족했습니다.  
                                특히 MSA 구조에서 각 서비스가 독립적으로 운영되다 보니, 외부 API 호출 실패나 Kafka 메시지 소비 실패 등 다양한 예외 상황이 발생할 수 있음에도  
                                이러한 케이스에 대한 테스트 시나리오와 복구 전략을 충분히 마련하지 못한 점이 아쉬웠습니다.  
                                <br/>다음 프로젝트에서는 TestContainer, Mockito, RestAssured 등의 도구를 적극 활용하여 테스트 커버리지를 확보하고,  
                                서비스 간 테스트를 통해하여 신뢰성 있는 MSA 서비스 구조를 구축하는 데 집중하고자 합니다.

                            </div>
                        </div>

                    </div>

                    <div        
                        className="w-[1px] h-full bg-gray-400 ml-8"
                    />

                    
        
                    <div className="w-full md:w-[45%] flex flex-col h-full items-start mt-8 gap-8 text-xs md:text-sm lg:text-sm">
                        <div className="w-[80%] md:w-full h-auto flex flex-col gap-2 ml-8">
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                트러블 슈팅
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <div className="font-semibold">
                                    경로 매핑 오류 (Spring MVC 우선순위 충돌)
                                </div>

                                <div className="font-semibold">
                                    문제 상황
                                </div>
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
                                    <li>- /my와 같이 짧고 일반적인 경로가 /selleId 같은 동적 변수 경로와 충돌하여 매핑이 올바르게 되지 않음.</li>
                                </ul>

                                <div className="font-semibold ">
                                    해결 방법
                                </div>
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
                                    <li>- 일반적인 경로(/my) 대신 구체적인 명칭(/user/profile)으로 변경하여 동적 경로와의 우선순위 충돌 방지.</li>
                                </ul>
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <div className="font-semibold">
                                    Kafka 메시지 역직렬화 실패
                                </div>

                                <div className="font-semibold ">
                                    문제 상황
                                </div>
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
                                    <li>- Kafka 메시지를 ConsumerRecord &lt;String, String&gt;으로 받았지만, 실제 메시지는 JSON 형태였고 설정에 따라 ChatMessageDto로 역직렬화되려다 ClassCastException 발생.</li>
                                </ul>

                                <div className="font-semibold ">
                                    해결 방법
                                </div>
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
                                    <li>- Kafka 설정에서 value-deserializer를 StringDeserializer로 변경해 메시지를 문자열로 받고,
                                          이후 ObjectMapper를 통해 수동으로 ChatMessageDto로 파싱하도록 수정하여 충돌 방지.</li>
                                </ul>
                            </div> 
                        </div>

                    </div>
                    
                </div>
            )
}

export default EcofundiaReview;