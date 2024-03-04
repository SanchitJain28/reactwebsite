import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {

// setInterval(()=>{
//   document.title="Text Utils is Amazing"
// },4000)

// setInterval(()=>{
//   document.title="Text Utils is Awesome"
// },2000)

const[mode,setMode]=useState({
  navcolor:"light",
  divtextcolor:"black",
  bgColor:"white",
  btncolor:"#0D6EFD"
})
const togglestyle1=()=>{
  if(mode.navcolor=="light"){
    setMode({
      navcolor:"dark",
      textcolor:"white",
      bgColor:"black",
      btncolor:"#FFCA2C"
    })
    document.body.style.backgroundColor="#636363"
    showAlert("Dark Mode has been enabled","success")
    document.title="TextUtils - Dark Mode"
  }
  else{
    setMode({
      navcolor:"light",
      textcolor:"black",
      bgColor:"white",
      btncolor:"#0D6EFD"
    })
    document.body.style.backgroundColor="white"
    showAlert("Dark Mode has been Disabled","warning")
    document.title="TextUtils - Light Mode"
  }
}

const togglestyle2=()=>{
  if(mode.navcolor=="light"){
    setMode({
      navcolor:"dark",
      textcolor:"black",
      bgColor:"#31D2F2",
      btncolor:"#D23444"
    })
    document.body.style.backgroundColor="#198754"
    showAlert("Neon Mode has been enabled","secondary")
  }
  else{
    setMode({
      navcolor:"light",
      textcolor:"black",
      bgColor:"white",
      btncolor:"#0D6EFD"
    })
    document.body.style.backgroundColor="white"
    showAlert("Neon Mode has been Disabled","warning")
  }
}


const[alert,setAlert]=useState(null)
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },1500)
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<>
    <Navbar title="React APP" aboutText="This Is About Us" mode={mode} toggleMode1={togglestyle1} toggleMode2={togglestyle2}/>
<Alert alert={alert}/>
<TextForm heading="Welcome To the React APP" mode={mode} showAlert={showAlert}/>
<Footer/>
</>
  },
  {
    path:"/about",
    element:<>
        <Navbar title="React APP" aboutText="This Is About Us" mode={mode} toggleMode1={togglestyle1} toggleMode2={togglestyle2}/>

    <About mode={mode}/>
    <Footer/>
    </>
    
  },
  {
    path:"/login",
    element:<>
        <Navbar title="React APP" aboutText="This Is About Us" mode={mode} toggleMode1={togglestyle1} toggleMode2={togglestyle2}/>

    <Login/>
    
    </>
    
  }
])

  return (
    <>
<RouterProvider router={router} />
    </>
  );
}

export default App;
