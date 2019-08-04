function removeTransition(e) {
    if (e.propertyName !== "transform") {
        return;
    }
    this.classList.remove("playing");
}/*利用一个叫 transitionend 的事件，它在 CSS transition 结束后会被触发。我们就可以利用这个事件，在每次打鼓的效果（尺寸变大、颜色变化）完成之后，去除相应样式。在这个页面中，发生 transition 的样式属性不止一个（box-shadow, transform, border-color），所以需要添加一个判断语句，使每发生一次按键事件时，只去除一次样式。*/ 


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);/*querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。获取文档中 id="demo" 的元素：document.querySelector("#demo");*/
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);/*keydown事件keyCode 的属性的值对应ASCII码值相同，http://keycode.info/可查询*/

    key.classList.add("playing");

    audio.currentTime = 0;
    audio.play();
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));/*使用 document.querySelector 获取一组符合 CSS 选择符的元素快照，类型为 NodeList（此对象是对于文档的实时运行的动态查询），对其进行遍历时可采用 forEach 方法。*/

window.addEventListener("keydown", playSound);
/*学习的笔记教程https://github.com/soyaine/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit*/