function justInvoke(fn) {
  thisValue = function fn() {
     return this
   }
   return fn()
}

function setThisWithCall(hisValue, arg) {
  debugger
  return justInvoke.call(fn,thisValue, arg)
}
