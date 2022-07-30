const initialIssues = [
  {
    id: 1, status: 'New', owner: 'Ravan', effort: 5, created: new Date('2018-08-15'), due: undefined, title: 'Error in console when clicking Add'
  },
  {
    id: 2, status: 'Assigned', owner: 'Eddie', effort: 14, created: new Date('2018-08-16'), due: new Date('2018-08-30'), title: 'Missing bottom border on panel'
  },

];

class IssueFilter extends React.Component{
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    );
  }
}

function IssueRow(props) {
    const issue = props.issue;
    return (
      <tr>
        <td >{issue.id}</td>
        <td >{issue.status}</td>
        <td >{issue.owner}</td>
        <td >{issue.effort}</td>
        <td >{issue.created.toDateString()}</td>
        <td >{issue.due? issue.due.toDateString() : ''}</td>
        <td >{issue.title}</td>
        
      </tr>
    );
  
}

function IssueTable(props) {
  
    const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);

    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th >ID</th>
            <th >Status</th>
            <th >Owner</th>
            <th >Effort</th>
            <th >Created</th>
            <th >Due</th>
            <th >Title</th>
          </tr>
        </thead>
        <tbody>
          {issueRows}
        </tbody>
      </table>
    );
  
}

class IssueAdd extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value, status: 'New',
    }
    this.props.createIssue(issue);
    form.owner.value = "";
    form.title.value = "";
  }

  render() {
    return (
      <form name="issueAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="owner" placeholder="Owner" />
        <input type="test" name="title" placeholder="Title" />
        <button>Add</button>
      </form>
    );
  }
}

class IssueList extends React.Component{
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this); //bind createIssue to IssueList so arrow function in IssueAdd and anywhere else uses it
  }
  
  componentDidMount() {
  this.loadData();
}


loadData() {
  setTimeout(() => {
    this.setState({ issues: initialIssues })}, 500);
}

createIssue(issue) {
  //state variable not allowed to be set or mutated directly because 
  //React will not automatically identify such changes
  issue.id = this.state.issues.length + 1;
  issue.created = new Date();
  const newIssueList = this.state.issues.slice(); //make a copy of the issues array
  newIssueList.push(issue);
  this.setState({ issues: newIssueList });
  }

  render() {

  return (
    <React.Fragment>
      <h1>Issue Tracker</h1>
      <IssueFilter />
      <hr/>
      <IssueTable issues={this.state.issues} />
      <hr/>
      <IssueAdd createIssue={this.createIssue} />
    </React.Fragment>
  );
  }
}


const element = <IssueList/>
ReactDOM.render(element, document.getElementById("content"));