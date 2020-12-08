export default {
  // 在项目中payload一般传对象，这样更加语义化
  addToCart (state, { detail }) {
    // 添加购物车
    const isExist = state.cart.some(shop => shop.id === detail.id)
    if (isExist) {
      state.cart = state.cart.map(shop => {
        if (shop.id === detail.id) shop.count++
        return shop
      })
    } else {
      state.cart.push({
        ...detail,
        count: 1,
        check: true
      })
    }
  },
  toggleCheck (state, { id }) {
    state.cart = state.cart.map(shop => {
      if (shop.id === id) shop.check = !shop.check
      return shop
    })
  },
  changeCountById (state, { id, num }) {
    state.cart = state.cart.map(shop => {
      if (shop.id === id) shop.count = num
      return shop
    })
  },
  delShop (state, { id }) {
    state.cart = state.cart.filter(shop => {
      console.log(shop.id, id)
      return shop.id !== id
    })
  },
  toggelAllCheck (state, { isAllCheck }) {
    state.cart = state.cart.map(shop => {
      shop.check = !isAllCheck
      return shop
    })
  },
  changeIsBackShowAndTitle (state, { isBackShow, title }) {
    state.isBackShow = isBackShow
    state.title = title
  }
}
