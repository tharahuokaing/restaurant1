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

    // Inject required CSS styles dynamically
    injectBankNavigationStyles();

    // Call the minimal helper to insert only the logo link
    addBankLogoLink(routeLink);
}

// Function to inject dedicated CSS styles for the bank link and icon
function injectBankNavigationStyles() {
    const styleId = 'bank-navigation-styles';
    // Prevent duplicate style injections if the function runs multiple times
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        .bank-logo-link {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            display: inline-flex;
            align-items: center;
            transition: transform 0.2s ease-in-out;
        }
        .bank-logo-link:hover {
            transform: scale(1.1);
        }
        .bank-logo-img {
            width: 1rem;
            height: 1rem;
            object-fit: contain;
        }
    `;
    document.head.appendChild(style);
}

// Minimal helper to inject only the bank logo/icon linking to Bank 2
function addBankLogoLink(targetElement) {
    const bankLink = document.createElement('a');
    bankLink.href = 'https://tharahuokaing.github.io/bank2/';
    // Swapped Tailwind utility classes for the new custom CSS classes
    bankLink.className = 'bank-logo-link';
    
    const bankImg = document.createElement('img');
    bankImg.src = 'bank.jpg'; 
    bankImg.alt = 'Bank';
    bankImg.className = 'bank-logo-img'; 

    bankLink.appendChild(bankImg);

    // Insert the clickable logo right after the restaurant location link
    targetElement.parentNode.insertBefore(bankLink, targetElement.nextSibling);
}

// Run the setup function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', setupRestaurantNavigation);
