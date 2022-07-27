const drugType = (data) => {
  switch (data) {
    case 1:
      data = 'princeps';
      break;
    case 2:
      data = 'Generique';
      break;
    case 3:
      data = 'Biologique';
      break;
    case 4:
      data = 'Homeopathie';
      break;
    default:
      data =
        ' Type non reconnue, nous allons faire le necessaire pour le rajouter rapidement';
  }
  return data;
};
export default drugType;
