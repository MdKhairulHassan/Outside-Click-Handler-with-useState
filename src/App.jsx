import OutsideClickHandler from 'react-outside-click-handler';
import { useState} from 'react'
import './App.css'
import Container from './components/Container'

function App() {

  const [hidden, setHidden] = useState(false);


  
  return (
    <>
      <Container className={'max-w-headerContainer py-10 '}>

      <div> 
          
      <OutsideClickHandler onOutsideClick={() => {
        setHidden(false);
      }}>
      {/* <button className='py-3 px-7 bg-red-500 text-white rounded-sm' onClick={() => setHidden(true)}>Click</button> */}
      
      <div onClick={() => setHidden(!hidden)}>
      <button className='py-3 px-7 bg-red-500 text-white rounded-sm inline' >Click</button>
      </div>
      </OutsideClickHandler>
          
      {hidden && (
      <div className='bg-cyan-400' >
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
       </ul>
      </div>
      )}
        
      </div>


      </Container>
    </>
  )
}

export default App
