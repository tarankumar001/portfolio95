import {create} from 'zustand';

interface AuthState {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    authenticated: false,
    login: () => set({authenticated: true}),
    logout: () => set({authenticated: false}),
}));