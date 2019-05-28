function justInvoke(fn) {
  return fn() {
    return this
  }
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {

}
