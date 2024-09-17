const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Email Address"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
