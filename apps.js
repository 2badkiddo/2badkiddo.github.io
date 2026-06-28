window.addEventListener('load', function() {
    var section = document.querySelector('.projects');
    if (section) {
        var top = section.offsetTop - window.innerHeight / 2 + section.clientHeight / 2;
        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    }
});
