import KeullagRecordImg from "../../assets/images/keullagRecord.jpg";
import KeullagPlaceImg from "../../assets/images/keullagPlace.jpg";

const Api = () => {
    return(
                <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start">
                    
                    {/* 프로젝트 정보 */}
                    <div className="w-[50%] h-full flex flex-col">
                        
                        <div className="w-full h-auto flex flex-col gap-2 ml-8 mt-8">
                            <div className="text-xl font-bold">
                                클라이밍장 조회, 기록 통계, 기록 저장 API 구현
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 클라이밍장 조회 API 구현</li>
                                    <li>- 클라이밍장 상세 정보 조회 API 구현</li>
                                    <li>- 클라이밍 기록 통계 API 구현(년, 월, 주)</li>
                                    <li>- 클라이밍 기록 저장 및 내 기록 조회 API 구현</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col gap-2 ml-8 mt-8">
                            <div className="text-xl font-bold">
                                설명
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 클라이밍장 조회 시 현재 위치에서 가까운 순으로 조회되도록 구현하였습니다.</li>
                                    <li>- Redis 캐싱을 통해 조회 성능을 최적화 하였습니다.</li>
                                    <li>- 클라이밍 기록은 날짜 단위로 그룹화되어 주간/월간/연간 단위의 통계를 제공합니다.</li>
                                    <li>- 기록 저장 시 스냅샷 이미지를 활용해 화면 렌더링 성능을 최적화하고, S3에 저장된 영상 URL과 연동됩니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                    <div className="w-[40%] flex h-full items-center mt-4 gap-4">
                        <img src={KeullagPlaceImg} alt="클라이밍장" 
                            className="rounded-2xl  h-full"
                        />
                        <img src={KeullagRecordImg} alt="기록" 
                            className="rounded-2xl  h-full"
                        />


                    </div>
                    
                </div>
            )
}

export default Api;