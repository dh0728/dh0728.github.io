import SingleModeImg from "../../assets/images/singleMode.png"

const SingleMode = () => {
    return(
                <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start mt-16 md:mt-28 lg:mt-40">
                    
                    {/* 프로젝트 정보 */}
                    <div className="w-full md:w-[40%] h-full flex flex-col gap-8 text-xs md:text-sm lg:text-sm">
                        
                        <div className="w-full h-auto flex flex-col gap-2 ml-8 mt-8">
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                싱글 타자 게임 화면
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
                                    <li>- 코드를 줄 단위로 분해해 사용자가 직접 입력하도록 구현 </li>
                                    <li>- 현재 줄, 완료한 줄 오타에 따라 시각적으로 다른 색을 적용 </li>
                                    <li>- 완료시 입력 기록 (KEYlOGS)를 실시간으로 수집하고 서버에 전송 </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col gap-2 ml-8 ">
                            <div className="text-xl font-bold">
                                설명
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
                                    <li>- 클라이언트에서 생성되는 KeyLogs가 네트워크 상에서 평문으로 노출되거나 단순 조작되는 것을 방지하기 위해, AES 기반 암호화를 적용해 서버로 전달하도록 구성했습니다.  </li>
                                    <li>- 오타 교정 및 줄 단위 이동 구조를 통해 디버깅 감각과 흐름 파악 능력 향상을 유도하고자 했습니다.</li>
                                    <li>- 입력 키 이벤트를 실시간으로 기록해 매크로 감지를 위한 기초 데이터(KeyLogs)를 클라이언트에서 수집하고, 최종 판단은 서버에서 수행하도록 설계했습니다.</li>
                                    <li>- cursor 위치 기반 자동 스크롤, input 창 포커스 유지, 줄 단위 코드 렌더링 등 UX 세부 요소를 직접 구현하여 타자 흐름이 끊기지 않도록 했습니다.</li>
                                    <li>- 단순 타이핑을 넘어서 <strong>코드 해석 기능(설명 모달)</strong>을 통해 사용자 스스로 코드의 동작을 이해할 수 있도록 지원하였습니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                    <div className="w-full md:w-[50%] flex h-full items-center justify-center mt-4">
                        <img src={SingleModeImg} className="w-[80%] rounded-2xl" alt="싱글모드" 
                            
                        />

                    </div>
                    
                </div>
            )
}

export default SingleMode