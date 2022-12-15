import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {details: {}, isLoading: true, bgColor: ''}

  componentDidMount() {
    this.getTeamMatches()
  }

  FormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: this.FormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(each => this.FormattedData(each)),
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({details: updatedData, bgColor: id, isLoading: false})
  }

  render() {
    const {details, isLoading, bgColor} = this.state
    const {teamBannerUrl, recentMatches, latestMatchDetails} = details
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`bg ${bgColor}`}>
            <div className="matches-container">
              <img
                src={teamBannerUrl}
                alt="team banner"
                className="banner-image"
              />
              <h1 className="matches-heading">Latest Matches</h1>
              <LatestMatch
                latestMatchDetails={latestMatchDetails}
                key={latestMatchDetails.competingTeam}
              />
              <ul className="match-cards-lists-container">
                {recentMatches.map(eachMatch => (
                  <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
