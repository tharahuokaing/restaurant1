// Master function to handle restaurant-related navigation links
function setupRestaurantNavigation() {
    const links = document.querySelectorAll('a');
    let routeLink = null;

    for (const link of links) {
        if (link.textContent.includes('មើលផ្លូវទៅកាន់ភោជនីយដ្ឋាន')) {
            routeLink = link;
            break;
        }
    }

    if (!routeLink) {
        console.error("Primary restaurant link 'មើលផ្លូវទៅកាន់ភោជនីយដ្ឋាន' not found.");
        return;
    }

    // Call the minimal helper to insert only the logo link
    addBankLogoLink(routeLink);
}

// Minimal helper to inject only the bank logo/icon linking to Bank 2
function addBankLogoLink(targetElement) {
    const bankLink = document.createElement('a');
    bankLink.href = 'https://tharahuokaing.github.io/bank2/';
    bankLink.className = 'mx-2 inline-flex items-center transition-transform duration-200 hover:scale-110';
    
    const bankImg = document.createElement('img');
    bankImg.src = 'bank.jpg'; 
    bankImg.alt = 'Bank';
    bankImg.className = 'w-4 h-4 object-contain'; // Small, clean icon sizing

    bankLink.appendChild(bankImg);

    // Insert the clickable logo right after the restaurant location link
    targetElement.parentNode.insertBefore(bankLink, targetElement.nextSibling);
}

// Run the setup function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', setupRestaurantNavigation);
