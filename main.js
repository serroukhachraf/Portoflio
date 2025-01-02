$(document).ready(function () {
    // Open mobile menu
    $('#menu-toggle').click(function () {
        $('#mobile-menu').removeClass('hidden').fadeIn(); // Show mobile menu
        $('#menu-toggle').addClass('hidden'); // Hide hamburger button
    });

    // Close mobile menu
    $('#close-menu').click(function () {
        $('#mobile-menu').fadeOut(function () {
            $(this).addClass('hidden'); // Hide mobile menu
            $('#menu-toggle').removeClass('hidden'); // Show hamburger button
        });
    });
});;

$(document).ready(function () {
const text = "Hello 💻 I'm ACHRAF SERROUKH"; // Text to be typed out
let index = 0;
let isDeleting = false; // Flag to check whether we're deleting text

function typeAndEraseText() {
    if (!isDeleting) {
        // Typing effect
        if (index < text.length) {
            $('#typed-text').append(text.charAt(index));
            index++;
            setTimeout(typeAndEraseText, 100); // Adjust delay for typing speed
        } else {
            isDeleting = true; // Start erasing after typing is done
            setTimeout(typeAndEraseText, 1000); // Pause before erasing
        }
    } else {
        // Erasing effect
        if (index > 0) {
            $('#typed-text').text($('#typed-text').text().slice(0, -1)); // Remove one letter at a time
            index--;
            setTimeout(typeAndEraseText, 50); // Adjust delay for erasing speed
        } else {
            isDeleting = false; // Start typing again
            setTimeout(typeAndEraseText, 500); // Pause before typing starts again
        }
    }
}

typeAndEraseText(); // Start the infinite typing and erasing when the page loads
});