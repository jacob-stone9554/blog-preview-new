//script file to add interactivity to the share button

//add a listener to the share button
document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.querySelector('.share-btn');
    const shareMenu = document.querySelector('.share-menu');

    //show/hide the menu on click
    shareButton.addEventListener('click', () => {
        shareMenu.style.display = shareMenu.style.display === 'none' || shareMenu.style.display === '' ? 'block' : 'none';
    });

    //hide the menu when the target is not the share button
    document.addEventListener('click', (event) => {
        if(!shareButton.contains(event.target) && !shareMenu.contains(event.target)) {
            shareMenu.style.display = 'none';
        }
    })
    
});