import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';
import { Navbar, Main, Logo } from './components';

const App = () => {
    return(
            <Grid columns={3}>
                <Grid.Column width={3}>
                    <Navbar /> 
                </Grid.Column>
                <Grid.Column width={8}>
                    <Main />  
                </Grid.Column>
                <Grid.Column width={4}>
                    <Logo />
                </Grid.Column>
            </Grid>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);