import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }



    const handleUpChange=()=>{
        let modstr=text.split("")
        modstr.splice(0,1,modstr[0].toUpperCase())
        for(let i=0;i<modstr.length;i++){
            if(modstr[i]==" "){
                modstr.splice(i+1,1,modstr[i+1].toUpperCase())
            }
        }
        modstr.length>0?setText(modstr.join("")):alert("please type in")
        props.showAlert("converted to Uppercase","info")
    }



    const handleLoChange=()=>{
        setText(text.toLowerCase())
        props.showAlert("converted to Lowercase","info")
    }



    const handleUpFullChange=()=>{
        setText(text.toUpperCase())
        props.showAlert("converted to Uppercase on Full String","info")
    }



    const handleUpGap=()=>{
        console.log("yo I changed!!!!!")
        let modstr=text.split("")
        modstr[0].toUpperCase()
        for(let i=0;i<modstr.length;i++){
            if(modstr[i]==" "){
                modstr.splice(i,1)
            }
        }
        setText(modstr.join(""))
        props.showAlert("Gaps Removed","info")
    }
    


    const Randomfont=(event)=>{
        let arrfont=["Arial","system-ui","Cursive","Fantasy","Times New Roman","Lucida Console","Georgia","Monospace","Trebuchet","Garamond","TaHoma","Didot","Gill Sans ","Impact","Cambria"]
        document.getElementById("preview").style.fontFamily=arrfont[Math.round(Math.random()*arrfont.length)]
        document.getElementById("textfont").style.fontFamily=arrfont[Math.round(Math.random()*arrfont.length)]
    }


    const RandomColor=(event)=>{
        let arrcolor=[
            "red",
            "blue",
            "cyan",
            "purple",
            "red",
            "grey",
            "lightgreem",
            "black",
            "pink",        
        ]
        document.getElementById("preview").style.color= arrcolor[Math.round(Math.random()*arrcolor.length)]
        document.getElementById("textfont").style.color=arrcolor[Math.round(Math.random()*arrcolor.length)]
    }



    const [text,setText]=useState("")

    //text="sasaasa"            //WRONG WAY TO CHANGE THE STATE.
    //setText("asasasaa")       //RIGHT WAY TO CHANGE THE STATE.
  return (
    <>
    <textarea value={text} onChange={handleOnChange} id='textfont' style={{backgroundColor:props.mode.bgColor,color:props.mode.textcolor}}></textarea>
    <div className='container'>
        <button className="btn btn-primary" id='btn1' onClick={handleUpChange} style={{backgroundColor:props.mode.btncolor}}>UpperCase First Letter</button>
        <button className="btn btn-primary" id='btn1' onClick={handleUpFullChange} style={{backgroundColor:props.mode.btncolor}}>UpperCase Full</button>
        <button className="btn btn-primary" id='btn1' onClick={handleLoChange} style={{backgroundColor:props.mode.btncolor}}>Lowercase</button>
        <button className="btn btn-primary" id='btn1' onClick={handleUpGap} style={{backgroundColor:props.mode.btncolor}}>Remove Gap</button>
        <button className="btn btn-primary" id='btn1' onClick={Randomfont} style={{backgroundColor:props.mode.btncolor}}>Random Font</button>
        <button className="btn btn-primary" id='btn1' onClick={RandomColor} style={{backgroundColor:props.mode.btncolor}}>Random Color</button>
    </div>
    <div className='textSum' style={{color:props.mode.textcolor}}>
        <h2>Your Text Summary</h2>
        <h4>Your input has {text.split(" ").length} words and {text.length} chracters</h4>
        <h2>{Math.round(0.008 * text.split(" ").length * 60) } Seconds Reading</h2>
        <div className='textsumpre'>
            <h1 >Preview</h1>
            <p id='preview'>{text.length>0?text:"Please Enter Some Text to Preview in Here."}</p>
        </div>
    </div>
    </>
  )
}
