var btn = document.querySelector('#key');
btn.addEventListener('click', function (e) {
    var body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', '<div>chris</div>');
});
