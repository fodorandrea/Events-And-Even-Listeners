$('.button1').on('click', () => {
    console.log ('Yeah, you clicked me');
  });
$('.button2').on('click', () => {
    $('.button1').text('hello world');
  });
$('.button3').on('click', () => {
    $ ('button').css('background', 'yellow');
  });

