import Team from "./Team";
import schedule from "../eaglesSchedule.json";

export const Schedule = () => {
  const PHILLY = "Philadelphia Eagles";
  // console.log(schedule);
  const conferenceBooleans = [
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
  ];

  /***** WITH MAP *****/

  // const scheduleWithConferences = schedule.map((e, i) => {
  //   // let eaglesScore;
  //   // let otherScore;

  //   // if (e.HomeTeam === PHILLY) {
  //   //   otherScore = e.AwayTeamScore;
  //   //   eaglesScore = e.HomeTeamScore;
  //   // } else {
  //   //   otherScore = e.HomeTeamScore;
  //   //   eaglesScore = e.AwayTeamScore;
  //   // }

  //   return {
  //     ...e,
  //     Eagles: eaglesScore,
  //     NFC: conferenceBooleans[i] ? otherScore : null,
  //     AFC: conferenceBooleans[i] ? null : otherScore,
  //   };
  // });

  // console.log(scheduleWithConferences);

  /***** WITH FOR LOOP *****/

  const scheduleWithConferences = [];

  for (let i = 0; i < schedule.length; i++) {
    const e = schedule[i];
    let eaglesScore;
    let otherScore;

    if (e.HomeTeam === PHILLY) {
      otherScore = e.AwayTeamScore;
      eaglesScore = e.HomeTeamScore;
    } else {
      otherScore = e.HomeTeamScore;
      eaglesScore = e.AwayTeamScore;
    }

    scheduleWithConferences.push({
      ...e,
      Eagles: eaglesScore,
      NFC: conferenceBooleans[i] ? otherScore : 0,
      AFC: conferenceBooleans[i] ? 0 : otherScore,
    });
  }

  console.log(scheduleWithConferences);

  const eaglesSeasonScoreTotal = scheduleWithConferences.reduce((a, c) => {
    return a + c.Eagles;
  }, 0);

  const otherSeasonScoreTotal = scheduleWithConferences.reduce((a, c) => {
    return a + c.AFC + c.NFC;
  }, 0);

  console.log(eaglesSeasonScoreTotal);
  console.log(otherSeasonScoreTotal);

  return schedule.map((e) => {
    return (
      <div className="teams-display">
        <Team teamName={e.AwayTeam} />
        <Team teamName={e.HomeTeam} isHome />
      </div>
    );
  });
};

export default Schedule;

/* 
  TERNARY EXAMPLE 
  
  // const eaglesScore =
  //   e.HomeTeam === PHILLY ? e.HomeTeamScore : e.AwayTeamScore;

  // const otherScore =
  //   e.HomeTeam === PHILLY ? e.AwayTeamScore : e.HomeTeamScore;
*/

/* NESTED FOR-LOOP */

// let PBL2023 = ["Mahomes", "Vick", "Allen", "Hurts"];
// let bothYears = [];

// for (let i = 0; i < PBL2022.length; i++) {
//   for (let j = 0; j < PBL2023.length; j++) {
//     let year1 = PBL2022[i];
//     let year2 = PBL2023[j];

//     if (year1 === year2) {
//       bothYears.push(year1);
//     }
//   }
// }

// bothYears(2)[("Mahomes", "Hurts")];
