import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import './Navbar.css';

const Navbar = () => {
    return(
            <Menu id='navbar' inverted pointing vertical>
                <Button secondary><Icon name='bars'/></Button>
                <Menu.Item
                name='Dashboard'
                icon='dashboard'
                />
                <Menu.Item
                name='Plan'
                icon='google wallet'
                />
                <Menu.Item
                name='Accounts'
                icon='university'
                />
                <Menu.Item
                icon='shopping cart'
                name='Transactions'
                position='right'
                />
                <Menu.Item
                name='Affiliates'
                icon='dna'
                />
                <Menu.Item
                name='University'
                icon='graduation cap'
                />
                <Menu.Item
                name='Resources'
                icon='book'
                />
                <Menu.Item
                name='Professionals'
                icon='user secret'
                />
                <Menu.Item
                name='Help'
                icon='help'
                />
                <Button secondary><Icon name='user circle outline' />James Wright</Button>
            </Menu>
    )
}

export default Navbar;