// class HelloWorld extends React.Component {

//   render() {
//     const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
//     const helloContinents = Array.from(continents, c => `Hello ${c}!`);
//     const message = helloContinents.join(' ');
    
//     return (
//       <div title="Outer div">
//         <div title="First inner div">
//         <h1>{message}</h1>
//         </div>
//         <div title="Second inner div">Hey What's Up</div>
//       </div>
//     );
//   }
// }


class IssueFilter extends React.Component{
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    );
  }
}

class IssueRow extends React.Component{
  render() {
    const style = this.props.rowStyle;
    return (
      <tr>
        <td style={style}>{this.props.issue_id}</td>
        <td style={style}>{this.props.issue_title}</td>
      </tr>
    );
  }
}

class IssueTable extends React.Component{
  render() {
    const rowStyle = { border: "1px solid silver", padding: 4 };
    return (
      <table style={{ borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <IssueRow rowStyle={rowStyle} issue_id={1} issue_title="Error in console when cllicking Add" /> {/*somehow pass Issue 1 data to this */}
          <IssueRow rowStyle={rowStyle} issue_id={2} issue_title="Missing bottom border on panel" /> {/*somehow pass Issue 2 data to this */}
        </tbody>
      </table>
    );
  }
}

class IssueAdd extends React.Component{
  render() {
    return (
      <div>This is a placeholder for a form to add an issue.</div>
    );
  }
}

class IssueList extends React.Component{
  render(){
  return (
    <React.Fragment>
      <h1>Issue Tracker</h1>
      <IssueFilter />
      <hr/>
      <IssueTable />
      <hr/>
      <IssueAdd/>
    </React.Fragment>
  );
  }
}


const element = <IssueList/>
ReactDOM.render(element, document.getElementById("content"));