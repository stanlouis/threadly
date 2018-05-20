$ (function () {
  $ ('form').submit (e => {
    let $input = $ (e.target).find ('input');
    let comment = $input.val ();

    if (comment !== '') {
      let html = $ ('<li>').text (comment);
      html.prependTo ('#comments');
      $input.val ('');
    }
    return false;
  });
});
