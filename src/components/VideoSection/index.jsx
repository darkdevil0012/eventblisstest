import "./video.css";
import { useNavigate } from "react-router-dom";

function Video() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/meoydpqe", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      sessionStorage.setItem("form_submitted", "true");
      navigate("/thank-you");
    } else {
      alert("Something went wrong. Try again!");
    }
  };
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="./videos/homeVideo.mp4" type="video/mp4" />
        </video>

        <div className="form_div">
          <form onSubmit={handleSubmit} className="form_main">
            <h1>Name</h1>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="name"
              required
            />

            <h1>Phone</h1>
            <input
              type="number"
              placeholder="Enter Your Phone"
              name="phoneno"
              required
            />

            <h1>Select Event Type</h1>
            <select name="event" required>
              <option>Corporate Events</option>
              <option>Wedding Events</option>
              <option>Catering</option>
            </select>

            <br />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Video;
