//n번째 행성 찾기

const findPlanet = sequence => {
  const planet = [
    '수성',
    '금성',
    '지구',
    '화성',
    '목성',
    '토성',
    '천왕성',
    '해왕성',
  ];
  console.log(planet[sequence - 1]);
};

findPlanet(1);
