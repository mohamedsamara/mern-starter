/**
 *
 * Homepage
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { Container, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';

import { IAppState } from '../../store/state';

interface OwnProps {}

interface DispatchProps {}

interface StateProps {}

type Props = StateProps & OwnProps & DispatchProps;

export class Homepage extends React.PureComponent<Props> {
  componentDidMount() {}

  render(): JSX.Element {
    const {} = this.props;

    return (
      <div className='homepage'>
        <Jumbotron fluid>
          <Container fluid>
            <h3 className='title'>MERN & TypeScript</h3>
            <p className='lead'>
              This starter is built for developers who want to develop
              applications faster. This is just a simple foundation with basic
              example to explain how everyhting works on both backend and
              frontend side.  
            </p>
            <p className='lead'>
              TypeScript is implemented in this project to make the code easier to read and simple to debug.
            </p>
            <ListGroup>
              <ListGroupItem>
                <i className='icon-check' />
                Node
              </ListGroupItem>
              <ListGroupItem>
                <i className='icon-check' />
                Express
              </ListGroupItem>
              <ListGroupItem>
                <i className='icon-check' />
                Mongoose
              </ListGroupItem>
              <ListGroupItem>
                <i className='icon-check' />
                React
              </ListGroupItem>
              <ListGroupItem>
                <i className='icon-check' />
                TypeScript
              </ListGroupItem>
            </ListGroup>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {};
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: OwnProps
): DispatchProps => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
