import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={()=>{navigate('/')}}>Home</button>
        <button onClick={()=>{navigate('/submain')}}>SubMain</button>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/submain/*" element={<SubMain/>}/>
          {/* <Route path="/detail" element={<Detail id='fromRoot'/>}/> */}
        </Routes>
      </header>
    </div>
  );
}

function Home(){
  return(
    <div>Home</div>
  )
}

function SubMain(){
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{navigate('./detail')}}>detail</button>
      <div>SubMain</div>
      <Routes>
        <Route path="/" element={<div>submainInsubmain</div>}/>
        <Route path=":id" element={<div>submainInsubmain with id</div>}/>
        <Route path="detail" element={<Detail id='fromSubMain'/>}/>
      </Routes>
    </div>
  )
}

function Detail({id}){
  return (
    <div>
      Detail {id}
    </div>
  )
}

export default App;
