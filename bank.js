// Function to add the Bank link near the "មើលផ្លូវទៅកាន់ភោជនីយដ្ឋាន" link
function addBankNavigationLink() {
    // 1. Find the "មើលផ្លូវទៅកាន់ភោជនីយដ្ឋាន" link
    const links = document.querySelectorAll('a');
    let routeLink = null;

    for (const link of links) {
        if (link.textContent.includes('មើលផ្លូវទៅកាន់ភោជនីយដ្ឋាន')) {
            routeLink = link;
            break;
        }
    }

    if (!routeLink) {
        console.error("Route link 'មើលផ្លូវទៅកាន់ភោជនីយដ្ឋាន' not found.");
        return;
    }

    // 2. Create the wrapper or element for the Bank link
    const bankNavItem = document.createElement('span'); 
    bankNavItem.className = 'flex items-center space-x-2 mx-2 inline-flex'; 

    // 3. Create the anchor tag with blue text color
    const bankLink = document.createElement('a');
    bankLink.href = 'https://tharahuokaing.github.io/bank2/';
    bankLink.className = 'flex items-center transition-colors duration-200 font-bold text-blue-600 hover:text-blue-800';
    
    // 4. Create the bank image/icon element (Revised to minimum size)
    const bankImg = document.createElement('img');
    bankImg.src = 'bank.jpg'; 
    bankImg.alt = 'Bank Icon';
    bankImg.className = 'w-4 h-4 mr-1 object-contain'; // Changed from w-5 h-5 to w-4 h-4

    // 5. Create a span for the text
    const bankTextSpan = document.createElement('span');
    bankTextSpan.textContent = ' ធនាគារ';

    // 6. Assemble the Bank elements
    bankLink.appendChild(bankImg);
    bankLink.appendChild(bankTextSpan);
    bankNavItem.appendChild(bankLink);

    // 7. Insert it right after the Route Link element
    routeLink.parentNode.insertBefore(bankNavItem, routeLink.nextSibling);
}

// Run the function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', addBankNavigationLink);
