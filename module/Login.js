import React, { Component } from 'react';
import { AutoComplete, Paper, Avatar, TextField, RaisedButton } from 'material-ui';
import Person from 'material-ui/svg-icons/Social/Person'

const styles = {
  backdrop:{
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  main: {
    flexDirection: 'column',
    width: 354,
    margin: 10,
    textAlign:'center',
  },
  paper: {
    flex:1,
    height: 400,
    maxWidth: 354,
    padding: 40,
    textAlign: 'center',
    backgroundColor:'#f7f7f7',
  }
};
export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      userName: '',
      password: '',
    };
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        value,
        value,
      ],
      userName:value.trim(),
    });
  };

  handleUpdatePassword(event) {
    const value = event.target.value;
    event.target.value = value.trim();
    this.setState({
      password:value.trim(),
    })
  }
  render(){
    return (
      <div style={styles.backdrop}>
        <div style={styles.main}>
          <p style={{fontSize:18}}>登录即可添加其他帐户</p>
          <Paper style={styles.paper} className='Paper' zDepth={0} rounded={true}>
            <Avatar icon={<Person />} size={96} style={{flex:1}} />
            <AutoComplete
              hintText="在此处输入你的用户名"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput.bind(this)}
              floatingLabelText="用户名"
              style={{flex:1}}
              fullWidth={true}
            />
            <TextField
              floatingLabelText="密码"
              hintText="在此处输入你的密码"
              type="password"
              onChange={this.handleUpdatePassword.bind(this)}
              value={this.state.password}
              style={{flex:1}}
              fullWidth={true}
            />
            <RaisedButton
              label="登录"
              primary={true}
              style={{flex:1,marginTop:20}}
              fullWidth={true}
            />
          </Paper>
        </div>
      </div>
    );
  }
}