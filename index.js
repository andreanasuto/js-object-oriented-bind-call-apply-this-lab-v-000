function justInvoke(fn) {
  thisValue = function fn() {
     return this
   }
   return fn()
}

function setThisWithCall(thisValue, arg) {
  debugger
  return justInvoke.call(this,thisValue, arg)
}
