import {useEffect,useState} from "react";
export function GetAdvice() {
    const [advice, setAdvice]=useState(null); 
    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setAdvice(data);
          });
      }, []);

      function refreshPage() {
        window.location.reload(false);
      }
      // console.log(advice);
    return advice?(
<div>
    <p>{advice.slip.advice}</p>
    <button onClick={refreshPage}>change advice</button>
</div>
    ):null;
    

}