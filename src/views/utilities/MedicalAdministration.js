const MedicalAdministration = (data) => {
  switch (data) {
    case 1:
      data = 'Orale';
      break;
    case 2:
      data = 'Locale';
      break;
    case 3:
      data = 'Nasale';
      break;
    case 4:
      data = 'Oculaire';
      break;
    case 5:
      data = 'Auriculaire';
      break;
    case 6:
      data = 'Rectale';
      break;
    case 7:
      data = 'Vaginale';
      break;
    case 8:
      data = 'Injectable';
      break;
    case 9:
      data = 'Inhalée';
      break;
    default:
      data =
        'Administration non reconnue, nous allons faire le necessaire pour le rajouter';
  }
  return data;
};

export default MedicalAdministration;
