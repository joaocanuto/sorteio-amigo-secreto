document.addEventListener("DOMContentLoaded", function() {
  const friendMap = {
    'Dayse': '13df3cd3',
    'João': '9c483934',
    'Gustavo': 'ec29b76d',
    'Daiana': 'e401c458',
    'Daniel': '7297db81',
    'Socorro': 'af5f5e0f',
    'Flávio': 'c1fee031',
    'Alice': '3bc51062'
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
