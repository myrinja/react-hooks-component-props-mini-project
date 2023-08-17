import React from "react";

function About(props){
    const myImg = props.image || "https://via.placeholder.com/215"
    return(
<aside>
    <img src={myImg} alt="blog logo"/>
<p>{props.about}</p>
</aside>
    )
}
export default About