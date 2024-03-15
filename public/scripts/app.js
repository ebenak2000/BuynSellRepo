$(document).ready(function() {
    $.get('/api/widgets/featured', function(data) {
      data.featuredItems.forEach(item => {
        $('#featured-items').append(`<div>${item.title} - ${item.description}</div>`);
      });
    });
  });