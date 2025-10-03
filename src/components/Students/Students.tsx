'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';

const Students = (): React.ReactElement => {
  const { students, isLoading, error } = useStudents();

  if (isLoading) {
    return <div className={styles.loading}>Загрузка студентов...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка загрузки студентов</div>;
  }

  return (
    <div className={styles.Students}>
      {students.map((student: StudentInterface) => (
        <div key={student.id} className={styles.studentItem}>
          <span className={styles.name}>
            {student.last_name} {student.first_name} {student.middle_name || ''}
          </span>
          <span className={styles.group}>Группа {student.groupId}</span>
        </div>
      ))}
    </div>
  );
};

export default Students;