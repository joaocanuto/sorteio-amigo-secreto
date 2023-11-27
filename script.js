document.addEventListener("DOMContentLoaded", function() {
  const friendMap = {
      1: 'Dayse',
      2: 'João',
      3: 'Gustavo',
      4: 'Daiana',
      5: 'Daniel',
      6: 'Socorro',
      7: 'Flávio',
      8: 'Alice'
  };

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const friendName = friendMap[id];

  if (friendName) {
      document.getElementById('secretFriend').innerText = `Parabéns! Seu amigo secreto é ${friendName}.`;
  } else {
      document.getElementById('secretFriend').innerText = 'Amigo secreto não encontrado.';
  }
});
