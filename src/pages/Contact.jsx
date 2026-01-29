const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>

      <p>If you have any questions or feedback, feel free to reach out.</p>

      <form>
        <div>
          <label>Name:</label><br />
          <input type="text" placeholder="Enter your name" />
        </div>

        <br />

        <div>
          <label>Email:</label><br />
          <input type="email" placeholder="Enter your email" />
        </div>

        <br />

        <div>
          <label>Message:</label><br />
          <textarea placeholder="Enter your message"></textarea>
        </div>

        <br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
