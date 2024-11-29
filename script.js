document.addEventListener("DOMContentLoaded", function() {
  // Hash para Nome
  const hashToName = {
    '13df3cd3': 'Dayse',
    '9c483934': 'João',
    'ec29b76d': 'Gustavo',
    'e401c458': 'Daiana',
    '7297db81': 'Daniel',
    'af5f5e0f': 'Socorro',
    'c1fee031': 'Flávio',
    '3bc51062': 'Alice',
    'd42f656d': 'Gabriel',
    '1a2b3c4d': 'Luiza',
    '5e6f7a8b': 'Marisa'
  };

  // Nome para Hash
  const nameToHash = {};
  for (const [hash, name] of Object.entries(hashToName)) {
    nameToHash[name.toLowerCase()] = hash;
  }

  // Hash para Hash (sorteio)
  const assignments = {
    '13df3cd3': '7297db81',
    '9c483934': 'd42f656d',
    'ec29b76d': 'c1fee031',
    'e401c458': '5e6f7a8b',
    '7297db81': 'af5f5e0f',
    'af5f5e0f': '3bc51062',
    'c1fee031': 'ec29b76d',
    '3bc51062': '1a2b3c4d',
    'd42f656d': '13df3cd3',
    '1a2b3c4d': '9c483934',
    '5e6f7a8b': 'e401c458'
  };

  const checkButton = document.getElementById('checkButton');
  const nameInput = document.getElementById('nameInput');
  const secretFriendParagraph = document.getElementById('secretFriend');

  checkButton.addEventListener('click', function() {
    const name = nameInput.value.trim().toLowerCase();

    if (name && nameToHash[name]) {
      const userHash = nameToHash[name];
      const assignedHash = assignments[userHash];
      const assignedName = hashToName[assignedHash];

      if (assignedName) {
        secretFriendParagraph.innerText = `Parabéns ${capitalizeName(name)}! Seu amigo secreto é ${assignedName}.`;
      } else {
        secretFriendParagraph.innerText = 'Amigo secreto não encontrado.';
      }
    } else {
      secretFriendParagraph.innerText = 'Nome não encontrado.';
    }
  });

  function capitalizeName(name) {
    return name.replace(/\b\w/g, c => c.toUpperCase());
  }
});
