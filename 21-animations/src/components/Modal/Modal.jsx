import { useRef } from 'react'
import { Transition, CSSTransition } from 'react-transition-group';

import './Modal.css';
const animationTiming ={
    enter: 4000,
    exit:1000
}
const modal = (props) => {
    const nodeRef = useRef(null);
 { /*return  <Transition 
        nodeRef={nodeRef} 
        in={props.show} 
        timeout={animationTiming} 
        mountOnEnter
        unmountOnExit
        >
        {state =>{
    const cssClasses = ['Modal',state ==='entering'
            ?'ModalOpen'
            : state === 'exiting'? 'ModalClosed':null]
    return (
    <div ref={nodeRef} className={cssClasses.join('  ')}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
);}}
    </Transition>*/}
    return (
        <CSSTransition 
            mountOnEnter 
            unmountOnExit 
            in={props.show} 
            timeout={animationTiming}
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed'
            }}>
              <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>
                  Dismiss
                </button>
              </div>
        </CSSTransition>
      );
}

export default modal;