
import React, { useState } from 'react';
import { Button, Menu, Dropdown } from 'antd';
import StoryNavigation from './components/StoryNavigation';
import { MoonOutlined, SettingOutlined, SunOutlined } from '@ant-design/icons';
import { StoryPage } from './types/StroyPage';

const App: React.FC = () => {
  //   const stories: StoryPage[] = [
  //   {id:1, title:"bouquet",content:"perfect love bouquet fresh flowers", img:'https://preciouspetals.ie/wp-content/uploads/2017/05/Midnight-Box.jpg',width:345, hight:378},
  //   {id:2, title:"flowers",content:"types of flowers", img:'https://www.hhfshop.com/cdn/shop/articles/IMG_2150-min.jpg?v=1628788088&width=1100', width:1100, hight:1100},
  //   {id:3, title:"farm",content:"farm is a relaxing place",
  //    img:
  //    'https://images.unsplash.com/photo-1543314444-26a64fa5efe1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVyeSUyMGxhcmdlfGVufDB8fDB8fHww',
  //    width:3000, hight:1145}

  // ];

  const stories: StoryPage[] = [
    {id:1, title:"bouquet",content:"perfect love bouquet fresh flowers", img:'../assets/IMG_2150-min.webp',width:345, hight:378},
    {id:2, title:"flowers",content:"types of flowers", img:'../assets/Midnight-Box.jpg', width:1100, hight:1100},
    {id:3, title:"farm",content:"farm is a relaxing place",
     img:
     '../assets/photo-1543314444-26a64fa5efe1.jfif',
     width:3000, hight:1145}

  ];
  


  
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode); // Toggle dark class on root
  };
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => toggleDarkMode()}>
        {/* <MoonOutlined /> Light Mode */}
        {!darkMode ? <SunOutlined /> : <MoonOutlined />}
        {!darkMode ? " Dark Mode" : " Ligth Mode"}
      </Menu.Item>
      {/* <Menu.Item key="2" onClick={() => toggleDarkMode()}>
        <SunOutlined /> Dark Mode
      </Menu.Item> */}
    </Menu>
  );

  return (
    // <div className={`min-h-screen flex items-center justify-center transition-colors ${darkMode ? 'bg-background text-text' : 'bg-white text-black'}`}>
    //   <div className="text-center">
   
    //   <div className="flex space-x-4">
    //     <Dropdown overlay={menu} trigger={['click']}>
    //       <Button type="default" icon={<SettingOutlined />}>
            
    //       </Button>
    //     </Dropdown>
        
    //     {/* <Button
    //       type="primary"
    //       onClick={() => toggleDarkMode()}
    //       icon={darkMode ? <SunOutlined /> : <MoonOutlined />}
    //       className="flex items-center"
    //     >
    //       {darkMode ? 'Light Mode' : 'Dark Mode'}
        
    //     </Button> */}
    //   </div>
       
    //   <div className="App dark">
    //        <StoryNavigation stories={stories} />
    //     </div>
      
    //   </div>
      
    // </div>
    
    <div className="App bg-darkBackground min-h-screen flex items-center justify-center">
     <StoryNavigation stories={stories} />
  </div>
  );
};

export default App;
