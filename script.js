// 简单交互脚本：按钮点击提示 + 控制台输出
console.log("网站已加载 ✅");
const btn = document.getElementById("helloBtn");
const msg = document.getElementById("msg");
if (btn) {
  btn.addEventListener("click", () => {
    const now = new Date().toLocaleString();
    msg.textContent = "按钮被点击啦！时间：" + now;
  });
}
