import classes from "./App2.module.css"
import { useState } from "react";
import Scenario from "./Scenes/Scene";
import Scene3 from "./Scenes/Scene3";
import Scene5 from "./Scenes/Scene5";




const App2 = () => {

    const [btnClk, setBtnClk] = useState(1);


    return (
        <div className={classes.mainDiv}>


            <button style={{ background: `${btnClk == 1 ? 'gray' : 'white'}`, color: `${btnClk == 1 ? 'white' : 'gray'}` }} onClick={() => { setBtnClk(1) }}>3D Animation box</button>
            <button style={{ background: `${btnClk == 3 ? 'gray' : 'white'}`, color: `${btnClk == 3 ? 'white' : 'gray'}` }} onClick={() => { setBtnClk(3) }}>Balls bouncing</button>
            <button style={{ background: `${btnClk == 5 ? 'gray' : 'white'}`, color: `${btnClk == 5 ? 'white' : 'gray'}` }} onClick={() => { setBtnClk(5) }}>Soldier</button>



            {btnClk === 1 ? <Scenario /> : <> </>}
            {btnClk === 3 ? <Scene3 /> : <> </>}
            {btnClk === 5 ? <Scene5 /> : <> </>}

        </div>
    )

}

export default App2;