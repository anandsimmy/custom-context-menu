import { useState, useEffect } from 'react';
import './App.css';

const MyCustomContextMenu= () => {
  const [contextData, setContextData]= useState({ visible:false, posX: 0, posY: 0});

  useEffect(() => {
    const contextMenuEventHandler= (event) => {
      event.preventDefault();
      setContextData({ posX: event.clientX, posY: event.clientY })
    }

    document.addEventListener('contextmenu', contextMenuEventHandler)
    return () => document.removeEventListener('contextmenu', contextMenuEventHandler)
  }, [])

  return (
    <div className='contextMenu' style={{ left: contextData.posX, top: contextData.posY }}>
      Hello, Anand is the best
    </div>
  );
}

export default MyCustomContextMenu;
