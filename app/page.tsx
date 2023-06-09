import Login from '@/components/login/login';
import { initFirebase } from '@/lib/config/fireBaseConfig';

export default function Home() {
  const app = initFirebase();
  console.log(app);

  return <Login />;
}
