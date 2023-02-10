import { useEffect, useState } from "react";

function listener(setSize){
  window.innerWidth > 710 ? setSize("lg") : setSize("sm")
}

export const useMedia= () => {
  const [size, setSize] = useState("sm")

  useEffect(() => {
    window.addEventListener("resize", function(){
      listener(setSize)
    })

    return () => {
      window.removeEventListener("resize", function(){
        listener(setSize)}
      )
    }
  }, [])

  return size
}