'use client';
import { useQuery } from '@tanstack/react-query';
import { getStudentsApi } from '@/api/studentsApi';
import StudentInterface from '@/types/StudentInterface';
import styles from './students.module.scss';

export default function StudentsPage() {
  const { data: students, isLoading, error } = useQuery({
    queryKey: ['students'],
    queryFn: getStudentsApi,
  });

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка загрузки</div>;
  }

  return (
    <div className={styles.studentsPage}>
      <div className={styles.title}>Студенты</div>
      
      {students && students.length > 0 ? (
        <div className={styles.studentsList}>
          {students.map((student: StudentInterface) => (
            <div key={student.id} className={styles.studentItem}>
              {student.last_name} {student.first_name} {student.middle_name || ''}
              <span className={styles.group}>Группа {student.groupId}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>Студенты не найдены</div>
      )}
    </div>
  );
}