// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    manOfTheMatch,

    secondInnings,
    umpires,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="latest-match-sub-container">
        <div className="sub-headings-container">
          <p className="heading">{competingTeam}</p>
          <p className="name"> {date}</p>
          <p className="name">{venue}</p>
          <p className="name">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-logo"
        />
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="latest-match-logo-large"
        />
      </div>
      <hr className="hr-line" />
      <div className="text-right">
        <p className="heading">FirstInnings</p>
        <p className="name">{firstInnings}</p>
        <p className="heading">SecondInnings</p>
        <p className="name">{secondInnings}</p>
        <p className="heading">ManOfTheMatch</p>
        <p className="name">{manOfTheMatch}</p>
        <p className="heading">umpires</p>
        <p className="name">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
