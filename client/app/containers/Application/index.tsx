/**
 *
 * Application
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

// routes
import HomePage from '../HomePage';

import Page404 from '../../components/Page404';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export class Application extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div className='application'>
        <Header />
        <main className='main'>
          <Container>
            <div className='wrapper'>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='*' component={Page404} />
              </Switch>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
