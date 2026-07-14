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

    // Guard clause: If the primary restaurant link isn't there, we can't place the bank link next to it
    if (!routeLink) {
        console.error("Primary restaurant link 'មើលផ្លូវទៅកាន់ភោជនីយដ្ឋាន' not found.");
        return;
    }

    // 2. Call the helper function to inject the Bank link right next to it
    addBankLink(routeLink);
}

// Helper function dedicated to constructing and injecting the Bank link
function addBankLink(targetElement) {
    // Create the wrapper element
    const bankNavItem = document.createElement('span'); 
    bankNavItem.className = 'flex items-center space-x-2 mx-2 inline-flex'; 

    // Create the anchor tag with blue text color
    const bankLink = document.createElement('a');
    bankLink.href = 'https://tharahuokaing.github.io/bank2/';
    bankLink.className = 'flex items-center transition-colors duration-200 font-bold text-blue-600 hover:text-blue-800';
    
    // Create the bank image/icon element
    const bankImg = document.createElement('img');
    bankImg.src = 'bank.jpg'; 
    bankImg.alt = 'Bank Icon';
    bankImg.className = 'w-4 h-4 mr-1 object-contain'; 

    // Create a span for the text
    const bankTextSpan = document.createElement('span');
    bankTextSpan.textContent = ' ធនាគារ';

    // Assemble the Bank elements
    bankLink.appendChild(bankImg);
    bankLink.appendChild(bankTextSpan);
    bankNavItem.appendChild(bankLink);

    // Insert it right after the passed restaurant element
    targetElement.parentNode.insertBefore(bankNavItem, targetElement.nextSibling);
}

// Run the master setup function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', setupRestaurantNavigation);
