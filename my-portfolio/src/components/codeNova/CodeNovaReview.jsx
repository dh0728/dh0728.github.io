import CodeReviewImg from "../../assets/images/codeReview.png"

const CodeNovaReview = () => {
    return(
                <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start">
                    
                    {/* 프로젝트 정보 */}
                    <div className="w-[45%] h-full flex flex-col">
                        
                        <div className="w-full h-auto flex flex-col gap-2 ml-8">

                            <div className="text-xl font-bold">
                                회고
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                이번 프로젝트를 통해 React와 Tailwind를 활용해 화면을 구성하고, Zustand를 사용해 프론트엔드 상태를 관리하는 방식에 대해 실질적으로 경험할 수 있었습니다.  
                                <br/>이전까지는 백엔드 중심으로만 프로젝트를 수행해왔기 때문에, 프론트엔드 개발자와의 협업 시 간혹 이해되지 않던 요구사항이나 의견들이 있었습니다.  
                                <br/>이번에는 직접 프론트엔드를 맡아 구현해보며, 데이터 흐름, 렌더링 구조, 상태 관리 등 프론트엔드 개발의 복잡성과 관점을 몸소 체감할 수 있었습니다.  
                                이를 통해 단순히 API를 제공하는 것이 아니라, 사용자 화면과 흐름까지 고려한 설계가 얼마나 중요한지 느꼈고,  
                                <br/>앞으로의 협업에서도 프론트엔드 개발자들의 입장을 더욱 잘 이해하며 원활한 커뮤니케이션을 이어갈 수 있을 것이라 생각합니다.
                            </div>
                            <div className="text-xl font-bold">
                                아쉬운 점
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2 text-sm">
                                메크로 감지 로직을 통해 기본적인 자동 입력은 어느 정도 탐지할 수 있었지만, 사람의 입력 패턴을 모방한 정교한 메크로는 완전히 구별하지 못한 점이 아쉬웠습니다.  
                                이후에는 KeyLogs 데이터를 기반으로 입력 패턴을 학습하고 분석하는 AI 기반 메크로 판별 모델을 적용해  
                                보다 정밀한 탐지가 가능하도록 고도화해보고 싶습니다.  
                                <br/>
                                현재 Refresh토큰 없이이 JWT 기반 인증 방식을 사용하다 보니 토큰이 만료되기 전까지는 강제 로그아웃 처리가 불가능하다는 한계가 있었습니다.  
                                다음에는 세션 기반 인증 또는 서버에서 토큰을 실시간으로 무효화할 수 있는 구조를 도입하여,  
                                감지 즉시 로그아웃 처리가 가능하도록 개선해보고자 합니다.  
                                <br/>
                                마지막으로, 초기 화면 설계 시 컴포넌트를 더 세분화하여 구성했더라면, 재사용성과 유지보수 측면에서 더 효율적이었을 것이라 생각합니다. 
                                다음에는 초기 설계 단계에서부터 컴포넌트 분리를 염두에 두고, 렌더링 최적화와 구조적인 확장성을 함께 고려한 개발을 해보고 싶습니다.
                            </div>
                        </div>

                    </div>

                    <div        
                        className="w-[1px] h-full bg-gray-400 ml-8"
                    />

                    
        
                    <div className="w-[45%] flex flex-col h-full items-center mt-8 gap-8">
                        <div className="w-full h-auto flex flex-col gap-2 ml-8">
                            <div className="text-xl font-bold">
                                트러블 슈팅
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <div className="font-semibold">
                                    메크로 및 악성 유저저
                                </div>

                                <div className="font-semibold text-sm">
                                    문제 상황
                                </div>
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 초기에는 프론트에서 타수를 측정 및 서버로 전달</li>
                                    <li>- 싱글 게임시 타수를 api의 탈취해 조작해 기록을 조작</li>
                                    <li>- 또한 메크로를 통해 타수를 조작시도</li>
                                </ul>

                                <div className="font-semibold text-sm">
                                    해결 방법
                                </div>
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 서버로 KeyLogs를 전달해 서버에서 측정하고 전달시에도 AES암호화 알고리즘을 통해 데이터 암호화</li>
                                    <li>- 서버에서 KeyLogs를 통해 시뮬레이션을 통해 올바르게 입력했는지 검사</li>
                                    <li>- KeyLogs를 통해 표준편차, 입력간 시간간격, 백스페이스 사용 여부, 특수키 사용여부 확인</li>
                                    <li>- 특정 타속이상인 경우, 메크로로 검증 로직을 통해 메크로 여부를 검증 </li>
                                    <li>- 메크로 검증은 입력 코드의 길이별로 조건을 조금씩 다르게 설정하여 검증 </li>
                                </ul>
                            </div>

                            {/* <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <div className="font-semibold">
                                    토큰 만료시 에러
                                </div>

                                <div className="font-semibold text-sm">
                                    문제 상황
                                </div>
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 로그아웃을 하지 않고 서비스를 계속 이용할 경우. 갑자기 에러가 발생</li>
                                    <li>- accessToken이 만료될 경우 refresh 토큰을 사용하지 않아 다시 로그인 되지 않아 발생</li>
                                    <li>- axios 요청시 JWT토큰 filter에서 검증시 401로 던져지게 할려고 했으나 게스트 로그인 토큰 디코딩 에러 발생</li>
                                </ul>

                                <div className="font-semibold text-sm">
                                    해결 방법
                                </div>
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 로그인시 토큰의 만료 시간을 추출해 스토리지에 함께 저장</li>
                                    <li>- 토큰 만료시 로그인 페이지로 이동</li>
                                </ul>
                            </div> */}
                        </div>

                    </div>
                    
                </div>
            )
}

export default CodeNovaReview;