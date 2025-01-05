// Utility function to scroll to a specific container
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
}

// Scroll to hero image container when specific elements are clicked
function setupScrollEvents() {
    const scrollTriggers = [
        { selector: "#logoContainer", target: "[data-scroll-to='heroImageContainer']" },
        { selector: "#homeText", target: "[data-scroll-to='heroImageContainer']" },
        { selector: "#iMAGE", target: "[data-scroll-to='homeHeroImage']" },
        { selector: "#logoFooterDiv", target: "[data-scroll-to='homeHeroImage']" }
    ];

    scrollTriggers.forEach(({ selector, target }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener("click", () => scrollToElement(target));
        }
    });
}

// Navigation functionality
function setupNavigationEvents() {
    const navigationLinks = [
        { selector: "#buyerText", url: "BUYERPAGE1200pxABCHOME.html" },
        { selector: ".buy-property-button", url: "listings.html" },
        { selector: "#navLogoContainer", url: "index.html" },
        { selector: "#logoFooterWrapper", url: "index.html" }
    ];

    navigationLinks.forEach(({ selector, url }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener("click", () => {
                window.location.href = url;
            });
        }
    });
}

// Tab functionality
function setupTabEvents() {
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', function () {
            // Handle active/inactive classes for buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('tab-active');
                btn.classList.add('tab-inactive');
            });
            this.classList.remove('tab-inactive');
            this.classList.add('tab-active');

            // Show/Hide the corresponding content
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.seller-varient-wrapper').forEach(wrapper => {
                if (wrapper.id === tabId) {
                    wrapper.classList.add('active');
                } else {
                    wrapper.classList.remove('active');
                }
            });
        });
    });
}

// Initialize all event handlers
function initializeEventHandlers() {
    setupScrollEvents();
    setupNavigationEvents();
    setupTabEvents();
}

// Call the initialization function
initializeEventHandlers();
function openSeller(evt, Seller) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Seller).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.style.backgroundColor = "tab button.active";
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Simulate a click on the default active tab
    const defaultTab = document.querySelector(".tablinks.active");
    if (defaultTab) {
        defaultTab.click();
    }
});
