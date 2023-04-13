calendarBody.addEventListener('click', function (e) {
  let target = e.target;
  let eachDate = document.querySelectorAll('.calendar-body > #weekly > div');
  if (e.target.innerHTML === '') return;
  for (let i = 0; i < eachDate.length; i++) {
    eachDate[i].classList.remove('active');
  }
  target.classList.add('active');
  today = new Date(today.getFullYear(), today.getMonth(), target.innerHTML);
  currentDateget();
  redrawLi();
});
