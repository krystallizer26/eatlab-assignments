import React, { useState } from "react";
import axios from 'axios';

const QuestionF = () => {
   const [authResult, setAuthResult] = useState(0);
   const [username, setUsername] = useState();

   return (
      <div>
         <p>
            {authResult === null
               ? `Authenticating ...`
               : authResult === 0
                  ? "Auth Failed"
                  : "Auth Success"}
         </p>
         <input style={{ marginRight: '0.8rem' }} onChange={(e) => {
            console.log(e.target.value)
            setUsername(e.target.value);
            console.log(username)
         }}></input>
         <button
            onClick={async (e) => {
               setUsername(null);
               setAuthResult(null);
               let result = await work();
               console.log("Clicked !!");
               console.log("WORK RESULT = " + result);
               setAuthResult(result);
            }}
         >
            Let's Auth
         </button>
      </div>
   );
};

export default QuestionF;

async function work() {
     console.log("WORKING...");
     let result = await axios
       .get("http://www.randomnumberapi.com/api/v1.0/random?min=0&max=1&count=1")
     console.log("WORKING COMPLETED...");
     console.log(result.data)
     return result.data[0];
}
