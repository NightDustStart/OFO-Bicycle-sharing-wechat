// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      btnbg:"",
      picUrls:[],
      bindInfo:{
          number:0,
          desc:" "
      },
      actionText:"照相/相册",
      itemValues:[{
        value:"私锁私用",
        color:"pink",
        checked:false
    }, {
        value: "私锁私用",
        color:"pink",
        checked:false
        },{
            value: "私锁私用",
        color:"pink",
        checked:false
    },{
        value: "私锁私用",
        color:"pink",
        checked:false
        },{
            value: "私锁私用",
        color:"pink",
        checked:false
    },{
        value: "私锁私用",
        color:"pink",
        checked:false
        },{
            value: "私锁私用",
        color:"pink",
        checked:false
    },{
        value: "私锁私用",
        color:"pink",
        checked:false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },
    checkbox:function(e){
  
    let _values = e.detail.value;
    this.setData({
        checkboxValues:_values
    })
    if(_values.lengh === 0){
        this.setData({
            btnBg:""
        })
    }else{
        this.setData({
            btnBg:'#ccc'
        })
    }
},
bindPhoto:function(){
  wx.chooseImage({
      success: (res) => {
        console.log(res);
        let lFps = res.tempFilePaths;
        let _picUrl = this.data.picUrls
        for (var i = 0; i < lFps.length; i++){
            _picUrl.push(lFps[i])
        }
        this.setData({
            picUrls: _picUrl,
            actionText:'+'
        })
      },
  })  
},
dell : function(e){
    console.log(e);
   let index =  e.target.dataset.index;
   let _picUrls = this.data.picUrls;
   _picUrls.splice(index,1);
   if (_picUrls.length == 0){
       this.setData({
           actionText: "照相/相册"
       })
   }
   this.setData({
       picUrls: _picUrls
   })
},
changeNumber:function(e){
    this.setData({
        number:e.detail.value,
        desc:this.data.bindInfo.desc
    })
},
changeDesc: function (e) {
    this.setData({
        number: this.data.bindInfo.number,
        desc: e.detail.value
    })
},
submit:function(){
    if (this.data.picUrls.length > 0 && this.data.checkboxValues.length > 0){
        wx.request({
            url: 'https://www.easy-mock.com/mock/5934d75891470c0ac100fc9a/xu/xi/x ',
            // method:"POST",
            // data:{
            //     houtao:shujv
            // },
            success:(res)=>{
                console.log(res);
                wx.showToast({
                    title: '提交成功！即将回到首页',
                    icon:"success",
                    duration:2000
                })
                setTimeout(()=>{
                    wx.redirectTo({
                        url: '../index/index',
                    })
                },2500)
                
            }
        })
    }else{
        wx.showModal({
            title: '请填写完整',
            content: '你瞅啥赶紧去填，干你啊',
            confirmText:"我服我填",
            cancelText:"老子不填",
            success:(res) => {
                console.log(res)
                if(res.confirm){
                }else{
                    wx.redirectTo({
                        url: '../index/index',
                    })
                }
            }
        })
    }
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