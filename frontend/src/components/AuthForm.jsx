function AuthForm({ mode, formData, onChange, onSubmit, loading, error, onToggleMode }) {
  return (
    <div className="box">
      <div className="form">
        <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
        <form onSubmit={onSubmit}>
          <div className="inputBox">
            <input name="username" value={formData.username} onChange={onChange} required="required" />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" name="password" value={formData.password} onChange={onChange} required="required" />
            <span>Password</span>
            <i></i>
          </div>
          {error && <p className="error">{error}</p>}
          <input type="submit" value={loading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Register'} />
          <div className="links">
            {mode === 'login' ? (
              <>
                <a href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onToggleMode();
                  }}
                >
                  Don&apos;t have an account? Sign Up
                </a>
              </>
            ) : (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onToggleMode();
                }}
              >
                Already have an account? Login
              </a>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
