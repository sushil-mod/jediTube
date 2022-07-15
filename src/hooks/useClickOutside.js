import React ,{useRef,useEffect} from "react";


const useClickOutside = (func) =>{
    const domNode = useRef();
      useEffect(()=>{
          let handler = (e)=>{
            if(!domNode.current.contains(e.target) ) {
              func();
            }}
          document.addEventListener("mousedown",handler);
        return () =>{
          document.removeEventListener("mousedown",handler);
        }
      })
      return domNode;
    } 
export default useClickOutside;