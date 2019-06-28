import Item from '../model/item';
import img1 from '../media/01@1x.png';
import img2 from '../media/02@1x.png';
import img3 from '../media/03@1x.png';
import img4 from '../media/04@1x.png';
import img5 from '../media/05@1x.png';
import img6 from '../media/06@1x.png';
import img7 from '../media/07@1x.png';
import img8 from '../media/08@1x.png';
import img9 from '../media/09@1x.png';
// import img10 from '../media/10@1x.png';

let items = [
  new Item(
    "Nespresso Vertuo 咖啡机&打泡机套装",
    img8,
    "2018.7",
    150,
    "$219",
    "快速出水 清洁方便 剩有胶囊若干",
    "优秀 咖啡很好喝",
    false
  ),
  new Item(
    "Nintendo 3DS XL 掌机含充电器",
    img9,
    "2016.2",
    200,
    null,
    "民间高手任天堂 附带三盘游戏",
    "在吃灰 能用",
    false
  ),
  new Item(
    "Dell U2414 24寸显示器",
    img1,
    "2014.9",
    80,
    "$269.99",
    "1080P 超窄边框 精准色域",
    "屏幕下方音棒挂钩有损坏",
    true
  ),
  new Item(
    "Google Home 智能音响",
    img2,
    "2018.7",
    70,
    "$179.00",
    "音质OK 响应迅速 智能家居",
    "状态良好",
    true
  ),
  new Item(
    "IKEA LINNMON 墙角桌",
    img3,
    "2017.7",
    40,
    "$99.99",
    "极简设计 桌面空间大 坐姿舒适",
    "状态良好",
    false
  ),
  new Item(
    "IKEA MALM 双抽屉床头柜",
    img4,
    "2014.9",
    20,
    "$69.99",
    "能装",
    "状态良好",
    true
  ),
  new Item(
    "iQunix L-Stand 笔记本支架",
    img5,
    "2017.12",
    5,
    "￥49",
    "角度舒适 方便散热",
    "Ok",
    true
  ),
  new Item(
    "iQunix Spider 显示器支架",
    img6,
    "2015.8",
    20,
    "￥268",
    "抬高显示器 可容纳87键键盘",
    "Ok",
    true
  ),
  new Item(
    "Beats Solo 2 Stone Grey 有线",
    img7,
    "2014.12",
    40,
    "$268",
    "轻便 高音稳中音亮低音沉",
    "年事已高 刚换过全新耳罩",
    false
  )
]

items.sort((a, b) => {
  if (!a.sold && b.sold) {
    return -1
  }
  return a.name - b.name
})

export default items;
