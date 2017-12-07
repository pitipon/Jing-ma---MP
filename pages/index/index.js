// pages/group/group.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: {},
    is_loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this
    // Set Title
    wx.setNavigationBarTitle({
      title: 'JIN MA'
    })

    // Set token to data local
    // console.log("TEST Res store globalData >>>")
    // console.log(app.globalData.token)
    // console.log(app.globalData.currentUserId)
    // console.log(app.globalData.email)

    // Set items data from app.js
    
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this
    // if(that.data.items == {}){
    //   that.setData({
    //     items: app.globalData.items
    //   })
    //   console.log("wanna eat salmon")
    //   console.log(that.data.items)
    // }
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // Load Card data
    let that = this
    wx.request({
      success: function (res) {
        try {
          console.log("INDEX API: ")
          console.log(res)
          app.globalData.items = res.data.items
          console.log(app.globalData.items)
          console.log("INDEX API SUCCESS")

          that.setData({
            items: res.data.items,
            is_loading: false
          })


        } catch (e) {
          console.log(e)
        }
      },

      url: 'https://jinma.herokuapp.com/api/v1/items',
      method: "get"
    })
    
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