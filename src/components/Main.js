import React from 'react';
import { Card, Icon, Grid, Header, Button } from 'semantic-ui-react';
import './Main.css';

const Main = () => {
    return(
        <div id='main-body'>
            <Header>
                Accounts
            </Header>
            <Button size='tiny'>Summary</Button>
            <Button size='tiny' color='linkedin'>All</Button>
            <Button size='tiny'>Assets</Button>
            <Button size='tiny'>Debts</Button>
            <Button size='tiny'>Insurance</Button>
            <Grid.Row id='card-one'>
                <Card id='bank-cards'>
                    <Card.Content>
                        <Card.Header>
                            <Icon name='cc visa' />
                            Chase
                        </Card.Header>
                        <Card.Description style={{ fontWeight: 'bold' }}>
                            Chase Freedom $3,500.00  
                        </Card.Description>
                        <Card.Meta>
                            (Chase....1234)
                        </Card.Meta>
                        <Card.Description style={{ fontWeight: 'bold' }}>
                            Chase Slate $4,500.00
                        </Card.Description>
                        <Card.Meta>
                            (Chase....4444)
                        </Card.Meta>
                        <Card.Description style={{ fontWeight: 'bold' }}>
                            Chase Savings $1,000.00
                        </Card.Description>
                        <Card.Meta>
                            (Chase....2222)
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    Last updated an hour ago<Icon name='undo' />
                    </Card.Content>
                </Card>
            </Grid.Row>
            <Grid.Row id='card-two'>
                <Card id='bank-cards'>
                    <Card.Content>
                        <Card.Header>
                            <Icon name='cc discover' />
                            Discover
                        </Card.Header>
                        <Card.Description style={{ fontWeight: 'bold' }}>
                            Discover Something $3,500.00
                        </Card.Description>
                        <Card.Meta>
                            (Discover....1234)
                        </Card.Meta>
                        <Card.Description style={{ fontWeight: 'bold' }}>
                            Discover Something Else $4,500.00
                        </Card.Description>
                        <Card.Meta>
                            (Discover....4444)
                        </Card.Meta>
                        <Card.Description style={{ fontWeight: 'bold' }}>
                            Don't Discover $1,000.00
                        </Card.Description>
                        <Card.Meta>
                            (Discover....2222)
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    Last updated an hour ago<Icon name='undo' />
                    </Card.Content>
                </Card>
            </Grid.Row>
        </div>
    )
}

export default Main;