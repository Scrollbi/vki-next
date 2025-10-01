import StudentInterface from '@/types/StudentInterface';

export const getStudentsApi = async (): Promise<StudentInterface[]> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API || 'http://localhost:3000/api';
    const response = await fetch(`${baseUrl}/students`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const students = await response.json();
    return students as StudentInterface[];
  } catch (err) {
    console.log('>>> getStudentsApi error:', err);
    return [];
  }
};