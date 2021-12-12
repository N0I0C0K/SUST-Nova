import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";


function ShowPage(propes) {
    const [scroll, setScroll] = useState(window.scrollY);
    useEffect(
        () => {
            const fn = () => {
                setScroll(window.scrollY);
                console.log(`${propes.top} set scroll to ${scroll}`);
            }
            window.addEventListener("scroll", fn);
            return () => {
                window.removeEventListener("scroll", fn)
            }
        }
    );
    return (
        <div class="page">
            <h1>{propes.top}</h1>
            <p class="say">{propes.text}</p>
            <img src={propes.imgSrc} />
        </div >
    );
}

ReactDom.render(
    (
        <div id="container">
            <ShowPage top="Test" text="ttest" imgSrc="./src/one.png" />
            <ShowPage top="Test2" text="tttest" imgSrc="./src/one.png" />
        </div>
    )
    ,
    document.getElementById('root')
);

function useScrollState() {
    const [scroll, setScroll] = useState(window.scrollY);
    window.onscroll = () => {
        console.log("test");
        setScroll(window.scrollY);
    }
    return scroll;
}