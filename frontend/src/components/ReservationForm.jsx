function ReservationForm({ formData, onChange, onSubmit, loading, error, success }) {
  return (
    <form onSubmit={onSubmit} className="reservation-form">
      <div className="form-header">
        <h2>RESERVE YOUR TABLE NOW</h2>
      </div>

      <div className="form-group">
        <div>
          <label htmlFor="restaurantId"><i className="icon">ID</i> Restaurant ID</label>
          <input id="restaurantId" name="restaurantId" value={formData.restaurantId} onChange={onChange} required />
        </div>
        <div>
          <label htmlFor="name"><i className="icon">👤</i> Username</label>
          <input id="name" name="name" value={formData.name} onChange={onChange} required />
        </div>
      </div>

      <div className="form-group">
        <div>
          <label htmlFor="email"><i className="icon">✉️</i> Email</label>
          <input id="email" type="email" name="email" value={formData.email} onChange={onChange} required />
        </div>
        <div>
          <label htmlFor="phone"><i className="icon">📞</i> Phone</label>
          <input id="phone" name="phone" value={formData.phone} onChange={onChange} required />
        </div>
      </div>

      <div className="form-group">
        <div>
          <label htmlFor="guests"><i className="icon">👥</i> Guests</label>
          <select id="guests" name="guests" value={formData.guests} onChange={onChange} required>
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
            <option value="5">5+ people</option>
          </select>
        </div>
        <div>
          <label htmlFor="date"><i className="icon">📅</i> Date</label>
          <input id="date" type="date" name="date" value={formData.date} onChange={onChange} required />
        </div>
      </div>

      <div className="form-group">
        <div>
          <label htmlFor="time"><i className="icon">🕒</i> Time</label>
          <input id="time" type="time" name="time" value={formData.time} onChange={onChange} required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="special_requests">Special Requests (Optional)</label>
        <textarea id="special_requests" name="special_requests" value={formData.special_requests} onChange={onChange} />
      </div>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <div className="book-button-container">
        <button className="book-button" disabled={loading} type="submit">
          {loading ? 'Saving...' : 'BOOK TABLE'}
        </button>
      </div>
    </form>
  );
}

export default ReservationForm;
