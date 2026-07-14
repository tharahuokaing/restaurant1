// Master function to handle restaurant-related navigation links
function setupRestaurantNavigation() {
    // 1. Find the target "មើលផ្លូវទៅកាន់ភោជនីយដ្ឋាន" (View Route to Restaurant) link
    const links = document.querySelectorAll('a');
    let routeLink = null;

    for (const link of links) {
        if (link.textContent.includes('មើលផ្លូវទៅកាន់ភោជនីយដ្ឋាន')) {
            routeLink = link;
            break;
        }
    }

    // Guard clause: If the primary restaurant link isn't there, we stop execution
    if (!routeLink) {
        console.error("Primary restaurant link 'មើលផ្លូវទៅកាន់ភោជនីយដ្ឋាន' not found.");
        return;
    }

    // 2. Call the helper function to inject only the Bank logo redirect link
    addBankLogoRedirect(routeLink);
}

// Helper function to construct and inject the clickable Bank logo redirect
function addBankLogoRedirect(targetElement) {
    // Create the wrapper element
    const bankNavItem = document.createElement('span'); 
    bankNavItem.className = 'flex items-center mx-2 inline-flex'; 

    // Create the anchor tag linking to the bank website
    const bankLink = document.createElement('a');
    bankLink.href = 'https://tharahuokaing.github.io/bank2/';
    bankLink.className = 'flex items-center transition-transform duration-200 hover:scale-110';
    
    // Create the bank logo image element (minimum size, no text)
    const bankImg = document.createElement('img');
    bankImg.src = 'bank.jpg'; 
    bankImg.alt = 'Bank Logo';
    bankImg.className = 'w-5 h-5 object-contain'; // Clean, compact square sizing for the logo

    // Assemble the elements
    bankLink.appendChild(bankImg);
    bankNavItem.appendChild(bankLink);

    // Insert it right after the passed restaurant element
    targetElement.parentNode.insertBefore(bankNavItem, targetElement.nextSibling);
}

// Run the master setup function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', setupRestaurantNavigation);
