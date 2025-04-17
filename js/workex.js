document.addEventListener("DOMContentLoaded", function () {
    const tabItems = document.querySelectorAll(".tab-item");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabItems.forEach(item => {
        item.addEventListener("click", function () {
            const target = this.getAttribute("data-tab");

            // Remove active class from all tab items and panes
            tabItems.forEach(item => item.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            // Add active class to clicked tab and corresponding pane
            this.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
});
