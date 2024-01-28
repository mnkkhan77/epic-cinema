import WithBreadcrumbs from "../Components/WithBreadcrumbs";

const TermsOfServices = () => {
  const styles = {
    container: {
      width: "80%",
      margin: "auto",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    },
    title: {
      color: "#333",
      textAlign: "center",
      marginTop: "20px",
      borderBottom: "1px solid #ddd",
      paddingBottom: "10px",
    },
    subtitle: {
      color: "#666",
      marginTop: "20px",
      fontWeight: "bold",
    },
    text: {
      color: "#999",
      lineHeight: "1.6",
      marginBottom: "15px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Terms and Services</h1>
      <p style={styles.text}>
        Welcome to our movie app. Please read the following terms and services
        carefully.
      </p>
      <h2 style={styles.subtitle}>1. Acceptance of Terms</h2>
      <p style={styles.text}>
        By accessing and using this movie app, you accept and agree to be bound
        by the terms and provision of this agreement.
      </p>
      <h2 style={styles.subtitle}>2. User Responsibilities</h2>
      <p style={styles.text}>
        As a user, you are responsible for your own communications and the
        consequences of posting those communications.
      </p>
      <h2 style={styles.subtitle}>3. Privacy Policy</h2>
      <p style={styles.text}>
        Our movie app respects the privacy of its users. Please refer to our
        Privacy Policy which explains how we collect, use, and disclose
        information that pertains to your privacy.
      </p>
      <h2 style={styles.subtitle}>4. Changes to Terms</h2>
      <p style={styles.text}>
        Our movie app reserves the right, in its sole discretion, to change the
        Terms under which the app is offered.
      </p>
      <h2 style={styles.subtitle}>5. Contact Us</h2>
      <p style={styles.text}>
        If you have any questions about these Terms, please contact us.
      </p>
    </div>
  );
};

export default WithBreadcrumbs(TermsOfServices);
