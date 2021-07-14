import MyCustomContextMenu from './MyCusomtContextMenu';

const App= () => {

  return (
    <div className='wrapper'>
      <div id='defaultContextmenuArea' className='defaultContextmenuArea' />
      <div id='customContextmenuArea1' className='customContextmenuArea1' />
      <div id='customContextmenuArea2' className='customContextmenuArea2' />
      <div id='customContextmenuArea3' className='customContextmenuArea3' />
      <MyCustomContextMenu />
    </div>
  );
}

export default App;
