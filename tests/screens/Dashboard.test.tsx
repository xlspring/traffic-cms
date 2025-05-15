import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import DashboardScreen from '~/screens/dashboard/index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import logReducer, { type LogsData } from '~/redux/slices/logSlice';
import statReducer from '~/redux/slices/statSlice';

// Mock the useEffect hook
vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useEffect: vi.fn(fn => fn())
  };
});

// Create a mock store with test data
const createMockStore = (logsData: LogsData[] = [], statsData = {}) => {
  return configureStore({
    reducer: {
      logs: logReducer,
      stats: statReducer
    },
    preloadedState: {
      logs: {
        isLoaded: true,
        data: logsData
      },
      stats: {
        total: 100,
        working: 75,
        ...statsData
      }
    }
  });
};

describe.skip('DashboardScreen', () => {
  it('renders statistics correctly', () => {
    const mockStore = createMockStore();
    
    render(
      <Provider store={mockStore}>
        <DashboardScreen />
      </Provider>
    );
    
    expect(screen.getByText('Statistics')).toBeInTheDocument();
    expect(screen.getByText('Total traffic lights in DB')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Currently working')).toBeInTheDocument();
    expect(screen.getByText('75 (75.00%)')).toBeInTheDocument();
  });
  
  it('renders logs when data is loaded', () => {
    const mockLogs: LogsData[] = [
      { time: 1623456789, priority: 1, message: 'Test log message 1' },
      { time: 1623456790, priority: 2, message: 'Test log message 2' }
    ];
    
    const mockStore = createMockStore(mockLogs);
    
    render(
      <Provider store={mockStore}>
        <DashboardScreen />
      </Provider>
    );
    
    expect(screen.getByText('Database log')).toBeInTheDocument();
    expect(screen.getByText('Test log message 1')).toBeInTheDocument();
    expect(screen.getByText('Test log message 2')).toBeInTheDocument();
  });
  
  it('dispatches actions on component mount', () => {
    const mockStore = createMockStore();
    const dispatchSpy = vi.spyOn(mockStore, 'dispatch');
    
    render(
      <Provider store={mockStore}>
        <DashboardScreen />
      </Provider>
    );
    
    // We're expecting two dispatches (getStats and fetchLogs) during component mount
    expect(dispatchSpy).toHaveBeenCalledTimes(2);
  });
}); 