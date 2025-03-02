const todayDate = new Date();
const formatDate = todayDate.toDateString();

document.getElementById('currentDay').innerHTML = formatDate;

document.getElementById('goToBlog').addEventListener('click', function() {
    window.location.href = 'blog.html'; 
  });
  