$(document).ready(function () {
  $(".download_cv").click(function(){
    Lobibox.notify('success', {
      delay:5000,
      title: 'CV Download',
      msg: 'CV will be downloaded shortly..!'
    });
  })

  $(".social-fb").click(function(){
    Lobibox.window({
      title: 'User Details',
      horizontalOffset: 5,                //If the messagebox is larger (in width) than window's width. The messagebox's width is reduced to window width - 2 * horizontalOffset
      verticalOffset: 5,                  //If the messagebox is larger (in height) than window's height. The messagebox's height is reduced to window height - 2 * verticalOffset
      width: 550,
      height: 300,
      method: get,
      url:'http://www.amalkjose.com',
    });
  })

})
