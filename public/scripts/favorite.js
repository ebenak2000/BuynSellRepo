/* $(document).ready(() => {
  $('#fetch-favorites').on('click', () => {
    const userID = 1; // Replace with the actual user ID or fetch it dynamically from your application
    $.ajax({
      method: 'GET',
      url: `/favorite?userID=${userID}`
    })
    .done((response) => {
      const $favoritesList = $('#favorites');
      $favoritesList.empty();

      for (const favorite of response.favorites) {
        $('<li>').text(`${favorite.title}: ${favorite.description}`).appendTo($favoritesList);
      }
    })
    .fail((xhr, status, error) => {
      console.error('Error fetching favorites:', error);
    });
  });
});
 */
