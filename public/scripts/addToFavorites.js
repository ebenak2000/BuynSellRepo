$(document).ready(function() {
  // Add event listener to all buttons with class 'add-to-favorites-btn'
  $('.add-to-favorites-btn').on('click', function() {
    // Retrieve itemID from the data attribute
    const itemId = $(this).data('item-id');

    // Check if itemId is defined and not empty
    if (itemId === undefined || itemId === '') {
      console.error('Item ID is undefined or empty:', itemId);

      return;
    }

    // Check if itemId is a valid integer
    if (!Number.isInteger(itemId)) {
      console.error('Invalid itemId:', itemId);

      return;
    }

    // Make an AJAX POST request to the server-side endpoint
    $.ajax({
      url: '/add-to-favorites',
      method: 'POST',
      data: { itemId: itemId }, // Send item ID as data
      success: function(response) {
        console.log(response); // Log success message

      },
      error: function(xhr, status, error) {
        console.error(error); // Log error message
        // Optionally, display an error message to the user
      }
    });
  });
});
