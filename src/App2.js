import classes from "./App2.module.css"
import { useState } from "react";
import Scenario from "./Scenes/Scene";
import Scene3 from "./Scenes/Scene3";
import Scene5 from "./Scenes/Scene5";




const App2=()=>{

    const[btnClk,setBtnClk]=useState();


    return(
        <div className={classes.mainDiv}>


        <button onClick={()=>{setBtnClk(1)}}>3D Animation box</button>
        <button onClick={()=>{setBtnClk(3)}}>Balls bouncing</button>
        <button onClick={()=>{setBtnClk(5)}}>Soldier</button>



        {btnClk===1?<Scenario/>:<> </>}
        {btnClk===3?<Scene3/>:<> </>}
        {btnClk===5?<Scene5/>:<> </>}

    </div>
    )

}

export default App2;