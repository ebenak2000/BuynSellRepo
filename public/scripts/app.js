$(document).ready(function() {
  console.log("hello1");
  $.get('/api/widgets/featured', function(data) {
    console.log(data);  
    data.featuredItems.forEach(item => {
        $('#featured-items').append(`<div>${item.title} - ${item.description}</div>`);
      });
    });
  }); 
  //* $('.modal').modal();
  console.log("hello2");
  $('.message-admin-btn').click(function(){
    console.log("hello5");
      const itemId = this.id;
      console.log($(this));
      console.log('item-id', itemId);
      $('#sendMessageBtn').data('item-id', itemId);
     //* $('#messageModal').modal('open');
     $('#messageModal').addClass("modal-show")
     console.log($('#messageModal'))
      modal.style.display = "block";
     //* $('#messageModal').modal({
      // *  show: 'false'
    //*});
  });
  console.log("hello3");
  $('#sendMessageBtn').click(function(){
    console.log("hello")
    const itemId = $('#sendMessageBtn').data('item-id');
    const message = $('#messageContent').val();
    console.log("hello1")
    // fetch('/api/messages', {
    //   method: "POST",
    //   body: JSON.stringify({
    //     senderId: 'SENDER_USER_ID',
    //     receiverId: 'ADMIN_USER_ID',
    //     itemId: itemId,
    //     content: message
    //   })
    

    // });
    console.log("hello2")
  $('#messageModal').removeClass("modal-show")
      $.post('/api/messages', {
          senderId: 1,
          receiverId: 1,
          itemId: itemId,
          content: message
      })
      // ,function(response) {
      //     alert('Message sent!');
      //     $('#messageModal').modal('close');
      //     $('#messageContent').val('');
      // }).fail(function() {
      //     alert('Failed to send message.');
  //*});
});