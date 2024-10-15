function toggleDropdown() {
    dropDown = document.getElementById('dropdownMenu')
    if (dropDown.classList.contains('hidden')) {
        dropDown.classList.remove('hidden')
    } else {
        dropDown.classList.add('hidden')
    }
}

window.onclick = function(event) {
    if (!event.target.matches('#dropdownButton')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('hidden')) {
                openDropdown.classList.add('hidden');
            }
        }
    }
}
