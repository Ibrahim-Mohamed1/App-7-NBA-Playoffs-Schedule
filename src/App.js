import React, { Component } from 'react';
import { withData } from './DataProvider';

class App extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const mappedData = this.props.data && this.props.data.map(data => {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
  
      if (dd < 10) {
        dd = '0' + dd
      }
  
      if (mm < 10) {
        mm = '0' + mm
      }
  
      today = yyyy + '-' + mm + '-' + dd;
      let todayy = today + 'T00:00:00.000Z'

      var tomorrow = new Date();
      var td = tomorrow.getDate () + 1;
      var tm = tomorrow.getMonth() + 1; //January is 0!
      var ty = tomorrow.getFullYear();

      if (td < 10) {
        td = '0' + td
      }
  
      if (tm < 10) {
        tm = '0' + tm
      }
      tomorrow = ty + '-' + tm + '-' + td;
      let tomorroww = tomorrow + 'T00:00:00.000Z'
      return (
        <div style={{ border: "solid gray", width: 300, height: 144, display: "inline-block", color: "white", marginBottom: 10, marginLeft: 5 }} key={data.id}>
          <h4 style={{ display: "inline-block", margin: 0, paddingTop: 25, }}>{data.home_team ? data.visitor_team.name : null}</h4>
          <span style={{ float: "right", paddingRight: 30, paddingTop: 45 }}>{data.status}</span>
          <span style={{ float: "right", paddingRight: 30, paddingTop: 25 }}>{data.visitor_team_score}</span>
          <br />
          <h4 style={{ display: "inline-block", margin: 0, paddingTop: 25,  }}>{data.home_team ? data.home_team.name : null}</h4>
          <span style={{ float: "right", paddingRight: 30, paddingTop: 25 }}>{data.home_team_score}</span>
          <h4>{data.date && data.date === todayy ? "Today" : data.date && data.date === tomorroww ? "Tomorrow" : "Coming Soon"}</h4>
        </div>
      )
    })
    return (
      <div style={{ display: "block", margin: "auto", padding: 20, textAlign:"center" }}>
        <img style={{float: 'left', width: 25}} src="https://theundefeated.com/wp-content/uploads/2017/05/nba-logo.png" alt=""/>
        <h1><span style={{color: "red"}}>NBA</span> <span style={{color: "white"}}>Playoffs</span> <span style={{color: "blue"}}>Schedule</span></h1>
        {mappedData}
      </div>
    );
  }
}

export default withData(App);