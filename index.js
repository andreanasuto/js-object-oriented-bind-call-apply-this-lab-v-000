function justInvoke(fn) {
  fn() {
    return this
  }
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {

}
