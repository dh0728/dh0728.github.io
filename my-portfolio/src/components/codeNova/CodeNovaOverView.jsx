import archImg from "../../assets/images/arch.png";
import multImg from "../../assets/images/mult.png";
import meteoImg from "../../assets/images/meteo.png";

const CodeNovaOverView = () => {

        return(
            <div className="grid w-full min-w-0 gap-8 break-words lg:grid-cols-2 items-start">

                {/* 프로젝트 정보 */}
                <div className="w-full flex flex-col gap-8 text-sm md:text-base leading-relaxed min-w-0">

                    <div className="w-full flex flex-col gap-2 min-w-0">
                        <div>
                            요즘 개발 환경은 자동완성, 코드 포맷팅, AI 힌트에 많이 의존합니다. 하지만 이러한 도구에 익숙해질수록
                            스스로 생각하고 코드를 손으로 익히는 감각은 점점 줄어듭니다. 때문에 저희는 단순히 도구에 의존하는 것이 아닌
                            직접 타이핑을 통해 코딩 감각을 기르는 플랫폼을 만들고자 했습니다.
                        </div>

                    {/* 구현 기능 */}
                    <div className="flex flex-col w-full gap-2 mt-4">
                        <ul className="list-none ml-5 space-y-1 leading-relaxed">
                            <li>
                                <strong>🎮 싱글 모드</strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- 혼자서 타이핑 실력을 기를 수 있는 기본 모드</li>
                                  <li>- 실제 문법 기반 코드 타이핑 → 결과 자동 랭킹 등록</li>
                                  <li>- 코드 복습 기능 + AI 챗봇을 통한 코드 해설 제공</li>
                                </ul>
                            </li>
                            <li>
                                <strong>⚔️ 멀티 모드</strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- 2~4인이 함께 즐기는 실시간 코드 배틀</li>
                                  <li>- 동일한 문제를 타이핑하며 정확도 + 속도로 승부</li>
                                  <li>- 경쟁을 통한 코딩 실력 향상</li>
                                </ul>
                            </li>
                            <li>
                                <strong>☄️ 유성 모드</strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- 최대 4인 팀이 되어 하늘에서 떨어지는 단어를 막는 협동 콘텐츠</li>
                                  <li>- 역할 분담 및 협업 타이핑 → 집중력과 팀워크 강화</li>
                                </ul>
                            </li>
                            <li>
                                <strong>🔐 보안 & 공정성 기능</strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- 매크로 방지 키로그 분석, 포커스 감지 및 모니터링</li>
                                  <li>- 공정한 랭킹 시스템을 위한 비정상 입력 탐지 로직 적용</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    </div>
                </div>

                <div className="w-full flex items-center justify-center min-w-0">
                    <img src={archImg} alt="아키텍처"
                        className="rounded-2xl w-[40%] md:w-[35%] h-auto"
                    />

                    {/* 화면 이미지들 */}
                    <div className="w-[40%] flex flex-col p-2 gap-2">
                        <img src={multImg} alt="아키텍처"
                        className="rounded-2xl w-full h-auto"
                        />
                        <img src={meteoImg} alt="아키텍처"
                            className="rounded-2xl w-full h-auto"
                        />
                    </div>
                </div>

            </div>
        )
}

export default CodeNovaOverView;
