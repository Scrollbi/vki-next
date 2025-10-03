import { useQuery } from '@tanstack/react-query';
import { getStudentsApi } from '@/api/studentsApi';
import type StudentInterface from '@/types/StudentInterface';

const useStudents = (): {
  students: StudentInterface[];
  isLoading: boolean;
  error: Error | null;
} => {
  const {
    data: students = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['students'],
    queryFn: getStudentsApi,
  });

  return {
    students,
    isLoading,
    error: error as Error | null,
  };
};

export default useStudents;