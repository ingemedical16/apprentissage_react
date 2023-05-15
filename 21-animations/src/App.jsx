import { useState,useRef } from 'react'
import { Transition } from 'react-transition-group';
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import './App.css';

const duration = 300;

const defaultStyle = {
  backgroundColor:'red',
      width:100,
      height:100,
      margin:'auto',
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
const transitionStyles = {
entering: { opacity: 1 },
entered:  { opacity: 1 },
exiting:  { opacity: 0 },
exited:  { opacity: 0 },
};

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBloc, setSowBlock] = useState(false);
  const nodeRef = useRef(null);
  

  const showModal = ()=>{
    setModalIsOpen(true)
  }
  const closeModal = ()=>{
    setModalIsOpen(false)
  }

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button className='Button' onClick={()=> setSowBlock(prev=>!prev)}>Toggle</button>
      <br/>
      <Transition 
        nodeRef={nodeRef} 
        in={showBloc} 
        timeout={duration}
        mountOnEnter
        unmountOnExit
        >
          {state => (
            <div ref={nodeRef} style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              I'm a fade Transition!
            </div>
          )}
      </Transition>
      <Modal closed={closeModal} show={modalIsOpen}/>
      {modalIsOpen && <Backdrop show={modalIsOpen} />}
      <button type="button" className="Button" onClick={showModal}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
      
    </div>
  );
}

export default App
