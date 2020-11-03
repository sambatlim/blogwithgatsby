import React from "react"
import illustration from "../../content/assets/404_illustration.png";
/**
 * Change the content to add your own bio
 */

export default () => (
    <div>

    <div style={{ maxHeight:"95vh", minWidth:"90vw", display:"flex", justifyContent:"center",alignItems:"center", overflow:"hidden"}}>
        
        <img src={illustration} alt="404" style={{pointerEvents: "none", maxwidth:"400px", height:"auto"}}></img>
    </div>

    <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
        <a href="/" style={{padding: "10px", backgroundColor:"#FFC04E", color:"white", textDecoration:"none", borderRadius:"10px"}}>GO HOME</a>
    </div>
    
    </div>
  
)
