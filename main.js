function checkTouchable() {
    document.body.dataset.touchable = !!window.ontouchstart;
}
  
checkTouchable();