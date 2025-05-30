import codeNovaMainImg from "../../assets/images/codeNovaMainImg.png";

const CodeNovaHeader = () => {
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
                            2025.04.14 ~ 2025.05.22
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
                            Frontend
                        </div>
                    </div>

                    {/* 기여도 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            기여도: 
                        </div>
                        <div>
                            30%
                        </div>
                    </div>

                    {/* 기여도 */}
                    <div className="flex w-full">
                        <div className="w-[30%]">
                            기술: 
                        </div>
                        <ul className="list-none ml-5 space-y-1 text-sm leanding-relaxed">
                            <li>
                                <strong>React</strong>
                            </li>
                            <li>
                                <strong>JS</strong>
                            </li>
                            <li>
                                <strong>Tailwind</strong>
                            </li>
                            <li>
                                <strong>Spring</strong>
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
                            <strong>싱글페이지</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 실시간 코드 타이핑 게임 화면 구성</li>
                              <li>- KeyLogs AES 기반 암호화</li>
                            </ul>
                        </li>
                        <li>
                            <strong>코드 리뷰 페이지</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- Highlight.js 기반 코드 하이라이팅</li>
                              <li>- AI 챗봇</li>
                            </ul>
                        </li>
                        <li>
                            <strong>마이페이지</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 사용자 닉네임 및 전화번호 수정 기능</li>
                              
                            </ul>
                        </li>
                        <li>
                            <strong>설정</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 색약자용 텍스트 색상 커스터마이징</li>
                              <li>- 게임 사운드 볼륨 조절</li>
                            </ul>
                        </li>
                        <li>
                            <strong>랭킹 페이지</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 실시간 타속 랭킹</li>
                            </ul>
                        </li>
                        
                        <li>
                            <strong>매크로 감지</strong>
                            <ul className="list-none ml-4 space-y-1">
                              <li>- 일력 로그 기반 이상 행위 탐지 및 판단</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="w-[40%] flex h-full items-center">
                <img src={codeNovaMainImg} alt="코드노바메인이미지지" 
                    className="rounded-2xl"
                />
            </div>
            
        </div>
    )
}

export default CodeNovaHeader;