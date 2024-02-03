import React, {useEffect, useState} from "react";

function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 10);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const padWithZero = (number: number) => {
        return number.toString().padStart(2, "0");
    }

    const hours = padWithZero(currentTime.getHours())
    const minutes = padWithZero(currentTime.getMinutes());
    const seconds = padWithZero(currentTime.getSeconds());

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
