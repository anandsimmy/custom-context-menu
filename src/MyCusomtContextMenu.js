import { useState, useEffect, useRef } from 'react';
import './App.css';

const MyCustomContextMenu= ({ targetId, options }) => {
  const [contextData, setContextData]= useState({ visible:false, posX: 0, posY: 0});
  const contextRef= useRef(null);;

  useEffect(() => {
    const contextMenuEventHandler= (event) => {
      const targetElement= document.getElementById(targetId)
      if(targetElement && targetElement.contains(event.target)){
        event.preventDefault();
        setContextData({ visible: true, posX: event.clientX, posY: event.clientY })
      }else if(contextRef.current && !contextRef.current.contains(event.target)){
        setContextData({ ...contextData, visible: false })
      }
    }

    const offClickHandler= (event) => {
      if(contextRef.current && !contextRef.current.contains(event.target)){
        setContextData({ ...contextData, visible: false })
      }
    }

    document.addEventListener('contextmenu', contextMenuEventHandler)
    document.addEventListener('click', offClickHandler)
    return () => {
      document.removeEventListener('contextmenu', contextMenuEventHandler)
      document.removeEventListener('click', offClickHandler)
    }
  }, [contextData, targetId])

  return (
    <div ref={contextRef} className='contextMenu' style={{ display:`${contextData.visible ? 'block' : 'none'}`, left: contextData.posX, top: contextData.posY }}>
      <div className='optionsList'>
        {options.map((option) => (
          <li key={option} className='optionListItem'>
            {option}
          </li>
        ))}
      </div>
    </div>
  );
}

export default MyCustomContextMenu;
