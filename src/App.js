import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [showModal, setShowModal] = useState(false);
  const [extractCode, setExtractCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [extractCodeInput, setExtractCodeInput] = useState('');

  const handleDownload = () => {
  setShowModal(true);
  setIsError(false);
  setExtractCodeInput('');
};

const handleExtractCodeSubmit = () => {
  if (extractCodeInput === '1478') {
    // 提取码正确，触发下载
    alert('提取码正确，开始下载！');
    window.location.href = `${process.env.PUBLIC_URL}/downloads/memesquid.exe`;
    setShowModal(false);
  } else {
    // 提取码错误
    setIsError(true);
    setExtractCodeInput('');
  }
};


const handleCloseModal = () => {
  setShowModal(false);
  setIsError(false);
  setExtractCodeInput('');
};


const handleInputChange = (e) => {
  setExtractCodeInput(e.target.value);
};


const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    handleExtractCodeSubmit();
  }
};

  return (

    <div className="App">
      <h1 className="main-title">欢迎下载小鱿鱼桌宠</h1>     
      <p className="subtitle">让它陪你看喷喷视频吧！（目前只支持windows系统）</p>
      
      <button
         className="download-btn"
          onClick={handleDownload}
      >
        下载
      </button>

      {showModal && (
  <div className="modal-overlay" onClick={handleCloseModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={handleCloseModal}>×</button>
      <h3 className="modal-title">
        {isError ? '提取码错误，请重新输入：' : '请输入提取码：'}
      </h3>
      <p className="video-tip">
      参加比赛即可获得提取码
      </p>
      <input
        type="text"
        className="extract-input"
        value={extractCodeInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="请输入提取码"
        autoFocus
      />
      <button className="confirm-btn" onClick={handleExtractCodeSubmit}>
        确定
      </button>
    </div>
  </div>
)}
      
      
      <div className="image-section">
        <div className="image-container">
          
          <img className="demo-image" src={`${process.env.PUBLIC_URL}/images/demosquid.png`} alt="picture" />
          <div className="arrow-container">
            {/*<div className="arrow"></div>*/}
            <span className="arrow-text">←长这样</span>
          </div>
        </div>
      </div>
      
      
      <div className="video-section">
        <p className="video-description">
          对战中不同事件会触发不同表情包：
        </p>
        
        <div className="video-container">
         <a 
          href="https://www.bilibili.com/video/BV11xzXBXEDi/?spm_id_from=333.1387.homepage.video_card.click" 
          target="_blank" 
          rel="noopener noreferrer"
          className="custom-link"
        >
          demo视频
        </a>
          {/*
          <video 
            className="demo-video"
            controls
           // poster="" // 视频封面
          >
            <source src={`${process.env.PUBLIC_URL}/images/video.mp4`}  />
            
          </video>
          */}

         
        </div>
      </div>
      
      <footer className="footer">
        <p>© 包浆小鱿鱼表情包桌宠，作者：小白的狗</p>
      </footer>
    </div>
    
  );
}

export default App;