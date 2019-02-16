new Vue({
  el: '#app',
  data: {
    total:0,
    tempData: {
      pages: 'hot',
      nosauce: false,
    },
    sauce: [
      {
        name: '胡椒粉',
        ordered: false,
      },
      {
        name: '辣椒粉',
        ordered: false,
      },
      {
        name: '甘梅粉',
        ordered: false,
      },
      {
        name: '洋蔥',
        ordered: false,
      },
      {
        name: '蒜頭',
        ordered: false,
      },
      {
        name: '九層塔',
        ordered: false,
      },
    ],
    order:[
      {
        name: '雞軟骨(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 60,
      },{
        name: '雙飛雞翅',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 35,
      },{
        name: '雞腿仁排',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 45,
      },{
        name: '香雞排',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 60,
      },{
        name: '無骨鹽酥雞(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 60,
      },{
        name: '三角骨(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 60,
      },{
        name: '深海大魷魚(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 60,
      },{
        name: '紅麴雞皮(大份)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 50,
      },{
        name: '地瓜(甘梅粉)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 50,
      },{
        name: '小熱狗(2條)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 10,
      },{
        name: '米血',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 10,
      },{
        name: '生鮮豆皮',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 10,
      },{
        name: '菜頭粿',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 10,
      },{
        name: '芋條粿(甜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 10,
      },{
        name: '百頁豆腐',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 15,
      },{
        name: '雞肉香腸(2條)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 15,
      },{
        name: '雞脖子',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 15,
      },{
        name: '豆干(2個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 15,
      },{
        name: '蔥餅皮',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 15,
      },{
        name: '四角薯餅',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 15,
      },{
        name: '鴨血',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 15,
      },{
        name: '銀絲卷',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 15,
      },{
        name: '芋頭餅',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 20,
      },{
        name: '蛋黃芋丸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 20,
      },{
        name: '皮蛋',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 20,
      },{
        name: '糯米腸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 20,
      },{
        name: '貢丸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 20,
      },{
        name: '雞心',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 20,
      },{
        name: '雞胗',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 20,
      },{
        name: '雞尾椎',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 25,
      },{
        name: '德國香腸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 25,
      },{
        name: '細馬鈴薯條',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 30,
      },{
        name: '芋籤粿(鹹)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 30,
      },{
        name: '馬鈴薯花(5個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 30,
      },{
        name: '蜜糖小熱狗',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 30,
      },{
        name: '麥克雞塊',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 35,
      },{
        name: '洋蔥圈(5個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 35,
      },{
        name: '佐拉起司條(3條)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 35,
      },{
        name: '雙層薯餅夾起司',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 40,
      },{
        name: '美式起司脆薯',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 40,
      },{
        name: '雞蛋豆腐(一盒)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 50,
      },{
        name: '淋醬調皮搗蛋',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 50,
      },{
        name: '小黑輪',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 15,
      },{
        name: '魚板',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 15,
      },{
        name: '鱈魚板',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 20,
      },{
        name: '黑輪條(2條)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 20,
      },{
        name: '台中甜不辣',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 20,
      },{
        name: '手工甜不辣',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 20,
      },{
        name: '蔬菜甜不辣',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 20,
      },{
        name: '高雄手工大黑輪',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 20,
      },{
        name: '柳葉魚(2條)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 20,
      },{
        name: '花枝丸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 20,
      },{
        name: '蝦捲',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 25,
      },{
        name: '黃金魚丸',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: true,
	      cash: 25,
      },{
        name: '旗魚黑輪(包水煮蛋2個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 30,
      },{
        name: '月亮蝦餅(附酸辣梅醬)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '綜合',
        hot: false,
	      cash: 50,
      },{
        name: '四季豆',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: true,
	      cash: 20,
      },{
        name: '金針菇',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: false,
	      cash: 35,
      },{
        name: '小黃瓜',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: true,
	      cash: 25,
      },{
        name: '筊白筍',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: true,
	      cash: 25,
      },{
        name: '洋蔥',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: false,
	      cash: 25,
      },{
        name: '青椒',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: false,
	      cash: 30,
      },{
        name: '綠花椰菜',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: true,
	      cash: 30,
      },{
        name: '高麗菜',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: true,
	      cash: 30,
      },{
        name: '香菇',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: false,
	      cash: 30,
      },{
        name: '杏鮑菇',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: true,
	      cash: 30,
      },{
        name: '玉米筍',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: true,
	      cash: 30,
      },{
        name: '玉米',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '蔬菜',
        hot: true,
	      cash: 35,
      },{
        name: '地瓜(黑糖蜜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: false,
	      cash: 40,
      },{
        name: '紫心地瓜麻糬球(3顆)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: false,
	      cash: 10,
      },{
        name: '鹹甜起司麻糬球(2顆)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: false,
	      cash: 20,
      },{
        name: '飄香甜綠豆沙球(2顆)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: false,
	      cash: 20,
      },{
        name: '脆皮甜黑米糕捲(2個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: false,
	      cash: 20,
      },{
        name: '港式馬蹄條',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: true,
	      cash: 20,
      },{
        name: '港式奶皇包',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: false,
	      cash: 25,
      },{
        name: '娘惹山藥捲(2個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: true,
	      cash: 25,
      },{
        name: '淋醬銀絲卷(煉乳/黑糖蜜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: true,
	      cash: 25,
      },{
        name: '銀絲卷棉花糖(煉乳/黑糖蜜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: false,
	      cash: 35,
      },{
        name: '幸福湯圓(煉乳/黑糖蜜x3)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: false,
	      cash: 35,
      },{
        name: '銀絲卷披起司(煉乳/黑糖蜜)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: true,
	      cash: 40,
      },{
        name: '玉米布丁酥(4個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: false,
	      cash: 35,
      },{
        name: '炸香純巧克力布朗尼(3個)',
        ordered: false,
        num: 1,
        imgUrl: 'img/good.jpg',
        class: '甜點',
        hot: false,
	      cash: 45,
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
    tempData: {
      handler: function (val, oldVal) {
        $('.navbar-collapse').collapse('hide');
      },
      deep: true
    },
  },
  methods: {
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
    changePage(page){
      this.tempData.pages = page
    },
    sendMsg(){
      const vm = this;
      const ext = $('.sauce-exit').html();
      if( ext == "<!----><!----><!----><!----><!----><!---->" ){
        alert('尚未選取配料')
      } else {
        setTimeout(function(){
          var r = confirm("餐點已複製到剪貼簿，請直接到貝稑莎的 LINE '貼上'");
          if (r == true) {
            window.location.href = 'https://line.me/ti/p/KUQIYFYj8l';
          }
        }, 300 )
      }
      
        
    }
  },
  created() {
  },
})