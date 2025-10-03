import Students from '@/components/Students/Students';
import Page from '@/components/layout/Page/Page';
import { type Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Студенты',
};

const StudentsPage = (): React.ReactNode => (
  <Page>
    <h1>Студенты</h1>
    <Students />
  </Page>
);

export default StudentsPage;