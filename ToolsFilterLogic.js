document.addEventListener('DOMContentLoaded', function() {
    const cisControlSelect = document.getElementById('cis-control');
    const difficultySelect = document.getElementById('difficulty');
    const gridItems = document.querySelectorAll('.grid-item');

    function filterGrid() {
        const selectedControl = cisControlSelect.value;
        const selectedDifficulty = difficultySelect.value;

        gridItems.forEach(item => {
            // Retrieve the item's controls and split them by comma to handle multiple values
            const itemControls = item.getAttribute('data-control').split(',');
            const itemDifficulty = item.getAttribute('data-difficulty');
            
            // Check if the selected control matches any of the item's controls
            const matchControl = selectedControl === 'all' || itemControls.includes(selectedControl);
            const matchDifficulty = selectedDifficulty === 'all' || itemDifficulty === selectedDifficulty;

            // Display the item only if it matches both control and difficulty filters
            item.style.display = matchControl && matchDifficulty ? '' : 'none';
        });
    }

    // Apply the filter whenever the selection changes
    cisControlSelect.addEventListener('change', filterGrid);
    difficultySelect.addEventListener('change', filterGrid);

    // Initial invocation to apply the filter based on the default selections
    filterGrid();
});
