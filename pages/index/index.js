// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.timer = options.timer;
	  wx.getLocation({
		  success:(res)=> {
			  this.setData({
				latitude:res.latitude,
				longitude:res.longitude  
			  })
		  }
	  }),
      wx.getSystemInfo({
          success: (res) => {
              this.setData({
                  controls:[{
                      id:1,
                      iconPath:"./images/location.png",
                      position:{
                          width:50,
                          height:50,
                          left:20,
                          top:res.windowHeight - 80
                      },
                      clickable:true
                  },{
                      id:2,
                      iconPath:"./images/use.png",
                      position:{
                          width:90,
                          height:90,
                          left:res.windowWidth/2 - 45,
                          top:res.windowHeight - 100
                      },
                      clickable:true
                  },{
                      id:3,
                      iconPath:"./images/warn.png",
                      position:{
                          width:50,
                          height: 50,
                          left: res.windowWidth - 70,
                          top: res.windowHeight - 80 
                      },
                      clickable: true
                  },{
                      id:4,
                      iconPath:"./images/marker.png",
                      position:{
                          height: 45,
                          width: 30,
                          top: res.windowHeight / 2 - 45,
                          left: res.windowWidth / 2 - 15
                      }
                  },{
                      id:5,
                      iconPath:"./images/avatar.png",
                      position:{
                          height:50,
                          width: 50,
                          top:res.windowHeight - 155,
                          left: res.windowWidth -  70
                      },
                      clickable: true
                  }]
              })
          },
      })
  },
bindtap:function(e){
    switch(e.controlId){
        case 1:this.movetoCenter();
        break;
        case 2:if(!this.timer){
            wx.scanCode({
                success: function (e) {
                    console.log(e);
                    wx.showLoading({
                        title: '正在获取密码！'
                    });
                    wx.request({
                        url: "https://www.easy-mock.com/mock/5934d75891470c0ac100fc9a/xu/xu",
                        success: (res) => {
                            console.log(res);
                            wx.redirectTo({
                                url: '../scanresult/index?password=' + res.data.data.password + "&number=" + res.data.data.number,
                                success: (res) => {
                                    wx.showToast({
                                        title: '获取密码成功！！',
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }else{
            wx.navigateBack({
                delta:1
            })
        }
        break;
        case 3: 
        wx.navigateTo({
            url: '../warn/index',
        })
        break;
        case 5:
            wx.navigateTo({
            url: '../my/index',
        }) 
        break;

    }
},

movetoCenter:function(){
    this.map = wx.createMapContext("ofo-map")
    this.map.moveToLocation();
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})