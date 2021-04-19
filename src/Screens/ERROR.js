import '../Scss/Error.scss'
import IMGAvize from '../Images/avize.png';
import IMGLight from '../Images/acik.png';
import React, {useRef} from "react";
import { TweenMax, Power3 } from 'gsap';
function ERROR() {
    let Item = useRef(null);
    let Text = useRef(null);
    function Turnonthelight () {
        TweenMax.to(
            Text ,2,{
             opacity:1,
             ease:Power3.easeOut
         } 
        )
        TweenMax.to(
         Item,1,{
             opacity:1,
             ease:Power3.easeOut
         } 
        )
    }
   function Turnoffthelight() {
    TweenMax.to(
        Text ,1.5,{
            opacity:0,
            ease:Power3.easeOut
        } 
       )
    TweenMax.to(
        Item,1,{
            opacity:0,
            ease:Power3.easeOut
        } 
       )
   }
    return (
        <div className="Body-Error">
            <div className="Images">
                <img ref={el => { Item = el }} src={IMGLight} className="addlight" />
                <img src={IMGAvize} />
            </div>
            <p ref={el => { Text  = el}}>           
             <h1>404</h1>
            <h2>this page is not found</h2>
            </p>
            <div className="Buttons">
                <button onClick={Turnoffthelight}>Turn Off Light</button>
                <button onClick={Turnonthelight}>Turn On Light</button>
            </div>
        </div>
    )
}

export default ERROR

