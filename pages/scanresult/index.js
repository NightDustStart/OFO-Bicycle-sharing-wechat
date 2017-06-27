// pages/scanresult/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   key:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        password: options.password
    });
    var i = 3;
   var timer = setInterval(()=>{
       this.setData({
           time: i
       })
       i--;
       if(i == -1){
           console.log('a')
           clearTimeout(timer);
           console.log(this.data)
           if(this.data.key){
               wx.redirectTo({
                   url: '../billing/index?number=' + options.number,
               })
           }
       }
   },1000)
  },
moveToIndex:function(){
    clearInterval(this.timer);
    wx.redirectTo({
        url: '../index/index',
    })
},
    returnIndex:function(){
        wx.redirectTo({
            url: '../index/index',
        })
        clearInterval(this.timer);
        this.setData({
            key: false
        })
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