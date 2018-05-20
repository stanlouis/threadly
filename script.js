$ (function () {
  function loadPosts () {
    let tasks = JSON.parse (localStorage.getItem ('comments'));
    if (tasks !== null) {
      tasks.forEach (comment => {
        let item = $ ('<li>').text (comment);
        item.prependTo ('#comments');
      });
    }
  }
  loadPosts ();
  
  $ ('form').submit (e => {
    let $input = $ (e.target).find ('input');
    let comment = $input.val ();
    $input.val ('');

    let comments;

    if (localStorage.getItem ('comments') === null) {
      // if local storage is empty set comments to empty array
      comments = [];
    } else {
      comments = JSON.parse (localStorage.getItem ('comments'));
    }
    if (comment !== '') {
      comments.push (comment);
    }

    // Store the comments into localStorage using "localStorage.setItem"
    localStorage.setItem ('comments', JSON.stringify (comments));
    //remove all li(s) to prevent duplicate
    $ ('#comments li').remove ();
    loadPosts ();
    e.preventDefault ();
  });

  $ ('#delete-all').on ('click', () => {
    localStorage.clear ();
    $ ('#comments li').remove ();
  });
});
