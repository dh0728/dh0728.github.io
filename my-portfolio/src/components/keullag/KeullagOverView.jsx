import acrhImg from "../../assets/images/keullag_aki.png";

const KeullagOverView = () => {

        return(
            <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start mt-16 md:mt-28 lg:mt-40">
                
                {/* 프로젝트 정보 */}
                <div className="w-full md:w-[40%] h-full flex flex-col md:flex-row gap-8 text-xs md:text-sm lg:text-base">
                    
                    <div className="w-[90%] md:w-full h-full flex flex-col gap-2 ml-8 mt-8 p-1">
                        <div>
                            클라이밍을 취미로 즐기는 사람들을 위해, 더 편리하고 즐겁게 클라이밍을 기록하고 공유할 수 있는 서비스를 기획하였습니다.
                            최근에는 자신의 클라이밍 영상을 촬영하여 SNS에 업로드하고 기록하는 문화가 활성화되고 있는데요. 저희는 그에 맞춰 
                            사용자의 실제 클라이밍 경험을 방해하지 않으면서도 더욱 스마트하게 기록하고 공유할 수 있는 환경을 제공하고자 하였습니다.
                        </div>
                    
                    {/* 구현 기능 */}
                    <div className="flex flex-col w-full gap-2 mt-4">
                        <ul className="list-none ml-5 space-y-1 leanding-relaxed">
                            <li>
                                <strong>🔍 주변 클라이밍장 조회</strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- 현재 외치 기준으로 가까운 클라이밍장 별 정렬 조회</li>
                                  <li>- 5개씩 페이지네이션해 랜더링 최적화</li>
                                </ul>
                            </li>
                            <li>
                                <strong>📏 이미지를 통한 윙스팬 측정 </strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- openCV + MediaPipe를 통한 윙스팬 측정</li>
                                </ul>
                            </li>
                            <li>
                                <strong>🎬 모션인식 + 기록 자동화</strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- Google ML Kit 기반 포즈 감지 기능</li>
                                  <li>- 모션 인식 + 음성 안내에 따라 터치 없이 영상 촬영</li>
                                  <li>- 오른손 들기(촬영시작), 박수(색상선택), 두손들기(촬영시작), O or X(성공여부)</li>
                                </ul>
                            </li>
                            <li>
                                <strong>✏️ 캘린더 + 통계를 통한 기록 관리</strong>
                                <ul className="list-none ml-4 space-y-1">
                                  <li>- 게이미피케이션 요소를 도입하여 성취감 극대화</li>
                                  <li>- 클라이밍장 반경 500미터 이내일 경우 클라이밍장 해금</li>
                                  <li>- 클라이밍장 별 클리어 횟수를 통한 메달 획득</li>
                                  
                                </ul>
                            </li>
                        </ul>
                    </div>
    
                    </div>
                </div>
    
                <div className="w-[80%] md:w-[50%] flex h-full items-center">
                    <img src={acrhImg} alt="아키텍처" 
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

export default KeullagOverView;