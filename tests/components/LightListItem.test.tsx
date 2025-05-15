import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LightListItem from '~/components/lightListItem';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import lightReducer from '~/redux/slices/lightSlice';

// Create a mock store for testing
const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      lights: lightReducer
    },
    preloadedState: initialState
  });
};

describe('LightListItem', () => {
  it('renders correctly with working status', () => {
    const mockStore = createMockStore();
    
    render(
      <Provider store={mockStore}>
        <LightListItem 
          id={1} 
          isWorking={true} 
          votes={5} 
          street="Main Street" 
        />
      </Provider>
    );
    
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Working')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Main Street')).toBeInTheDocument();
  });
  
  it('renders correctly with inactive status', () => {
    const mockStore = createMockStore();
    
    render(
      <Provider store={mockStore}>
        <LightListItem 
          id={2} 
          isWorking={false} 
          votes={10} 
          street="Broadway" 
        />
      </Provider>
    );
    
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Inactive')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Broadway')).toBeInTheDocument();
  });
  
  it('dispatches toggleSign action when status is clicked', () => {
    const mockStore = createMockStore();
    const dispatchSpy = vi.spyOn(mockStore, 'dispatch');
    
    render(
      <Provider store={mockStore}>
        <LightListItem 
          id={3} 
          isWorking={true} 
          votes={15} 
          street="Oak Avenue" 
        />
      </Provider>
    );
    
    fireEvent.click(screen.getByText('Working'));
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });
  
  it('updates street name when input is changed and blurred', () => {
    const mockStore = createMockStore();
    const dispatchSpy = vi.spyOn(mockStore, 'dispatch');
    
    render(
      <Provider store={mockStore}>
        <LightListItem 
          id={4} 
          isWorking={true} 
          votes={20} 
          street="Pine Street" 
        />
      </Provider>
    );
    
    const input = screen.getByDisplayValue('Pine Street');
    fireEvent.change(input, { target: { value: 'Cedar Street' } });
    fireEvent.blur(input);
    
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });
}); 