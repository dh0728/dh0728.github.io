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
                                    <li>- api를 탈취하여 타수를 조작하려는 악성유저를 방지하기 위해 AES 암호화 알고리즘을 사용해 서버로 보내는 KeyLogs를 암호화하여 전달했습니다.   </li>
                                    <li>- 오타 교정 및 줄 단위 이동 구조를 통해 디버깅 감각과 흐름 파악 능력 향상을 유도하고자 했습니다.</li>
                                    <li>- 입력 키는 keyLogsRef에 실시간으로 기록되며, 이를 바탕으로 매크로 행위 감지를 위한 보안 로직을 프론트에서 선처리하도록 설계했습니다.</li>
                                    <li>- cursor 위치 기반 자동 스크롤, input 창 포커스 유지, 줄 단위 코드 렌더링 등 UX 세부 요소를 직접 구현하여 타자 흐름이 끊기지 않도록 했습니다.</li>
                                    <li>- 코드 완료 시 AES 기반 암호화를 통해 민감한 데이터를 안전하게 처리하였고, 사용자의 타자 기록을 서버에 저장하기 전에 검증 절차를 추가해 신뢰성을 높였습니다.</li>
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