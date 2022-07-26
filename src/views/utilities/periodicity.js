const periodicity = (data) => {
  switch (data) {
    case 1:
      data = ' journalier';
      break;
    case 2:
      data = 'hebdomadaire';
      break;
    case 3:
      data = 'mensuel';
      break;
    case 4:
      data = 'bimestrielle';
      break;
    case 5:
      data = 'trimestrielle';
      break;
    case 6:
      data = 'semestrielle';
      break;
    case 7:
      data = 'annuelle';
      break;
    case 8:
      data = 'indéterminée';
      break;
    default:
      data = 'personnalisé';
  }
  return data;
};

export default periodicity;
