function justInvoke(fn) {
  function fn() {
    return this
  }
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {

}
