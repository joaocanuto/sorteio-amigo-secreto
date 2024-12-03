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
    '1a2b3c4d': 'Maria Luísa',
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
    '13df3cd3': '1a2b3c4d',  
    '9c483934': 'ec29b76d',  
    'ec29b76d': '13df3cd3',  
    'e401c458': '3bc51062',  
    '7297db81': 'c1fee031',  
    'af5f5e0f': '5e6f7a8b',  
    'c1fee031': 'e401c458',  
    '3bc51062': '7297db81',  
    'd42f656d': 'af5f5e0f',  
    '1a2b3c4d': 'd42f656d',  
    '5e6f7a8b': '9c483934'   
};

  const checkButton = document.getElementById('checkButton');
  const nameInput = document.getElementById('nameInput');
  const secretFriendParagraph = document.getElementById('secretFriend');
  const additionalContent = document.getElementById('additionalContent');
  const viewButton = document.getElementById('viewLuizaMarisaButton');
  const luizaMarisaFriendsParagraph = document.getElementById('luizaMarisaFriends');

  checkButton.addEventListener('click', function() {
    const name = nameInput.value.trim();
    // Teste aqi
    const normalizedInputName = normalizeName(name);
    // Teste aqi
    // Limpa conteúdos anteriores
    secretFriendParagraph.innerText = '';
    additionalContent.style.display = 'none';
    luizaMarisaFriendsParagraph.innerText = '';

    if (normalizedInputName && nameToHash[normalizedInputName]) {
      const userHash = nameToHash[normalizedInputName];
      const assignedHash = assignments[userHash];
      const assignedName = hashToName[assignedHash];

      if (assignedName) {
        const originalName = hashToName[userHash];
        if(originalName === "Gustavo"){
          secretFriendParagraph.innerText = `Parabéns ${originalName}! Seu amigo secreto é ${assignedName}.`;

        }

        // Verifica se o nome é Daniel (normalizado)
        const normalizedDaniel = normalizeName('Daniel');
        if (normalizedInputName === normalizedDaniel) {
          // additionalContent.style.display = 'block';
        }
      } else {
        secretFriendParagraph.innerText = 'Amigo secreto não encontrado.';
      }
    } else {
      secretFriendParagraph.innerText = 'Nome não encontrado.';
    }
  });
  // Teste aqi
  viewButton.addEventListener('click', function() {
    const luizaHash = nameToHash[normalizeName('Maria Luisa')]; // Teste aqi
    const marisaHash = nameToHash[normalizeName('Marisa')];

    const luizaFriendHash = assignments[luizaHash];
    const marisaFriendHash = assignments[marisaHash];

    const luizaFriendName = hashToName[luizaFriendHash];
    const marisaFriendName = hashToName[marisaFriendHash];

    // luizaMarisaFriendsParagraph.innerText = `Amigo secreto da Maria Luísa: ${luizaFriendName}\nAmigo secreto da Marisa: ${marisaFriendName}`;
  });

  function capitalizeName(name) {
    return name.replace(/\b\w/g, c => c.toUpperCase());
  }
});

// Rebuild do projeto 