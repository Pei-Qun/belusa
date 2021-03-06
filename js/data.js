new Vue({
  el: '#app',
  data: {
    total:0,
    tempData: {
      nosauce: false,
      sort: '所有餐點',
      searchVal: '',
    },
    elseBtn:{
      potato:{
        name: '地瓜薯條(梅子粉)',
        show: false,
        ordered: false,
      },
      chicken:{
        name: 'G排/腿仁排(切)',
        show: false,
        ordered: false,
      },
    },
    spicy: '不要辣',
    sauce: [
      {
        name: '不灑粉',
        ordered: false,
      },
      {
        name: '胡椒粉',
        ordered: false,
      },
      {
        name: '咖哩粉',
        ordered: false,
      },
      {
        name: '青梅子粉',
        ordered: false,
      },
      {
        name: '九層塔',
        ordered: false,
      },
      {
        name: '生洋蔥',
        ordered: false,
      },
      {
        name: '生蒜片',
        ordered: false,
      },
    ],
    order:[
      {
        name: '貝稑莎雙飛雞翅(2隻)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '夢幻吮指回味區',
        hot: true,
        cash: 35,
        visible: true,
      },{
        name: '里肌豬隊友片片(3個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '夢幻吮指回味區',
        hot: false,
        cash: 40,
        visible: true,
        sauceAdd: 'chicken'
      },{
        name: '雞腿仁排',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '夢幻吮指回味區',
        hot: true,
        cash: 45,
        visible: true,
        sauceAdd: 'chicken'
      },{
        name: '貝稑莎香雞排',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '夢幻吮指回味區',
        hot: true,
        cash: 60,
        visible: true,
        sauceAdd: 'chicken'
      },{
        name: '脫一半香雞排(沾薄粉)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '夢幻吮指回味區',
        hot: true,
        cash: 60,
        visible: true,
        sauceAdd: 'chicken'
      },{
        name: '打啵起司香雞排',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '夢幻吮指回味區',
        hot: true,
        cash: 75,
        visible: true,
        sauceAdd: 'chicken'
      },{
        name: '無骨鹽酥雞(小份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 40,
        visible: true,
      },{
        name: '無骨鹽酥雞(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 60,
        visible: true,
      },{
        name: '三角骨(小份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 40,
        visible: true,
      },{
        name: '三角骨(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 60,
        visible: true,
      },{
        name: '深海大魷魚(小份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 40,
        visible: true,
      },{
        name: '深海大魷魚(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 60,
        visible: true,
      },{
        name: '雞軟骨(小份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 40,
        visible: true,
      },{
        name: '雞軟骨(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 60,
        visible: true,
      },{
        name: '紅麴雞皮(小份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 30,
        visible: true,
      },{
        name: '紅麴雞皮(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 50,
        visible: true,
      },{
        name: '地瓜薯條(小份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 30,
        visible: true,
        sauceAdd: 'potato'
      },{
        name: '地瓜薯條(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 50,
        visible: true,
        sauceAdd: 'potato'
      },{
        name: '小熱狗(2條)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 10,
        visible: true,
      },{
        name: '米血',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
      cash: 10,
      visible: true,
      },{
        name: '生鮮豆皮',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
      cash: 10,
      visible: true,
      },{
        name: '菜頭粿',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
      cash: 10,
      visible: true,
      },{
        name: '芋條粿(甜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
      cash: 10,
      visible: true,
      },{
        name: '百頁豆腐',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
      cash: 15,
      visible: true,
      },{
        name: '雞肉香腸(2條)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '骨膠原鳳爪(2隻)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '雞脖子',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
      cash: 15,
      visible: true,
      },{
        name: '豆干(2個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 15,
        visible: true,
      },{
        name: '蔥餅皮',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 15,
        visible: true,
      },{
        name: '四角薯餅',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 15,
        visible: true,
      },{
        name: '鴨血',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 15,
        visible: true,
      },{
        name: '銀絲卷',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 15,
        visible: true,
      },{
        name: '芋頭餅',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 20,
        visible: true,
      },{
        name: '蛋黃芋丸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 20,
        visible: true,
      },{
        name: '皮蛋',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '糯米腸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '貢丸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 20,
        visible: true,
      },{
        name: '雞心',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '雞胗',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '雞尾椎',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 25,
        visible: true,
      },{
        name: '德國香腸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 25,
        visible: true,
      },{
        name: '讚岐烏龍棒棒',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 25,
        visible: true,
      },{
        name: '香蔥鮮肉餡餅(2個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 25,
        visible: true,
      },{
        name: '細馬鈴薯條',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 30,
        visible: true,
      },{
        name: '芋籤粿(鹹)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 30,
        visible: true,
      },{
        name: '馬鈴薯花(5個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 30,
        visible: true,
      },{
        name: '蜜糖小肉豆',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 30,
        visible: true,
      },{
        name: '莎莎豬耳朵',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '麥克雞塊',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 35,
        visible: true,
      },{
        name: '洋蔥圈(5個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '摩佐拉起司條(3條)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '雙層薯餅夾起司',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 40,
        visible: true,
      },{
        name: '美式起司脆薯',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 40,
        visible: true,
      },{
        name: '雞蛋豆腐(小份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
	      cash: 30,
        visible: true,
      },{
        name: '雞蛋豆腐(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: true,
        cash: 50,
        visible: true,
      },{
        name: '淋醬調皮搗蛋',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合炸物精選區',
        hot: false,
        cash: 50,
        visible: true,
      },{
        name: '小黑輪',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: true,
        cash: 15,
        visible: true,
      },{
        name: '魚板',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: true,
        cash: 15,
        visible: true,
      },{
        name: '鱈魚板',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: false,
        cash: 20,
        visible: true,
      },{
        name: '黑輪條(2條)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: false,
        cash: 20,
        visible: true,
      },{
        name: '台中甜不辣',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '手工甜不辣',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '蔬菜甜不辣',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: false,
        cash: 20,
        visible: true,
      },{
        name: '高雄手工大黑輪',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '柳葉魚(2條)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '花枝丸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: true,
        cash: 25,
        visible: true,
      },{
        name: '蝦捲',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: false,
        cash: 25,
        visible: true,
      },{
        name: '黃金魚丸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: true,
        cash: 25,
        visible: true,
      },{
        name: '旗魚黑輪(包水煮蛋2個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: false,
        cash: 30,
        visible: true,
      },{
        name: 'DHA 鱈魚條(2個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: false,
        cash: 40,
        visible: true,
      },{
        name: '月亮蝦餅(附酸辣梅醬)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: false,
        cash: 50,
        visible: true,
      },{
        name: 'PSB 鳳梨蝦球',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '鮮鱻魚漿製品區',
        hot: false,
        cash: 70,
        visible: true,
      },{
        name: '四季豆',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '小黃瓜',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: true,
        cash: 25,
        visible: true,
      },{
        name: '筊白筍',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: true,
        cash: 25,
        visible: true,
      },{
        name: '洋蔥',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: false,
        cash: 25,
        visible: true,
      },{
        name: '青椒',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: false,
        cash: 30,
        visible: true,
      },{
        name: '綠花椰菜',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: true,
        cash: 30,
        visible: true,
      },{
        name: '高麗菜',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: true,
        cash: 30,
        visible: true,
      },{
        name: '香菇',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: false,
        cash: 30,
        visible: true,
      },{
        name: '杏鮑菇',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: true,
        cash: 30,
        visible: true,
      },{
        name: '玉米筍',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: true,
        cash: 30,
        visible: true,
      },{
        name: '玉米',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: true,
        cash: 35,
        visible: true,
      },{
        name: '金針菇',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '健康鮮脆蔬菜區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '紫心地瓜麻糬球(3顆)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 10,
        visible: true,
      },{
        name: '鹹甜起司麻糬球(2顆)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 20,
        visible: true,
      },{
        name: '港式馬蹄條',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: true,
        cash: 20,
        visible: true,
      },{
        name: '港式奶皇包',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 25,
        visible: true,
      },{
        name: '娘惹山藥捲(2個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: true,
        cash: 25,
        visible: true,
      },{
        name: '淋醬銀絲卷(煉乳)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: true,
        cash: 25,
        visible: true,
      },{
        name: '淋醬銀絲卷(黑糖蜜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: true,
        cash: 25,
        visible: true,
      },{
        name: '銀絲卷棉花糖(煉乳)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '銀絲卷棉花糖(黑糖蜜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '抹花芝幸福湯圓(3顆/煉乳)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '抹花芝幸福湯圓(3顆/黑糖蜜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '讚岐烏龍棒棒(煉乳)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '讚岐烏龍棒棒(黑糖蜜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '玉米布丁酥(4個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 35,
        visible: true,
      },{
        name: '炸迷你圓圓鬆餅球(4顆)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
	      cash: 35,
        visible: true,
      },{
        name: '銀絲卷披起司(煉乳)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: true,
        cash: 40,
        visible: true,
      },{
        name: '銀絲卷披起司(黑糖蜜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: true,
        cash: 40,
        visible: true,
      },{
        name: '黑糖蜜地瓜',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
        cash: 40,
        visible: true,
      },{
        name: '炸滑順香草泡芙球(4顆)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '心滿意足甜食區',
        hot: false,
	      cash: 45,
        visible: true,
      }
   ]
  },
  computed: {
    ss(){
      const result = [];
      // (if this.a) result.push('a')
    }
  },
  watch: {
    order: {
      handler: function (val, oldVal) {
        let vm = this;
        let totalPrice = 0;
        val.forEach( i => {
          if(i.ordered){
            let number = i.cash*i.num
            totalPrice += number
          }
        });
        vm.total = totalPrice;
      },
      deep: true
    },
    'tempData.searchVal': function (val) {
      const vm = this;
      vm.tempData.sort = '所有餐點';
      vm.order.forEach((item, index, array) => {
        if(item.name.indexOf(vm.tempData.searchVal) === -1){
          item.visible = false
        } else {
          item.visible = true
        }
      });
    }
  },
  methods: {
    showAdd(item){
      const vm = this;
      if(item.sauceAdd) {
        let val = item.sauceAdd;
        if(item.ordered){
          vm.elseBtn[val].show = true;
        } else {
          vm.elseBtn[val].show = false;
        }
        console.log(vm.elseBtn, item.ordered)
      }
    },
    numPlus(key){
      const vm = this;
      vm.order[key].num += 1;
    },
    minusPlus(key){
      const vm = this;
      if( vm.order[key].num > 1 ){
        vm.order[key].num -= 1;
      }      
    },
    reset(){
      let vm = this;
      var r = confirm("確定要重選?");
      if (r == true) {
        vm.order.forEach(element => {
          element.ordered = false
        });
        vm.sauce.forEach(element => {
          element.ordered = false
        });
        // $('#order-list-modal').modal('hide')
      }
    },
    sauceSelect() {
      let ok = 0;
      this.sauce.forEach(el => {
        if(el.ordered){
          ok += 1;
        }
      });
      return ok;
    },
    sendMsg(){
      const vm = this;
      const ext = $('.sauce-exit').html();
      if( !vm.sauceSelect() ){
        alert('尚未選取配料')
      } else {
        setTimeout(function(){
          var r = confirm("餐點已複製到剪貼簿，請直接到貝稑莎的 LINE '貼上'");
          if (r == true) {
            window.location.href = 'https://line.me/ti/p/KUQIYFYj8l';
          }
        }, 300 )
      }
      
        
    },
    openSearch(){
      $('#SearchModal').modal('show')
      $('.navbar-collapse').collapse('hide');
    },
    closeSearch(){
      this.tempData.searchVal = '';
    },
    closeSearchModal(){
      $('#SearchModal').modal('hide')      
    }
  },
  created() {
  },
})