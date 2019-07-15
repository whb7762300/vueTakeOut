import ajax from './ajax.js'
// 1、获取食品分类列表
export const reqFoodCategorys = () => ajax('/index_category')
//2.获取当前地址信息
export const reqAddress = (latitude, longitude) => ajax(`/position/${latitude},${longitude}`)
//3.获取商品列表
export const reqShopList = (latitude, longitude) => ajax('/shops', {
  latitude: latitude,
  longitude: longitude
})
