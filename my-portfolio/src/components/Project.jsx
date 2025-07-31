
import { Calendar, Users, Laptop} from "lucide-react";

const Project = ({ idx, img, title, content, team, tools, myFunc, date, info, onClick}) => {

    // const toolBgColors = {
    //     Spring : "#6DB33F",
    //     Django : "#092E20",
    //     JAVA : "#FF7800",
    //     React : "#61DAFB",
    //     JS : "#F7DF1E",
    //     tailwind : "#06B6D4",
    //     Python : "#3776AB",
    //     LangChain : "#1C3C3C",
    //     STOMP : "#C93CD7",
    //     Kafka : "#231F20",
    //     MySQL : "#4479A1",
    //     MongoDB : "#47A248",
    //     Redis : "#FF4438",
    //     SQLite : "#FF4438"
    // }

    return (
        <div className="group relative w-[100%] h-[95%] border-2 rounded-2xl inline-block shadow-xl cursor-pointer"
            onClick={onClick}
            key={idx}
        >
            {/* 오버레이 텍스트 */}
            <div
              className="
                absolute inset-0 z-10 flex items-center justify-center 
                text-blue-500 text-lg font-bold opacity-0 bg-white/70 rounded-2xl
                transition duration-300 group-hover:opacity-100
              "
            >
                <span className="bg-blue-200 text-blue-600 px-5 py-1 rounded-full shadow-sm">자세히 보기</span>
            </div>
            
            {/* 이미지 */}
            <img src={img} alt="이미지" className="w-full h-[50%] rounded-t-2xl"/>

            {/* 제목 */}
            <div className="w-full h-[10%] flex items-center p-4 font-semibold text-xl text-blue-600">
                {title}
            </div>

            {/* 내용 */}
            <div className="w-full h-auto flex items-center px-4 text-sm text-gray-700">
                {content}
            </div>

            {/* 날짜 */}
            <div className="w-full h-[5%] flex items-center p-4 text-sm gap-2 mt-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                 <span className="text-xs">기간 : {date}</span>
            </div>

            {/* 날짜 */}
            <div className="w-full h-[5%] flex items-center p-4 text-sm gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                 <span className="text-xs">팀 구성 : {team} 명</span>
            </div>

            {/* tools
            <div className="w-full h-auto flex flex-wrap items-center text-white p-4 gap-2">
                {tools.map((item, idx) => {
                    const bgColor = toolBgColors[item] || "#5F259F"
                    return (
                        <span key={idx} 
                            className= {`text-xs px-3 py-1 rounded-full font-medium text- shadow-sm`}
                            style={{
                                backgroundColor : bgColor
                            }}
                        >
                            {item}</span>
                    )
                })}
            </div> */}

            {/* 내가 맡은 역할 */}
            
            <div className="w-full h-auto flex flex-col justify-center px-4 py-2 gap-2 text-xs">
                <div className="flex">
                    <Laptop className="w-4 h-4 text-blue-500" />
                    <span className="text-xs">역할 : </span>    
                </div>
                <div className="flex flex-wrap gap-2">
                    {myFunc.map((item, idx) => (
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs shadow-sm" key={idx}> 
                        {item} 
                    </span>
                ))}
                </div>
                
            </div>


            {/* 프로젝트 간단 설명 */}
            {/* <div className="w-full h-auto items-center px-4 text-xs">
                <span> {info} </span>
            </div> */}

            {/* 오버레이 텍스트 */}
        </div>
    )
}

export default Project