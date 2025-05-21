import profileImg from "../assets/images/profileImg.jpg"

const AboutMe = () => {

    const aboutItems = [
        { label: "이름", value: "송동현" },
        { label: "생년월일", value: "1999.07.28" },
        { label: "Email", value: "dustkscjswo@naver.com" },
        { label: "Blog", value: "https://gyeongsangman.tistory.com/" },
        { label: "github", value: "https://github.com/dh0728" },
    ];

    const tmi = ["#백엔드", "#웹개발자", "#파이썬 좋아", "#자바도 좋아" ,"#열정맨", "#중꺽그마" ,"#ISFP", "#축구가 취미", "#코딩이 취미", "#운동 좋아"]
    
    return(
        <div className="relative w-full h-[65%] flex gap-8">
            <h1 className="absolute w-auto h-auto -top-7 -left-2 inset-0 flex text-[8rem] font-extrabold text-white  select-none pointer-events-none leading-none z-10">
              Profile
            </h1>
            <img 
                src={profileImg} 
                alt="내 이미지" 
                className="w-[45%] h-auto aspect-square rounded-r-full object-cover shadow-2xl"
            />

            <div className="w-[40%] h-full text-2xl flex flex-col justify-center ">
                <div className="text-center font-bold text-2xl leading-relaxed text-gray-800">
                  <span className="text-[#3BA9F2]">요구사항</span>을 기술로 해석하고,<br />
                  가장 <span className="text-[#3BA9F2]">효율적인 구조</span>로 풀어내는 <strong>백엔드 개발자</strong>입니다
                </div>

                
                <div className="flex flex-col w-full h-[70%] justify-center gap-4">
                    {aboutItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex w-full h-[13%] items-center px-6 gap-8"
                      >
                        <div
                          className="w-[25%] h-full rounded-2xl flex justify-center items-center text-white text-xl font-semibold"
                          style={{ backgroundColor: "#3BA9F2" }}
                        >
                          {item.label}
                        </div>

                        {item.value.startsWith("http") ? (
                          <a
                            href={item.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" no-underline text-xl hover:text-blue-800"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-xl">{item.value}</div>
                        )}
                      </div>
                    ))}
                </div>

                <div className="tmi w-full flex flex-wrap gap-4 px-8">
                    {tmi.map((item, index) =>(
                      <div
                        key= {index}
                        className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default AboutMe;