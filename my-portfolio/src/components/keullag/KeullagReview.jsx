const KeullagReview = () => {
    return(
                <div className="relative w-full h-[65%] flex flex-wrap justify-center gap-8 items-start">
                    
                    {/* 프로젝트 정보 */}
                    <div className="w-[45%] h-full flex flex-col">
                        
                        <div className="w-full h-auto flex flex-col gap-2 ml-8">

                            <div className="text-xl font-bold">
                                회고
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2">
                                이번 프로젝트를 통해 Spring 프레임워크와 JPA를 처음부터 실무적으로 다뤄보며, 백엔드 개발 전반에 대한 이해를 높일 수 있었습니다.
                                <br/> 계층 간 책임 분리 구조(Controller–Service–Repository) 와 RESTful API 설계 원칙을 직접 적용하며, 실전적인 설계 역량을 키웠습니다.
                                또한, JPA를 활용한 엔티티 매핑, 연관관계 설정, JPQL 작성 등을 경험하며 ORM의 개념과 사용법에 익숙해졌고, 복잡한 쿼리에 대한 성능 이슈 및 Redis 캐싱 도입을 통해 최적화의 중요성도 체감했습니다.
                                <br/>단순한 기능 구현을 넘어서, 서비스 아키텍처와 성능 개선을 고려한 개발자적 시야를 갖게 된 점에서 큰 의미가 있었던 프로젝트였습니다.
                            </div>
                            <div className="text-xl font-bold">
                                아쉬운 점
                            </div>

                            <div className="flex flex-col w-full gap-2 mt-2 text-sm">
                                먼저 성능 최적화 부분입니다. 데이터를 조회하는 한번의 트랜젝션에서 여러 테이블을 Join하면서 발생하는 복잡한 쿼리로 인해 조회 성능이 좋지 않았습니다. 다음 프로젝트에서는 쿼리 최적화, 인덱싱 같은 여러 기술을 적용해 기능을 개선하고 싶다는 생각이 들었습니다.
                                <br/>코드를 작성하면서 재사용이 가능하도록 코드를 작성해 좀 더 코드를 효율적으로 작성해볼수 있는 부분이 있지않았을까 하는 생각이 들었습니다. 
                                <br/>또한 코드를 작성할 때 기능단위로 좀더 코드를 쪼개서 코드를 작성하고 변수명이나 코드를 좀 더 깔끔하게 작성했다면 다른 팀원들이 나의 코드를 작성했을 때 이해하는데 도움이 되지 않았을까하는 생각이 들었습니다. 
                                <br/>개발을 할수록 시간에 쫒겨 기능 구현을 우선으로 급하게 코드를 짜다보니 이런 아쉬운 점이 많이 남았던 거 같습니다. 앞으로는 초반 설계나 클린 코드에 대해 좀 더 공부하고 깔끔하게 코드를 짜도록 해야겠다는 생각이 들었습니다.

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
                                    JPA N+1 문제 발생
                                </div>

                                <div className="font-semibold text-sm">
                                    문제 상황
                                </div>
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 연관된 엔티티를 조회하는 과정에서 지연 로딩(LAZY)으로 인해 N+1 문제가 발생하여, 쿼리가 반복적으로 실행되어 성능 저하가 발생.</li>
                                </ul>

                                <div className="font-semibold text-sm">
                                    해결 방법
                                </div>
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- JPQL에서 Fetch Join을 적용하여 연관된 엔티티를 한 번의 쿼리로 함께 로딩하도록 변경함으로써 쿼리 수를 줄이고 성능을 개선함.</li>
                                </ul>
                            </div>

                            <div className="flex flex-col w-[80%] gap-2 mt-2">
                                <div className="font-semibold">
                                    클라이밍장 조회 성능 저하
                                </div>

                                <div className="font-semibold text-sm">
                                    문제 상황
                                </div>
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- 클라이밍장 목록을 조회할 때마다 DB에 직접 접근하여 불필요한 트래픽이 발생했고, 같은 데이터를 반복적으로 불러오면서 응답 속도가 느려졌습니다.</li>
                                </ul>

                                <div className="font-semibold text-sm">
                                    해결 방법
                                </div>
                                <ul className=" ml-5 space-y-1 text-sm leanding-relaxed">
                                    <li>- Redis를 도입하여 자주 조회되는 클라이밍장 목록을 캐싱하고, 데이터가 존재할 경우 Redis에서 먼저 조회하도록 구현하여 DB 부하를 줄이고 응답 속도를 향상시켰습니다.</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    
                </div>
            )
}

export default KeullagReview 