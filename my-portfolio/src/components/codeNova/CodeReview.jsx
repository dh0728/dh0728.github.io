import CodeReviewImg from "../../assets/images/codeReview.png"

const CodeReview = () => {
    return(
                <div className="relative w-full h-[65%] flex flex-col md:flex-row flex-wrap justify-center gap-8 items-start mt-16 md:mt-28 lg:mt-40">
                    
                    {/* 프로젝트 정보 */}
                    <div className="w-full md:w-[40%] h-full flex flex-col gap-8 text-xs md:text-sm lg:text-base">
                        
                        <div className="w-full h-auto flex flex-col gap-2 ml-8 mt-8">
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                코드 리뷰 화면
                            </div>

                            <div className="flex flex-col w-[80%] md:w-full gap-2 mt-2">
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 타이핑이 끝난 후 사용자가 입력한 코드를 줄 단위로 다시 확인할 수 있도록 구성</li>
                                    <li>- Highlight.js를 이용해 언어 별로 문법에 맞는 하이라이팅 제공 </li>
                                    <li>- 우측 하단 AI 챗봇 버튼을 통해 추가적인 질문 가능</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col gap-2 ml-8">
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                설명
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- GPT 기반 언어 모델을 활용해 코드 맥락에 대한 질문·응답 기능을 구현했습니다.</li>
                                    <li>- 이전 질문 이력을 Redis에 저장하고, 이를 프롬프트에 포함시켜 연속적인 질의응답이 가능하도록 구성했습니다.</li>
                                    <li>- 대화 내용은 로컬스토리지에 저장되며, 봇 모달을 닫아도 대화 맥락이 유지되도록 구성했습니다.</li>
                                    <li>- 사용자 편의성을 위해 챗봇 모달은 드래그하여 자유롭게 위치를 조절할 수 있도록 구현했습니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                    <div className="w-full md:w-[50%] flex h-full items-center justify-center mt-4">
                        <img src={CodeReviewImg} className="w-[90%] rounded-2xl" alt="코드리뷰" 
                            
                        />

                    </div>
                    
                </div>
            )
}

export default CodeReview