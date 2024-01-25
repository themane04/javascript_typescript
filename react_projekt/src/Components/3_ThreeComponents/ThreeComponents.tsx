import React from "react";

export function FirstComponent() {
    return (
        <div style={{border: "2px solid green", marginLeft:"40%", marginRight:"50%"}}>
            <h1 >First</h1>
            <SecondComponent></SecondComponent>
            <SecondComponent></SecondComponent>
        </div>
    );
}

function SecondComponent() {
    return (
        <>
            <h1 style={{border: "2px solid yellow"}}>Second</h1>
            <ThirdComponent/>
            <ThirdComponent/>
        </>
    );
}

function ThirdComponent() {
    return (
        <>
            <div style={{border: "2px solid red"}}>Third</div>
        </>
    );
}