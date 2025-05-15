import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '~/components/header';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import preferencesReducer from '~/redux/slices/preferencesSlice';

// Mock react-router's useNavigate
vi.mock('react-router', () => ({
  useNavigate: () => vi.fn()
}));

// Create a mock store
const createMockStore = () => {
  return configureStore({
    reducer: {
      preferences: preferencesReducer
    }
  });
};

describe('Header', () => {
  beforeEach(() => {
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: vi.fn(),
        setItem: vi.fn(),
        removeItem: vi.fn()
      },
      writable: true
    });
  });

  it('renders header with all buttons', () => {
    const mockStore = createMockStore();
    
    render(
      <Provider store={mockStore}>
        <Header />
      </Provider>
    );
    
    // Check that all icons/buttons are rendered
    // We can't check for exact icons, but we can check for button elements
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(3); // Menu, Refresh, and Logout buttons
  });
  
  it('dispatches toggleSidebar when menu button is clicked', () => {
    const mockStore = createMockStore();
    const dispatchSpy = vi.spyOn(mockStore, 'dispatch');
    
    render(
      <Provider store={mockStore}>
        <Header />
      </Provider>
    );
    
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]); // Menu button should be first
    
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });
  
  it('dispatches refreshDB when refresh button is clicked', () => {
    const mockStore = createMockStore();
    const dispatchSpy = vi.spyOn(mockStore, 'dispatch');
    
    render(
      <Provider store={mockStore}>
        <Header />
      </Provider>
    );
    
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]); // Refresh button should be second
    
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });
  
  it('removes token from localStorage and navigates when logout button is clicked', () => {
    const mockStore = createMockStore();
    
    render(
      <Provider store={mockStore}>
        <Header />
      </Provider>
    );
    
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[2]); // Logout button should be third
    
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });
}); 