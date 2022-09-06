

this.window.addEventListener('load',function () {
  var goBack = document.querySelector('.goBack');
goBack.addEventListener('click', function () {
    animate(window, 0);
});

function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (window.pageYOffset == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        } else {
            // obj.style.left = obj.offsetLeft + step + 'px';
            window.scroll(0, window.pageYOffset + step);
        }
    }, 15);
}
})
