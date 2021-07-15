import MyCustomContextMenu from './MyCusomtContextMenu';

const App= () => {

  return (
    <div className='wrapper'>
      <div id='defaultContextmenuArea' className='defaultContextmenuArea'>
      </div>
      <div id='customContextmenuArea1' className='customContextmenuArea1' >
        <MyCustomContextMenu
          targetId='customContextmenuArea1'
          options={['View', 'Update', 'Delete']}
        />
      </div>
      <div id='customContextmenuArea2' className='customContextmenuArea2' >
        <MyCustomContextMenu
          targetId='customContextmenuArea2'
          options={['Netflix', 'Prime', 'Hotstar', 'Youtube']}
        />
      </div>
      <div id='customContextmenuArea3' className='customContextmenuArea3' >
        <MyCustomContextMenu
          targetId='customContextmenuArea3'
          options={['Footbal', 'Cricket', 'BasketBall', 'Volleyball', 'Tennis', 'Hockey', 'Golf']}
        />
      </div>
    </div>
  );
}

export default App;
