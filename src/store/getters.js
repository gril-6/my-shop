export default {
  totalMoney ({ cart }) {
    return cart.reduce((money, shop) => {
      if (shop.check) {
        money += shop.price * shop.count
      }
      return money
    }, 0)
  },
  isAllCheck ({ cart }) {
    return cart.length === 0 ? false : cart.every(shop => shop.check)
  },
  totalCount ({ cart }) {
    return cart.reduce((count, shop) => count + shop.count, 0)
  }
}
