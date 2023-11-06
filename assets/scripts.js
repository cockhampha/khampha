

var menuLinks = document.querySelectorAll("#nav a");
menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        var targetId = this.getAttribute("href");

        if (!targetId || targetId.startsWith("http")) {
            window.location.href = targetId;
            return;
        }
        if (targetId.endsWith(".html")) {
            window.location.href = targetId;
            return;
        }
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
var menuItems = document.querySelectorAll('#nav a');
var header = document.getElementById('header'); // Đảm bảo rằng bạn đã định nghĩa biến "header"
for (var i = 0; i < menuItems.length; i++) {
    (function (menuItem) {
        menuItem.onclick = function (event) {
            var isParentMenu = this.nextElementSibling;
            if (isParentMenu) {
                header.style.height = '1000px';
            } else {
                header.style.height = null;
            }
        };
    })(menuItems[i]);
}
var header = document.getElementById('header');
var menu = document.getElementById('home-menu');
menu.onclick = function () {
    var isclose = header.clientHeight === 48;
    if (isclose) {
        header.style.height = '1000px';
    } else {
        header.style.height = null;
    }
}




