document.getElementById('addPageBtn').addEventListener('click', function() {
    const scrapbook = document.querySelector('.scrapbook');

    // Create new scrapbook page
    const newPage = document.createElement('div');
    newPage.className = 'scrapbook-page';

    // Add content for the new page
    const newTitle = prompt('Enter a title for the new page:');
    const newText = prompt('Enter a description for the new page:');
    const newPhotoURL = prompt('Enter the URL of the photo for the new page:');

    newPage.innerHTML = `
        <h2>${newTitle}</h2>
        <img src="${newPhotoURL}" alt="${newTitle}" class="scrapbook-photo">
        <p>${newText}</p>
    `;

    scrapbook.appendChild(newPage);
});
