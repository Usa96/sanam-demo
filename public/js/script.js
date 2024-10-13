document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.portfolio-filter a');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            filterLinks.forEach(link => link.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

function changeLanguage(language) {
	// Change the language according to the selection
	// Example: Redirect to different URL for each language
	if (language === 'ar') {
		window.location.href = 'index_ar.html';  // Assuming you have an Arabic version of your website
	} else {
		window.location.href = 'index.html';  // Default English version
	}
}

var sidebarLinks = document.getElementsByClassName("sidebar-link");
    var widgets = document.getElementsByClassName("custom-widget");

    for (var i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].addEventListener("click", function(event) {
            event.preventDefault();

            // Remove 'active' class from all sidebar links
            for (var j = 0; j < sidebarLinks.length; j++) {
                sidebarLinks[j].classList.remove("active");
            }
            this.classList.add("active");

            // Hide all widgets
            for (var k = 0; k < widgets.length; k++) {
                widgets[k].classList.remove("active-widget");
            }

            // Show the selected widget
            var widgetId = this.getAttribute("data-widget");
            document.getElementById(widgetId).classList.add("active-widget");
        });
    }