Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectNav:0,
    navList:[],
    swiperList:[],
    
  },

/**
 * https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/
 * request请求
 * navList
 * swiperList
 * videoList
 * videoDetail?id 都需要带上id
 * othersList?id
 * commentsList?id
 */
  getRequest(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res){
        if(res.data.code=='0')
        {
          //console.log(res.data.data.navList[1])
          that.setData({
            navList:res.data.data.navList
          })
        }
        
      }

    })
  },

  /**
   * 
   * BindTap
   * 如果data-index不写，则e.target.dataset.index为undefined
   */
  navTap(e){
    this.setData({
      selectNav:e.target.dataset.index
    })
    //console.log()
  },

  /**
   * 
   * 轮播图 
   */
  getSwiper(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      success(res){
        console.log(res);
        if(res.data.code===0)
        that.setData({
          swiperList:res.data.data.swiperList

        });
      }
    });

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRequest();
    this.getSwiper();
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