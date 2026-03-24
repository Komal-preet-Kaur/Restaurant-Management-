import { useEffect, useState } from 'react';
import ReservationForm from '../components/ReservationForm';
import { reservationsApi } from '../services/api';

const initialForm = {
  restaurantId: '',
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: 1,
  special_requests: ''
};

function ReservationsPage() {
  const [formData, setFormData] = useState(initialForm);
  const [reservations, setReservations] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const loadReservations = async () => {
    try {
      setLoadingList(true);
      const { data } = await reservationsApi.list();
      setReservations(data.reservations || []);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch reservations');
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    loadReservations();
  }, []);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setError('');
    setSuccess('');
    try {
      await reservationsApi.create({ ...formData, guests: Number(formData.guests) });
      setSuccess('Reservation created successfully.');
      setFormData(initialForm);
      await loadReservations();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create reservation');
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <>
      <hr />
      <ReservationForm
        formData={formData}
        onChange={onChange}
        onSubmit={onSubmit}
        loading={loadingSubmit}
        error={error}
        success={success}
      />
      <section className="container-steps-info">
      <h2 style={{ color: 'white' }}>Recent Reservations</h2>
      {loadingList ? (
        <p style={{ color: 'white' }}>Loading reservations...</p>
      ) : (
        <div className="grid">
          {reservations.map((item) => (
            <article key={item._id} className="card">
              <h3>{item.name}</h3>
              <p>{item.email}</p>
              <p>{new Date(item.date).toLocaleDateString()} at {item.time}</p>
              <p>Guests: {item.guests}</p>
            </article>
          ))}
        </div>
      )}
      </section>
    </>
  );
}

export default ReservationsPage;
