// Function to add the Bank link to the navigation bar
function addBankNavigationLink() {
    // 1. Find the navigation container
    const navContainer = document.querySelector('nav ul') || document.querySelector('nav');
    
    if (!navContainer) {
        console.error("Navigation container not found.");
        return;
    }

    // 2. Create the new list item element for the Bank link
    const bankNavItem = document.createElement('li');
    bankNavItem.className = 'flex items-center space-x-2 mx-2'; 

    // 3. Create the anchor tag with blue text color
    const bankLink = document.createElement('a');
    bankLink.href = 'https://tharahuokaing.github.io/bank1/';
    bankLink.className = 'flex items-center transition-colors duration-200 font-bold text-blue-600 hover:text-blue-800';
    
    // 4. Create the bank image/icon element
    const bankImg = document.createElement('img');
    bankImg.src = 'bank.jpg'; 
    bankImg.alt = 'Bank Icon';
    bankImg.className = 'w-5 h-5 mr-1 object-contain'; 

    // 5. Create a span for the text
    const bankTextSpan = document.createElement('span');
    bankTextSpan.textContent = ' ធនាគារ';

    // 6. Assemble the elements
    bankLink.appendChild(bankImg);
    bankLink.appendChild(bankTextSpan);
    bankNavItem.appendChild(bankLink);

    // 7. Insert it near "ទំព័រដើម"
    if (navContainer.firstChild) {
        navContainer.insertBefore(bankNavItem, navContainer.firstChild.nextSibling);
    } else {
        navContainer.appendChild(bankNavItem);
    }
}

// Run the function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', addBankNavigationLink);
