const myDivs = document.querySelectorAll('.section_second');

myDivs.forEach(div => {
  div.addEventListener('mouseleave', function() {
    div.style.backgroundColor = 'blue'; // 호버가 끝나면 다시 파란색으로 변경
  });
});
