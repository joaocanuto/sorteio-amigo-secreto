document.addEventListener("DOMContentLoaded", function() {
  const friendMap = {
    '13df3cd3': 'Dayse',
    '9c483934': 'João',
    'ec29b76d': 'Gustavo',
    'e401c458': 'Daiana',
    '7297db81': 'Daniel',
    'af5f5e0f': 'Socorro',
    'c1fee031': 'Flávio',
    '3bc51062': 'Alice',
    'd42f656d': 'Gabriel'
};

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id').toString();
  const friendName = friendMap[id];
  console.log(friendName);

  if (friendName) {
      document.getElementById('secretFriend').innerText = `Parabéns! Seu amigo secreto é ${friendName}.`;
  } else {
      document.getElementById('secretFriend').innerText = 'Amigo secreto não encontrado.';
  }
});
