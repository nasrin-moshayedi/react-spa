import React from "react";
// material-ui imports
import Button from "@material-ui/core/Button";


function HomePage() {
  return (
    <div className="main-grid" style={{display:'flex', justifyContent: "space-between"}}>

      <div style={{width:"100%"}}>

        <div className = "image">
          <div className="image-text">
            <h1>Hello</h1>
            <h1>I'M Nasrin Moshayedi</h1>
            <h2>Frontend Developer</h2>
            <Button variant="outlined" style={{color:"#26769e", borderColor:"#26769e"}}>
              Hire me
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
