import React, {Component, useState, useEffect,} from 'react'



function About1() {
    const [aboutcontent, setaboutcontent] = useState("About us static data");
    var [count, setcount] = useState(1);
    useEffect(() => {

        setaboutcontent("Dynamic Data");
        abc();
    }, []);

    const abc = () => {
        console.log("abc called");
        setaboutcontent("changed");
setcount(++count);
    } ;

  

    return (
        <div>
            <p>
                {""}
            {aboutcontent} - {count}
            </p>
            <button onClick={abc}>Change Data</button>
            <button onClick={()=>{setcount(count+1)}}>  Counter  </button>
        </div>
    )
}

export default About1
