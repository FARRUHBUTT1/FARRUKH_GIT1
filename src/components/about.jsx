import React, { Component, useState } from 'react'
import Aboutchild from './aboutfolders/aboutchild';

function About() {
    // const [state, setstate] = useState(initialState)
    const [count, setcount] = useState(0);
    const [name, setname] = useState("Farrukh Hussain");
    const [cities, setcities]=useState(["Gujar Khan","Rwp","lah","kahi","isb"])
    const[medicine, setmedicine]=useState({
        "medications": [{
            "aceInhibitors": [{
                "name": "lisinopril",
                "strength": "10 mg Tab",
                "dose": "1 tab",
                "route": "PO",
                "sig": "daily",
                "pillCount": "#90",
                "refills": "Refill 3"
            },
            {
                "name": "lisinopril",
                "strength": "10 mg Tab",
                "dose": "1 tab",
                "route": "Sho",
                "sig": "daily",
                "pillCount": "#90",
                "refills": "Refill 3"
            }],
            "antianginal": [{
                "name": "nitroglycerin",
                "strength": "0.4 mg Sublingual Tab",
                "dose": "1 tab",
                "route": "SL",
                "sig": "q15min PRN",
                "pillCount": "#30",
                "refills": "Refill 1"
            }],
            "anticoagulants": [{
                "name": "warfarin sodium",
                "strength": "3 mg Tab",
                "dose": "1 tab",
                "route": "PO",
                "sig": "daily",
                "pillCount": "#90",
                "refills": "Refill 3"
            },
            {
                "name": "DUMMY DATA",
                "strength": "3 mg Tab",
                "dose": "1 tab",
                "route": "PO",
                "sig": "daily",
                "pillCount": "#90",
                "refills": "Refill 3"
            }],
            "betaBlocker": [{
                "name": "metoprolol tartrate",
                "strength": "25 mg Tab",
                "dose": "1 tab",
                "route": "PO",
                "sig": "daily",
                "pillCount": "#90",
                "refills": "Refill 3"
            }],
            "diuretic": [{
                "name": "furosemide",
                "strength": "40 mg Tab",
                "dose": "1 tab",
                "route": "PO",
                "sig": "daily",
                "pillCount": "#90",
                "refills": "Refill 3"
            }],
            "mineral": [{
                "name": "potassium chloride ER",
                "strength": "10 mEq Tab",
                "dose": "1 tab",
                "route": "PO",
                "sig": "daily",
                "pillCount": "#90",
                "refills": "Refill 3"
            }]
        }
        ],
        "labs": [{
            "name": "Arterial Blood Gas",
            "time": "Today",
            "location": "Main Hospital Lab"
        },
        {
            "name": "BMP",
            "time": "Today",
            "location": "Primary Care Clinic"
        },
        {
            "name": "BNP",
            "time": "9 Weeks",
            "location": "Primary Care Clinic"
        },
        {
            "name": "BUN",
            "time": "1 Year",
            "location": "Primary Care Clinic"
        },
        {
            "name": "Cardiac Enzymes",
            "time": "Today",
            "location": "Primary Care Clinic"
        },
        {
            "name": "CBC",
            "time": "1 Year",
            "location": "Primary Care Clinic"
        },
        {
            "name": "Creatinine",
            "time": "1 Year",
            "location": "Main Hospital Lab"
        },
        {
            "name": "Electrolyte Panel",
            "time": "1 Year",
            "location": "Primary Care Clinic"
        },
        {
            "name": "Glucose",
            "time": "1 Year",
            "location": "Main Hospital Lab"
        },
        {
            "name": "PT/INR",
            "time": "999 Weeks",
            "location": "Primary Care Clinic"
        },
        {
            "name": "PTT",
            "time": "3 Weeks",
            "location": "Coumadin Clinic"
        },
        {
            "name": "TSH",
            "time": "1 Year",
            "location": "Primary Care Clinic"
        }
        ],
        "imaging": [{
            "name": "Chest X-Ray",
            "time": "Today",
            "location": "Main Hospital Radiology"
        },
        {
            "name": "Chest X-Ray",
            "time": "Today",
            "location": "Main Hospital Radiology"
        },
        {
            "name": "Chest X-Ray",
            "time": "Today",
            "location": "Main Hospital Radiology"
        }
        ]
    }  )
    const incCount =()=>{
        setcount(count+1);
        const cityItem= cities.map((city) => "<li>"+ city +"</li>")
        console.log("Button Clicked");
    }
    const decCount =()=>{
        setcount(count-1);
    
        console.log("Button Clicked");
    }
    return (
        <div>
            { medicine.medications[0].aceInhibitors.map((medicine)=> (<ul> <li> {medicine.name} </li> <li> {medicine.strength} </li> <li> {medicine.dose} </li> <li> {medicine.route} </li> <li> {medicine.sig} </li> <li> {medicine.pillCount} </li>  </ul>))}
        <h1>My Information</h1>
        <p>{name}</p>
        <p>BCS181085</p>
        <p>Count is:{count}</p>
     
        {
            cities.map((color) => (
                <li> { color }</li>
                ))
        } 
        <p>{cities[4]}</p>
        <div><button onClick={incCount}>Submit</button></div>
        <button onClick={decCount}>Submit</button>
        
        <Aboutchild nickname={name} citynames={cities}/>
        </div>
    )
}

export default About
