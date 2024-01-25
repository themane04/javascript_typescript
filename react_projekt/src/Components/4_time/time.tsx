import React, {useEffect, useState} from "react";

function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const date = new Date();
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return (
        <>
            <h1 style={{
                marginTop: "100px",
                fontSize: "250px",
                textAlign: "center",
                color: "red"
            }}>{hours}:{minutes}:{seconds}</h1>
        </>
    )
}

export default Time;
