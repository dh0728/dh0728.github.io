import { useState } from "react";
import profileImg from "../assets/images/profileImg.jpg"

const AboutMe = () => {

    const aboutItems = [
        { label: "이름", value: "송동현" },
        { label: "생년월일", value: "1999.07.28" },
        { label: "Email", value: "dustkscjswo@naver.com" },
        { label: "Blog", value: "https://gyeongsangman.tistory.com/" },
        { label: "github", value: "https://github.com/dh0728" },
    ];
    

    return(
        <div className="w-full h-full mt-8 flex gap-8">
            <img 
                src={profileImg} 
                alt="내 이미지" 
                className="w-[45%] h-[100%] rounded-r-full object-cover "
            />

            <div className="w-[40%] h-full text-2xl flex flex-col justify-center">
                <div className="text-center font-bold">
                    요구사항을 기술로 해석하고, 가장 효율적인 구조로 풀어내는 백엔드 개발자입니다
                </div>

                
                <div className="flex flex-col w-full h-[70%] mt-8 justify-center gap-4">
                    {aboutItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex w-full h-[13%] items-center px-6 gap-8"
                      >
                        <div
                          className="w-[20%] h-full rounded-2xl flex justify-center items-center text-white text-xl"
                          style={{ backgroundColor: "#3BA9F2" }}
                        >
                          {item.label}
                        </div>
                        <div className="text-md">{item.value}</div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default AboutMe;