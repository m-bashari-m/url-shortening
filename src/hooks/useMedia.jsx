import { useEffect, useState } from "react";

function getSize(){
  return window.innerWidth > 710 ? "lg" : "sm"
}

function listener(setSize){
  setSize(getSize())
}

export const useMedia= () => {
  const [size, setSize] = useState(getSize())

  useEffect(() => {
    window.addEventListener("resize", () => (listener(setSize)))

    return () => {
      window.removeEventListener("resize", () => (listener(setSize)))
    }
  }, [])

  return size
}