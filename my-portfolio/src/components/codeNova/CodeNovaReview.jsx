import CodeReviewImg from "../../assets/images/codeReview.png"

const CodeNovaReview = () => {
    return(
                <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-4 md:gap-8 items-start mt-16 md:mt-28 lg:mt-40">
                    
                    {/* 프로젝트 정보 */}
                    <div className="w-full md:w-[45%] h-full flex flex-col text-xs md:text-sm lg:text-sm">
                        
                        <div className="w-[80%] md:w-full h-auto flex flex-col gap-2 ml-8 mt-8">

                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                회고
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                이번 프로젝트는 기획부터 테스트, 배포, 피드백 반영까지 전 과정을 팀원들과 긴밀하게 협업하며 진행한 애자일 프로젝트였습니다.  
                                <br/>특히 MVP 우선 배포 전략을 두고 발생한 의견 충돌을 조율하며, 사용자의 피드백을 빠르게 수용하고 서비스에 반영하는 반복적 개선의 중요성을 실감할 수 있었습니다.  
                                <br/>저는 프론트엔드를 맡아 UI/UX 구현과 상태 관리를 담당하며, 기획과 개발, 그리고 사용자 경험 사이에서 균형을 맞추는 협업 감각을 키울 수 있었습니다.  
                                팀원들과 매일 진행 상황을 공유하며 각자의 역할에 유연하게 대응하고, 일부 백엔드 기능까지 함께 분담해 개발 효율을 높일 수 있었습니다.  
                                <br/>이 경험을 통해 역할 분담과 커뮤니케이션이 명확한 협업이야말로 서비스 완성도를 높이는 핵심이라는 것을 깊이 체감했습니다.
                            </div>
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                아쉬운 점
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2 ">
                                메크로 감지 로직을 통해 기본적인 자동 입력은 어느 정도 탐지할 수 있었지만, 사람의 입력 패턴을 모방한 정교한 메크로는 완전히 구별하지 못한 점이 아쉬웠습니다.  
                                이후에는 KeyLogs 데이터를 기반으로 입력 패턴을 학습하고 분석하는 AI 기반 메크로 판별 모델을 적용해  
                                보다 정밀한 탐지가 가능하도록 고도화해보고 싶습니다.  
                                <br/>
                                현재 Refresh토큰 없이이 JWT 기반 인증 방식을 사용하다 보니 토큰이 만료되기 전까지는 강제 로그아웃 처리가 불가능하다는 한계가 있었습니다.  
                                다음에는 세션 기반 인증 또는 서버에서 토큰을 실시간으로 무효화할 수 있는 구조를 도입하여,  
                                감지 즉시 로그아웃 처리가 가능하도록 개선하고 싶습니다.
                                <br/>
                                마지막으로, 초기 화면 설계 시 컴포넌트를 더 세분화하여 구성했더라면, 재사용성과 유지보수 측면에서 더 효율적이었을 것이라 생각합니다. 
                                다음에는 초기 설계 단계에서부터 컴포넌트 분리를 염두에 두고, 렌더링 최적화와 구조적인 확장성을 함께 고려한 개발을 해보고 싶습니다.
                            </div>
                        </div>

                    </div>

                    <div        
                        className="w-[1px] h-full bg-gray-400 ml-8"
                    />
        
                    <div className="w-full md:w-[45%] flex flex-col h-full items-start md:mt-8 gap-8 text-xs md:text-sm lg:text-sm">
                        <div className="w-[80%] md:w-full h-auto flex flex-col gap-2 ml-8">
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                트러블 슈팅
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <div className="font-semibold">
                                    메크로 및 악성 유저
                                </div>

                                <div className="font-semibold ">
                                    문제 상황
                                </div>
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 초기에는 프론트에서 타수를 측정 및 서버로 전달</li>
                                    <li>- 싱글 게임시 타수를 api의 탈취해 조작해 기록을 조작</li>
                                    <li>- 또한 메크로를 통해 타수를 조작시도</li>
                                </ul>

                                <div className="font-semibold ">
                                    해결 방법
                                </div>
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
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