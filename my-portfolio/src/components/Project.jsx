
const Project = ({ idx, img, title, tools, myFunc, date, info, onClick}) => {

    const toolBgColors = {
        Spring : "#6DB33F",
        Django : "#092E20",
        JAVA : "#FF7800",
        React : "#61DAFB",
        JS : "#F7DF1E",
        tailwind : "#06B6D4",
        Python : "#3776AB",
        LangChain : "#1C3C3C",
        STOMP : "#C93CD7",
        Kafka : "#231F20",
        MySQL : "#4479A1",
        MongoDB : "#47A248",
        Redis : "#FF4438",
        SQLite : "#FF4438"
    }

    return (
        <div className="w-[400px] h-[400px] border-2 rounded-2xl inline-block"
            onClick={onClick}
            key={idx}
        >
            
            {/* 이미지 */}
            <img src={img} alt="이미지" className="w-full h-[50%] rounded-t-2xl"/>

            {/* 제목 */}
            <div className="w-full h-[10%] flex items-center p-4 font-semibold">
                {title}
            </div>

            {/* 날짜 */}
            <div className="w-full h-[5%] flex items-center p-4">
                {date}
            </div>

            {/* tools */}
            <div className="w-full h-[4%] flex items-center text-white p-4 gap-2">
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
            </div>

            {/* 내가 맡은 역할 */}
            <div className="w-full h-[4%] flex items-center p-4 gap-2">
                {myFunc.map((item, idx) => (
                    <span key={idx}> {item} </span>
                ))}
            </div>


            {/* 프로젝트 간단 설명 */}
            <div className="w-full h-auto items-center px-4">
                <span> {info} </span>
            </div>
        </div>
    )
}

export default Project