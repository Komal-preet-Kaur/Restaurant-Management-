import { useAuth } from '../context/AuthContext';

function DashboardPage() {
  const { user } = useAuth();

  return (
    <section className="card">
      <h1>Dashboard</h1>
      <p>Welcome back, {user?.username}.</p>
      <p>Use this page as your authenticated control panel for bookings and profile data.</p>
    </section>
  );
}

export default DashboardPage;
