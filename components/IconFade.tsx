import Image from "next/image";
import { useState, useEffect, useRef, useMemo,createRef } from "react";
import { firstgroup, secondgroup, thirdgroup } from '../imageData';
import { CSSTransition,  SwitchTransition } from "react-transition-group";

export default function IconFade() {

    const [firstAnimatedGroupLogo, setFirstAnimatedGroupLogo] = useState(firstgroup[0]);
    const [secondAnimatedGroupLogo, setSecondAnimatedGroupLogo] = useState(secondgroup[0]);
    const [thirdAnimatedGroupLogo, setThirdAnimatedGroupLogo] = useState(thirdgroup[0]);
    const nodeRef = useRef(null)

    useEffect(() => {
        let indexFirst = 0;
        let indexSecond = 0;
        let indexThird = 0;

        function changeFirstLogo() {
            if (indexFirst == firstgroup.length - 1) {
                indexFirst = 0;
                setFirstAnimatedGroupLogo(firstgroup[0]);
            } else {
                indexFirst += 1;
                setFirstAnimatedGroupLogo(firstgroup[indexFirst]);
            }
        }

        function changeSecondLogo() {
            if (indexSecond == secondgroup.length - 1) {
                indexSecond = 0;
                setSecondAnimatedGroupLogo(secondgroup[0]);
            } else {
                indexSecond += 1;
                setSecondAnimatedGroupLogo(secondgroup[indexSecond]);
            }
        }

        function changeThirdLogo() {
            if (indexThird == thirdgroup.length - 1) {
                indexThird = 0;
                setThirdAnimatedGroupLogo(thirdgroup[0]);
            } else {
                indexThird += 1;
                setThirdAnimatedGroupLogo(thirdgroup[indexThird]);
            }
        }
        const unsubscribeFirst = setInterval(() => {
           
            changeFirstLogo();
        }, 2000);
        const unsubscribeSecond = setInterval(() => {
            changeSecondLogo();
        }, 2050);
        const unsubscribeThird = setInterval(() => {
            changeThirdLogo();
        }, 2100);
        return () => {
            clearTimeout(unsubscribeFirst);
            clearTimeout(unsubscribeSecond);
            clearTimeout(unsubscribeThird);
        };
    }, []);

    return (
        <section className="centered-row-container">
             <SwitchTransition mode="out-in">
          <CSSTransition
          key={firstAnimatedGroupLogo.src}
         
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames='fade'
          >
            <div className="animated-logo-container">
            <Image src={firstAnimatedGroupLogo} alt='company logo' />
                
            </div>
          </CSSTransition>
          </SwitchTransition>

          <SwitchTransition mode="out-in">
          <CSSTransition
          key={secondAnimatedGroupLogo.src}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames='fade'
          >
            <div className="animated-logo-container">
            <Image  src={secondAnimatedGroupLogo} alt='company logo' />
                
            </div>
          </CSSTransition>
          </SwitchTransition>
          <SwitchTransition mode="out-in">
          <CSSTransition
          key={thirdAnimatedGroupLogo.src}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames='fade'
          >
            <div className="animated-logo-container">
            <Image src={thirdAnimatedGroupLogo} alt='company logo' />
                
            </div>
          </CSSTransition>
          </SwitchTransition>
          </section>
    )
  
}
