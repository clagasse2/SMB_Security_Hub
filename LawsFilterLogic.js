document.addEventListener('DOMContentLoaded', function() {
    const stateCheckboxes = document.querySelectorAll('input[name="state"]');
    const phiRadios = document.querySelectorAll('input[name="phi"]');
    
    function filterItems() {
        const selectedStates = Array.from(stateCheckboxes)
                                    .filter(checkbox => checkbox.checked)
                                    .map(checkbox => checkbox.value);
        const selectedPhi = Array.from(phiRadios)
                                 .find(radio => radio.checked).value;
        
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            const itemState = item.getAttribute('data-state');
            const itemPhi = item.getAttribute('data-phi') || 'all'; // Treat missing data-phi as 'all'
            const isFederal = itemState === 'Federal';
            
            // Determine if the item should be shown
            const showByState = selectedStates.length === 0 || selectedStates.includes(itemState) || isFederal;
            const showByPhi = selectedPhi === 'all' || itemPhi === selectedPhi || itemPhi === 'all';
            
            item.style.display = (showByState && showByPhi) ? '' : 'none';
        });
    }
    
    stateCheckboxes.forEach(checkbox => checkbox.addEventListener('change', filterItems));
    phiRadios.forEach(radio => radio.addEventListener('change', filterItems));
    
    // Apply filter on initial load to show all items
    filterItems();
});


document.addEventListener('DOMContentLoaded', function() {
    var disclaimerAccepted = localStorage.getItem('disclaimerAccepted');
    var disclaimerPopup = document.getElementById('disclaimerPopup');

    // Show the disclaimer popup if not accepted yet
    if (!disclaimerAccepted) {
        disclaimerPopup.style.display = 'block';
    }

    // When the user clicks on "Accept", hide the popup and remember the choice
    document.getElementById('acceptDisclaimer').addEventListener('click', function() {
        disclaimerPopup.style.display = 'none';
        localStorage.setItem('disclaimerAccepted', 'true');
    });
});
