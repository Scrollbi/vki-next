import { getStudentsDb } from '@/db/studentDb';

export async function GET(): Promise<Response> {
  try {
    const students = await getStudentsDb();
    
    return new Response(JSON.stringify(students), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch students' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}