import ChatingDescImg from "../../assets/images/chating_desc.png"

const Chating = () => {
    return(
                <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start">
                    
                    {/* 프로젝트 정보 */}
                    <div className="w-[40%] h-full flex flex-col">
                        
                        <div className="w-full h-auto flex flex-col gap-2 ml-8 mt-8">
                            <div className="text-xl font-bold">
                                오픈 채팅 시스템
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- Kafka와 STOMP를 활용하여 펀딩 상품별 오픈 채팅방 기능 구현</li>
                                    <li>- 채팅 메시지를 메모리 버퍼에 저장 후 일정 조건 시 MongoDB에 일괄 저장</li>
                                    <li>- 메시지 유실 방지 및 저장 효율성을 고려한 버퍼링 + 스케줄러 구조 설계</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col gap-2 ml-8 mt-8">
                            <div className="text-xl font-bold">
                                설명
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 실시간 채팅 메시지는 Kafka를 통해 비동기적으로 처리하여 트래픽 집중 시에도 안정적인 메시지 전달이 가능하도록 하였습니다.</li>
                                    <li>- Kafka의 토픽 구조를 펀딩 상품 단위로 분리하여 채팅방 간 메시지 간섭을 방지하였으며, 병렬 처리가 가능하도록 구성하였습니다.</li>
                                    <li>- 채팅 메시지는 MongoDB에 바로 저장하지 않고, 메모리 버퍼에 임시 저장하여 디스크 I/O 부하를 최소화하였습니다.</li>
                                    <li>- 50개 이상의 메시지가 버퍼에 누적되거나, 최초 메시지 저장 이후 50분이 경과하면 스케줄러가 MongoDB에 일괄 저장을 수행합니다.</li>
                                    <li>- 이러한 구조를 통해 실시간성은 유지하면서도, 데이터 저장 효율성과 시스템의 확장성을 동시에 확보하였습니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                    <div className="w-[50%] flex h-full items-center mt-4">
                        <img src={ChatingDescImg} alt="채팅설명" 
                            
                        />

                    </div>
                    
                </div>
            )
}

export default Chating