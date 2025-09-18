import {create} from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    authenticated: false,
    login: () => set({authenticated: true}),
    logout: () => set({authenticated: false}),
}));