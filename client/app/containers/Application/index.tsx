/**
 *
 * Application
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Dispatch } from 'redux';

import { IAppState } from '../../store/state';

import { toggleMenu } from './actions';

// routes
import HomePage from '../HomePage';
import Task from '../Task';

// layout components
import Page404 from '../../components/Page404';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface OwnProps {}

interface DispatchProps {
  toggleMenuAction: () => void;
}

interface StateProps {
  isMenuOpen: boolean;
}

type Props = StateProps & OwnProps & DispatchProps;

export class Application extends React.PureComponent<Props> {
  componentDidMount() {}

  render(): JSX.Element {
    const { isMenuOpen, toggleMenuAction } = this.props;

    return (
      <div className='application'>
        <Header isMenuOpen={isMenuOpen} toggleMenuAction={toggleMenuAction} />
        <main className='main'>
          <Container>
            <div className='wrapper'>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/task' component={Task} />
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

const mapStateToProps = (state: IAppState) => {
  return {
    isMenuOpen: state.application.isMenuOpen
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: OwnProps
): DispatchProps => {
  return {
    toggleMenuAction: () => {
      dispatch(toggleMenu());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
