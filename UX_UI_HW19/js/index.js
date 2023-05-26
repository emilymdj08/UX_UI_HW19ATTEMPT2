const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#3da000';
    button.style.color = '#FFFFFF';
  });
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#373738';
    button.style.color = '#FFFFFF';
  });
});

