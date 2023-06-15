import { User } from '@/lib/domain/model/user';
import { create } from 'zustand';

export const userStore = create<User>((set) => ({
  email: '',
  password: '',
  setEmail: (email: string) => {},
}));
