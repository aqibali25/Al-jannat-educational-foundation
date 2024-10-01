const WelcomeSection = () => {
  const stylepara = {
    fontSize: "1.2rem",
    padding: "15px ",
  };
  const styleHeading = {
    fontSize: "1.5rem",
    fontWeight: "700",
  };
  return (
    <div className="container text-center my-5">
      <h1 className="heading" style={styleHeading}>
        Welcome to Al Jannat Education Foundation
      </h1>
      <p className="lead" style={stylepara}>
        Chairman Message: Assalamu alaikum (Peace be upon you) We are thrilled
        to welcome you to the Al Jannat Education Foundation, a non-profit
        organization dedicated to empowering students and communities through
        education. Our mission is to provide access to quality education, foster
        leadership, and promote community service. We invite you to be part of
        our community of scholars, mentors, and change-makers. Together, let's
        empower education and enrich futures. Thank you for your interest in Al
        Jannat Education Foundation. We look forward to serving you.
        Wasalaam(Peace).
      </p>
    </div>
  );
};

export default WelcomeSection;
