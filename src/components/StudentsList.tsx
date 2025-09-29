

import { useQuery } from '@tanstack/react-query';
import { getStudentsApi } from '@/api/studentsApi';
import { useState } from 'react';
import styles from './StudentsList.module.scss';

export default function StudentsList() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: students, isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: getStudentsApi,
  });

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.studentsList}>
      <button 
        className={styles.toggleButton}
        onClick={toggleList}
        type="button"
      >
        Студенты ({students?.length ?? 0})
      </button>
      
      {isOpen && (
        <div className={styles.list}>
          <h3>Список студентов</h3>
          {students && students.length > 0 ? (
            <ul>
              {students.map((student) => (
                <li key={student.id} className={styles.studentItem}>
                  <span className={styles.name}>
                    {student.last_name} {student.first_name} {student.middle_name}
                  </span>
                  <span className={styles.group}>Группа: {student.groupId}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Студенты не найдены</p>
          )}
        </div>
      )}
    </div>
  );
}