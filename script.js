const images = [
    'https://estliving.com/wp-content/uploads/2022/04/est-Living_Luxury-Linen_Bespoke-Bedlinen_17-750x540.jpg',
    'https://www.peanutextile.com/wp-content/uploads/2020/04/hotel-bath-sheet-3.jpg',
    'https://www.manchesterfactory.com.au/cdn/shop/articles/BATHROBE_COVER_800x.png?v=1674787766',
    'https://i5.walmartimages.com/seo/Comfort-Canopy-4-Piece-Green-Mist-300-Thread-Count-Cotton-Bed-Sheets-for-Full-Size-Bedding_8f1c96d8-10a6-4115-9058-0e9745c5166a.56f06a96e7b4ebfc4204ed41667048f7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
];

let currentIndex = 0; // Keeps track of the current image index

// Function to change images
function changeImage(direction) {
    // Update the index based on direction
    currentIndex += direction;
    
    // Check if the index is out of bounds, and adjust accordingly
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop to the last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Loop back to the first image
    }

    // Update the displayed image
    const imgElement = document.getElementById('gallery-image');
    imgElement.src = images[currentIndex];
}
