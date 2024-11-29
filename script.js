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
    '1a2b3c4d': 'Luísa',
    '5e6f7a8b': 'Marisa'
  };

  // Função para remover acentos e normalizar nomes
  function normalizeName(name) {
    return name
      .toLowerCase()
      .normalize('NFD') // Decompõe os caracteres Unicode
      .replace(/[\u0300-\u036f]/g, ''); // Remove os diacríticos
  }

  // Nome para Hash
  const nameToHash = {};
  for (const [hash, name] of Object.entries(hashToName)) {
    const normalizedName = normalizeName(name);
    nameToHash[normalizedName] = hash;
  }

  // Hash para Hash (sorteio)
  const assignments = {
    '13df3cd3': '7297db81',  // Dayse -> Daniel
    '9c483934': 'd42f656d',  // João -> Gabriel
    'ec29b76d': 'c1fee031',  // Gustavo -> Flávio
    'e401c458': '5e6f7a8b',  // Daiana -> Marisa
    '7297db81': 'af5f5e0f',  // Daniel -> Socorro
    'af5f5e0f': '3bc51062',  // Socorro -> Alice
    'c1fee031': 'ec29b76d',  // Flávio -> Gustavo
    '3bc51062': '1a2b3c4d',  // Alice -> Luisa
    'd42f656d': '13df3cd3',  // Gabriel -> Dayse
    '1a2b3c4d': '9c483934',  // Luisa -> João
    '5e6f7a8b': 'e401c458'   // Marisa -> Daiana
  };

  const checkButton = document.getElementById('checkButton');
  const nameInput = document.getElementById('nameInput');
  const secretFriendParagraph = document.getElementById('secretFriend');
  const additionalContent = document.getElementById('additionalContent');
  const viewButton = document.getElementById('viewLuisaMarisaButton');
  const luisaMarisaFriendsParagraph = document.getElementById('luisaMarisaFriends');

  checkButton.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const normalizedInputName = normalizeName(name);

    // Limpa conteúdos anteriores
    secretFriendParagraph.innerText = '';
    additionalContent.style.display = 'none';
    luisaMarisaFriendsParagraph.innerText = '';

    if (normalizedInputName && nameToHash[normalizedInputName]) {
      const userHash = nameToHash[normalizedInputName];
      const assignedHash = assignments[userHash];
      const assignedName = hashToName[assignedHash];

      if (assignedName) {
        const originalName = hashToName[userHash];
        secretFriendParagraph.innerText = `Parabéns ${originalName}! Seu amigo secreto é ${assignedName}.`;

        // Verifica se o nome é Daniel (normalizado)
        const normalizedDaniel = normalizeName('Daniel');
        if (normalizedInputName === normalizedDaniel) {
          additionalContent.style.display = 'block';
        }
      } else {
        secretFriendParagraph.innerText = 'Amigo secreto não encontrado.';
      }
    } else {
      secretFriendParagraph.innerText = 'Nome não encontrado.';
    }
  });

  viewButton.addEventListener('click', function() {
    const luisaHash = nameToHash[normalizeName('Luisa')];
    const marisaHash = nameToHash[normalizeName('Marisa')];

    const luisaFriendHash = assignments[luisaHash];
    const marisaFriendHash = assignments[marisaHash];

    const luisaFriendName = hashToName[luisaFriendHash];
    const marisaFriendName = hashToName[marisaFriendHash];

    luisaMarisaFriendsParagraph.innerText = `Amigo secreto da Luisa: ${luisaFriendName}\nAmigo secreto da Marisa: ${marisaFriendName}`;
  });

  function capitalizeName(name) {
    return name.replace(/\b\w/g, c => c.toUpperCase());
  }
});
