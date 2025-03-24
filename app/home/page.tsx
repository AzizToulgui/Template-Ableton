// app/page.tsx (root route)
import { redirect } from 'next/navigation';

export default function RootPage() {
    redirect('/about'); // Redirect to /home
}