function justInvoke(fn) {
  return fn() {
    return this
  }
}

function setThisWithCall(fn, thisValue, arg) {

}
