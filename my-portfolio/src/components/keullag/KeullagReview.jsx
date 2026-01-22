const KeullagReview = () => {
    return(
                <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start mt-16 md:mt-28 lg:mt-40">
                    
                    {/* 프로젝트 정보 */}
                    <div className="w-full md:w-[45%] h-full flex flex-col text-xs md:text-sm lg:text-sm">
                        
                        <div className="w-[80%] md:w-full h-auto flex flex-col gap-2 ml-8 mt-8">

                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                회고
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                이번 프로젝트를 통해 Spring 프레임워크와 JPA를 처음부터 실무적으로 다뤄보며, 백엔드 개발 전반에 대한 이해를 높일 수 있었습니다.
                                <br/> 계층 간 책임 분리 구조(Controller–Service–Repository) 와 RESTful API 설계 원칙을 직접 적용하며, 실전적인 설계 역량을 키웠습니다.
                                또한, JPA를 활용한 엔티티 매핑, 연관관계 설정, JPQL 작성 등을 경험하며 ORM의 개념과 사용법에 익숙해졌고, 복잡한 쿼리에 대한 성능 이슈 및 Redis 캐싱 도입을 통해 최적화의 중요성도 체감했습니다.
                                <br/>단순한 기능 구현을 넘어서, 서비스 아키텍처와 성능 개선을 고려한 개발자적 시야를 갖게 된 점에서 큰 의미가 있었던 프로젝트였습니다.
                            </div>
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                아쉬운 점
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                이번 프로젝트에서는 클라이밍 기록 데이터를 조회할 때
                                User → ClimbGround → UserDate → Record → Hold로 이어지는 깊은 연관관계를 fetch join으로 모두 불러오는 방식을 사용했습니다.
                                하지만 이 구조는 1:N 연관관계가 중첩되면서 row 수가 기하급수적으로 증가하는 뻥튀기 현상을 유발했고,
                                결과적으로 조회 성능 저하 등의 문제를 초래할 수 있다는 점을 직접 경험하며 알게 되었습니다.  
                                <br/>다음에는 조회 목적에 맞는 쿼리 분리, DTO 기반 projection, 인덱스 최적화,
                                그리고 통계 전용 테이블 분리 전략 등을 통해 성능을 고려한 구조로 개선하고자 합니다.
                                <br/>또한 코드 측면에서는, 재사용성을 고려한 구성이나 기능 단위로의 분리,
                                그리고 더 명확한 변수명과 깔끔한 코드 스타일을 유지했다면 팀원 간의 협업 효율성과 가독성 모두 높일 수 있었을 것이라 생각합니다.
                            
                            </div>
                        </div>

                    </div>

                    <div        
                        className="w-[1px] h-full bg-gray-400 ml-8"
                    />

                    
        
                    <div className="w-full md:w-[45%] flex flex-col h-full items-start mt-8 gap-8 text-xs md:text-sm lg:text-sm">
                        <div className="w-[80%] md:w-full h-auto flex flex-col gap-2 ml-8">
                            <div className="text-sm md:text-base lg:text-lg font-bold">
                                트러블 슈팅
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <div className="font-semibold">
                                    JPA N+1 문제 발생
                                </div>

                                <div className="font-semibold">
                                    문제 상황
                                </div>
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
                                    <li>- 연관된 엔티티를 조회하는 과정에서 지연 로딩(LAZY)으로 인해 N+1 문제가 발생하여, 쿼리가 반복적으로 실행되어 성능 저하가 발생.</li>
                                </ul>

                                <div className="font-semibold ">
                                    해결 방법
                                </div>
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
                                    <li>- JPQL에서 Fetch Join을 적용하여 연관된 엔티티를 한 번의 쿼리로 함께 로딩하도록 변경함으로써 쿼리 수를 줄이고 성능을 개선함.</li>
                                </ul>
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <div className="font-semibold">
                                    클라이밍장 조회 성능 저하
                                </div>

                                <div className="font-semibold">
                                    문제 상황
                                </div>
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
                                    <li>- 클라이밍장 목록을 조회할 때마다 DB에 직접 접근하여 불필요한 트래픽이 발생했고, 같은 데이터를 반복적으로 불러오면서 응답 속도가 느려졌습니다.</li>
                                </ul>

                                <div className="font-semibold">
                                    해결 방법
                                </div>
                                <ul className=" ml-5 space-y-1 leanding-relaxed">
                                    <li>- Redis를 도입하여 자주 조회되는 클라이밍장 목록을 캐싱하고, 데이터가 존재할 경우 Redis에서 먼저 조회하도록 구현하여 DB 부하를 줄이고 응답 속도를 향상시켰습니다.</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    
                </div>
            )
}

export default KeullagReview 