import ReactDOM from "react-dom";
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

function toggleComponents() {

    const [comp1, setComp1] = useState("inherit");
    const [comp2, setComp2] = useState("none");

    const handlechange = (step) => {
        console.log(step);
        switch (step) {
            case "1":
                setComp1("inherit");
                setComp2("none");
                break;
            case "2":
                setComp1("none");
                setComp2("inherit");
                break;
            default:
                break;
        }
    }

    return (



        <div style={{ marginLeft: "20px" }}>

            <h1>Exmple to toggle between components </h1>
            <h2>in reactJS</h2>
            <p>you need to install :</p>
            <ul>
                <li>reactJS</li>
                <li>react Material</li>
            </ul>

            <div className="div_style" style={{ display: comp1, border: "3px solid black", backgroundColor: "#fa7d09", width: "500px" }}>
                <h1>first component</h1>
                <Button variant="contained" color="primary" onClick={(e) => handlechange("2")}>
                    to the other component
                </Button>
            </div>

            <div className="div_style" style={{ display: comp2, border: "3px solid black", backgroundColor: "#4a3f35", width: "500px", color: "white" }}>
                <h1>second component</h1>
                <Button variant="contained" color="primary" onClick={(e) => handlechange("1")}>
                    to the previous component
                </Button>
            </div>
        </div>
    )
}
export default toggleComponents;
//**NOTE: use this in the react render section! */


