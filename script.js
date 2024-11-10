function searchCrops() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cropItems = document.getElementsByClassName('crop-item');

    Array.from(cropItems).forEach((item) => {
        let cropName = item.getAttribute('data-name').toLowerCase();
        if (cropName.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}