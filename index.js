function justInvoke(fn) {
  thisValue = function fn() {
     return this
   }
   return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return justInvoke.call(fn(thisValue, arg))
}
