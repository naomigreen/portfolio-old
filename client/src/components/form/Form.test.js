import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  const props = {
    register: jest.fn(),
    onSubmit: jest.fn(),
    sending: false
  }

  const { getByPlaceholderText, getByTestId } = render(<Form {...props} />);

  it('should render Form component', async () => {
    const name = getByPlaceholderText('Name');
    const email = getByPlaceholderText('Email');
    const msg = getByPlaceholderText('Message');
    const submit = getByTestId('submit');

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(msg).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    fireEvent.change(name, {
      target: { value: 'Foo' },
    });
    fireEvent.change(email, {
      target: { value: 'foo@bar.com' },
    });
    fireEvent.change(name, {
      target: { value: 'Hi ^_^' },
    });

    fireEvent.submit(getByTestId("form"));

    expect(props.onSubmit).toHaveBeenCalled()

  });
});
