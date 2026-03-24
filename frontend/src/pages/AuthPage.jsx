import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../context/AuthContext';

const initialForm = { username: '', password: '' };

function AuthPage() {
  const [mode, setMode] = useState('login');
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (mode === 'login') {
        await login(formData);
        navigate('/dashboard');
      } else {
        await register(formData);
        setMode('login');
      }
      setFormData(initialForm);
    } catch (err) {
      setError(err.response?.data?.error || 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleMode = () => {
    setMode((prev) => (prev === 'login' ? 'signup' : 'login'));
    setError('');
  };

  return (
    <section className="auth-page-wrapper">
      <AuthForm
        mode={mode}
        formData={formData}
        onChange={onChange}
        onSubmit={onSubmit}
        loading={loading}
        error={error}
        onToggleMode={handleToggleMode}
      />
    </section>
  );
}

export default AuthPage;
