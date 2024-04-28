function move(des) {
    var home = document.querySelector('.all-content');
    var forums = document.querySelector('.forums-content');
    var faq = document.querySelector('.faq-content');

    if (des === 'home') {
        home.style.transform = 'translateX(0%)';
        forums.style.transform = 'translateX(100%)'; // 수정
        faq.style.transform = 'translateX(100%)'; // 수정
    } else if (des === 'forums') {
        home.style.transform = 'translateX(-100%)';
        forums.style.transform = 'translateX(0%)'; // 수정
        faq.style.transform = 'translateX(100%)'; // 수정
    } else if (des === 'faq') {
        home.style.transform = 'translateX(-100%)';
        forums.style.transform = 'translateX(-100%)'; // 수정
        faq.style.transform = 'translateX(0%)'; // 수정
    }
}
