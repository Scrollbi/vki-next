
import type StudentInterface from '@/types/StudentInterface';

export const getStudentsApi = async (): Promise<StudentInterface[]> => {
  const response = await fetch('http://localhost:3000/api/students');
  if (!response.ok) {
    throw new Error('Failed to fetch students');
  }
  return response.json();
};