const WelcomeSection = () => {
  const stylepara = {
    fontSize: "1.2rem",
    padding: "15px ",
  };
  const styleHeading = {
    fontSize: "3rem",
    fontWeight: "700",
  };
  return (
    <div className="container text-center my-5">
      <h1 className="heading" style={styleHeading}>
        Welcome
      </h1>
      <p className="lead" style={stylepara}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries.
      </p>
    </div>
  );
};

export default WelcomeSection;
