import React from 'react'
import "../../index.css"
import "./fullPageContainer.css"

function FullPageContainer({ bg, children }){

  return(
    <div className={`full-page-container ${bg==="dark" ? "dark" : "light"}`}>
      {children}
    </div>
  )
}

export default FullPageContainer