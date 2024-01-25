import React from "react";

export function FirstComponent() {
    return (
        <div style={{marginTop:"50px", border: "2px solid green", marginLeft:"45%", marginRight:"45%"}}>
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