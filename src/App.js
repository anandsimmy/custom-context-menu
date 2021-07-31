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
          classes={{
            listWrapper: 'customContextmenuArea1ListWrapper',
            listItem: 'customContextmenuArea1ListItem'
          }}
        />
      </div>
      <div id='customContextmenuArea2' className='customContextmenuArea2' >
        <MyCustomContextMenu
          targetId='customContextmenuArea2'
          options={['Netflix', 'Prime', 'Hotstar', 'Youtube']}
          classes={{
            listWrapper: 'customContextmenuArea2ListWrapper',
            listItem: 'customContextmenuArea2ListItem'
          }}
        />
      </div>
      <div id='customContextmenuArea3' className='customContextmenuArea3' >
        <MyCustomContextMenu
          targetId='customContextmenuArea3'
          options={['Footbal', 'Cricket', 'BasketBall', 'Volleyball', 'Tennis', 'Hockey', 'Golf']}
          classes={{
            listWrapper: 'customContextmenuArea3ListWrapper',
            listItem: 'customContextmenuArea3ListItem'
          }}
        />
      </div>
    </div>
  );
}

export default App;
