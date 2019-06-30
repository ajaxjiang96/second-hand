import React from 'react';
// import logo from './logo.svg';
import './App.css';
import items from './data/items';
import copy from 'copy-to-clipboard';
import qr from './media/qrcode@1x.png'
import preval from 'preval.macro';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// console.log(items)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-Left">
          毕业
          <br />
          卖二手
        </div>
        <div className="Header-Right">
          卖给
          <br />
          有缘人
        </div>
      </header>
      <div className="Body">
        {_renderItems(items)}
      </div>
      <div className="Footer">
        <p className="Footer-text">各位老板看上任何东西<br/>点一下对应卡片复制名称然后扫下面二维码联系我<br />谢谢</p>
        <p className="Footer-text">
            [上次更新: {preval`module.exports = new Date().toLocaleString();`}]
          </p>
        <img className="Qrcode" src={qr} alt=""/>
        <p className="Footer-text">Copyright © 2019 Jiacheng Jiang</p>

      </div>
      {/* <ToastContainer className="TContainer"/> */}
    </div>
  );
}

function _renderItems(lst) {
  let key = -1
  return lst.map(element => {
    key++;
    return _renderItem(element, key);
  });
}

function _renderItem(item, i) {
  return (
    <div className="Item-container" key={i} onClick={()=>click(item)}>
      <img className="Item-image" src={item.img} alt={item.name} />
      <div className={`Item-name ${item.sold ? "sold" : ""}`}>
        {item.name}
      </div>

      <div className="Item-brief">
        <div className="Item-brief-item">
          <div className="Item-brief-item-content">
            {item.purchaseDate}
          </div>
          <div className="Item-brief-item-title">
            购买时间
          </div>
        </div>
        <div className="Item-sold">
          {item.sold ? _renderSold() : null}
        </div>
        <div className="Item-brief-item">
          <div className="Item-brief-item-content price">
            ${item.price}
          </div>
          <div className="Item-brief-item-title">
            原价{item.originalPrice ? item.originalPrice : "忘了"}
          </div>
        </div>
      </div>

      <div className="Item-detail">
        <div className="Item-brief-item">
          <div className="Item-brief-item-content">
            {item.feature}
          </div>
          <div className="Item-brief-item-title">
            特点
        </div>
        </div>
      </div>

      <div className="Item-detail">
        <div className="Item-brief-item">
          <div className="Item-brief-item-content">
            {item.currentState}
          </div>
          <div className="Item-brief-item-title">
            目前状态
        </div>
        </div>
      </div>
    </div>)
}

function click(item) {
  if (!item.sold) {
    if (copy(item.name)) {
      alert(`已复制"${item.name}"\n扫描页面最下方二维码联系我吧~`)
    } else {
      alert(`名称复制失败\n截个图然后扫描页面最下方二维码联系我吧~`)
    };
  } else {
    alert(`这个东西已经卖掉咯\n老板看看别的吧`)
  }
}
function _renderSold() {
  return <div className="Sold-container">
    <div className="Sold-text-Chinese">
      <span>已</span><span>售</span>
    </div>
    <div className="Sold-text-English">
      <span>S</span>
      <span>O</span>
      <span>L</span>
      <span>D</span>
    </div>
  </div>
}

export default App;
