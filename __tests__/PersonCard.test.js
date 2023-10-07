import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import PersonCard from '../src/components/PersonCard';

describe('PersonCard', () => {
  const mockPerson = {
    id: 1,
    first_name: 'John',
    last_name: 'Cavendish',
    email: 'ccavendish0@github.io',
    gender: 'Female',
    photo:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  };

  it('render correctly', () => {
    const {getByText, getByTestId} = render(
      <PersonCard personInfo={mockPerson} />,
    );

    const personContainer = getByTestId('personContainer');

    expect(personContainer).toBeTruthy();

    const name = getByTestId('nameBar');

    expect(name).toBeTruthy();
  });

  it('callSetAge Function correctly', () => {
    const mockSetAge = jest.fn();

    const {getByTestId, getByText} = render(
      <PersonCard personInfo={mockPerson} setAge={mockSetAge} />,
    );

    const personCont = getByTestId('personContainer');

    fireEvent.press(personCont);

    expect(mockSetAge).toHaveBeenCalledWith(11);
  });
});
