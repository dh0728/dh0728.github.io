import KeullagMainImg from "../../assets/images/keullagMain.jpg"
import KeullagPlaceDetailImg from "../../assets/images/keullagPlaceDetail.jpg"

const KeullagHeader = () => {
    return(
        <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start">
            
            {/* 프로젝트 정보 */}
            <div className="w-[50%] h-full flex gap-8">
                
                <div className="w-[40%] h-full flex flex-col gap-2 ml-8 mt-8">

                    {/* 개발기간 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            개발 기간: 
                        </div>
                        <div>
                            2025.01.24 ~ 2025.02.11
                        </div>
                    </div>

                    {/* 개발인원 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            개발 인원: 
                        </div>
                        <div>
                            6인 프로젝트
                        </div>
                    </div>

                    {/* 역할 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            역할: 
                        </div>
                        <div>
                            Backend
                        </div>
                    </div>

                    {/* 기여도 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            기여도: 
                        </div>
                        <div>
                            40%
                        </div>
                    </div>

                    {/* 기여도 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            기술: 
                        </div>
                        <ul className="list-none ml-5 space-y-1 text-sm leanding-relaxed">
                            <li>
                                <strong>Spring</strong>
                            </li>
                            <li>
                                <strong>JAVA</strong>
                            </li>
                            <li>
                                <strong>MySQL</strong>
                            </li>
                            <li>
                                <strong>Redis</strong>
                            </li>
                        </ul>
                    </div>

                </div>
                {/* 구현 기능 */}
                <div className="flex flex-col w-[40%] gap-2 mt-8">
                    <div className="w-[20%]">
                        구현기능 
                    </div>

                    <ul className="list-none ml-5 space-y-1 text-sm leanding-relaxed">
                        <li>
                            <strong>DB 설계</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 도메인 기반 테이블 설계</li>
                              <li>- 정규화와 확장성 고려한 구조</li>
                            </ul>
                        </li>
                        <li>
                            <strong>화면 렌더링 API</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 클라이밍장 리스트 조회 API 구현</li>
                              <li>- 클라이밍장 상세 페이지 API 구현</li>
                              <li>- 클라이밍 기록 통계 API 구현</li>
                            </ul>
                        </li>
                        <li>
                            <strong>클라이밍 기록 저장 API</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- AWS S3를 통해 클라이밍 영상 저장</li>
                            </ul>
                        </li>
                        <li>
                            <strong>데이터 수집 (크롤링)</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- selenium을 이용한 국내 클라이밍장 데이터 크롤링</li>
                            </ul>
                        </li>

                    </ul>
                </div>

            </div>

            <div className="w-[40%] flex h-full items-center justify-center gap-4">
                <img src={KeullagMainImg} alt="ecofundia이미지" 
                    className="rounded-2xl  h-full"
                />
                <img src={KeullagPlaceDetailImg} alt="ecofundia이미지" 
                    className="rounded-2xl  h-full"
                />
            </div>
            
        </div>
    )
}

export default KeullagHeader;