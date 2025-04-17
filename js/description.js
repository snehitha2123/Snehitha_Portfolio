 // Function to toggle the display of more content
 function toggleContent(buttonId, contentId) {
    var moreContent = document.getElementById(contentId);
    var btn = document.getElementById(buttonId);

    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        btn.textContent = 'Show Less';
    } else {
        moreContent.style.display = 'none';
        btn.textContent = '...show more';
    }
}

// Event listeners for the "Show More" buttons
document.getElementById('show-more-btn').addEventListener('click', function() {
    toggleContent('show-more-btn', 'more-content');
});

document.getElementById('show-more-btn-deeplearning').addEventListener('click', function() {
    toggleContent('show-more-btn-deeplearning', 'more-content-deeplearning');
});

document.getElementById('show-more-btn-chatbot').addEventListener('click', function() {
    toggleContent('show-more-btn-chatbot', 'more-content-chatbot');
});