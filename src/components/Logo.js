import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import './Logo.css';

const Logo = () => {
    return(
        <div id='column-logo'>
        <Header>
            WizeFi
            <Icon name='bell outline'></Icon>
        </Header>
        <Button id='add-button' size='massive' circular color='linkedin' icon='plus' />
        </div>
    )
}

export default Logo;