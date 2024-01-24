// Assuming your mission data is stored in a variable named missions

const countRocketsByYear = (missions) => {
  const rocketsCountByYear = {};

  missions.forEach((mission) => {
    const year = new Date(mission.date).getFullYear();

    if (rocketsCountByYear[year]) {
      rocketsCountByYear[year]++;
    } else {
      rocketsCountByYear[year] = 1;
    }
  });

  return rocketsCountByYear;
};

export { countRocketsByYear };
