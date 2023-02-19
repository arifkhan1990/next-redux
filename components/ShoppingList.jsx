import React from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ItemData from '../constaint/data.json';

const ShoppingList = ({ users }) => {
  const items2 = ItemData;
  const isAuthenticated = true;
  return (
    <Container>
      <ListGroup>
        <TransitionGroup className='shopping-list'>
          {items2.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames='fade'>
              <ListGroupItem>
                {isAuthenticated ? (
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={() => handleDelete(id)}
                  >
                    &times;
                  </Button>
                ) : null}
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
