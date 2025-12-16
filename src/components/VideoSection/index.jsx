// import "./video.css";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// function Video() {
//   return (
//     <>
//       {/* <div className="videoDiv">
//         <video autoPlay muted loop playsInline className="videoBg">
//           <source src="/homeVideo.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <span className="facebook_icon">
//         <FacebookOutlinedIcon color="white" />
//       </span> */}

//       <div className="video-container">
//         <video autoPlay loop muted playsInline className="background-video">
//           <source src="./videos/homeVideo.mp4" type="video/mp4" />
//         </video>

//         {/* second comment
//         <div className="content">
//           <div className="icons_div">
//             <span className="facebook_icon">
//               <a
//                 href="https://www.facebook.com/share/1HyJRwxfu3/?mibextid=wwXIfr"
//                 className="link"
//               >
//                 <FacebookOutlinedIcon fontSize="medium" />
//               </a>
//             </span>
//             <span className="instagram_icon">
//               <a
//                 href="https://www.instagram.com/event_.bliss?igsh=MWViZmNqa2xibWtnNw%3D%3D&utm_source=qr"
//                 className="link"
//               >
//                 <InstagramIcon fontSize="medium" />
//               </a>
//             </span>
//             till here */}

//         {/* <span className="youtube_icon">
//               <a href="" className="link">
//                 <YouTubeIcon fontSize="medium" />
//               </a>
//             </span>
//             <span className="linkedin_icon">
//               <a href="" className="link">
//                 <LinkedInIcon fontSize="medium" />
//               </a>
//             </span> */}
//         {/* second comment
//           </div>

//           <p>Corporate</p> till here */}

//         {/* <div className="icons_div">
//             <span className="facebook_icon">
//               <a href="" className="link">
//                 <FacebookOutlinedIcon fontSize="medium" />
//               </a>
//             </span>
//             <span className="instagram_icon">
//               <a href="" className="link">
//                 <InstagramIcon fontSize="medium" />
//               </a>
//             </span>
//             <span className="youtube_icon">
//               <a href="" className="link">
//                 <YouTubeIcon fontSize="medium" />
//               </a>
//             </span>
//             <span className="linkedin_icon">
//               <a href="" className="link">
//                 <LinkedInIcon fontSize="medium" />
//               </a>
//             </span>
//           </div>
//           <p>Personalized</p> */}
//         {/* second comment
//         </div> */}

//         {/* form section */}
//         {/* <div className="form_div">
//           <form action="" className="form_main">
//             <h1>Name</h1>
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               name="name"
//               id="name"
//               required
//             />
//             <h1>Phone</h1>
//             <input
//               type="number"
//               placeholder="Enter Your Phone"
//               name="phoneno"
//               id="phoneno"
//               required
//             />
//             <h1>Select Event Type</h1>
//             <select name="event" id="event" required>
//               <option>Corporate Events</option>
//               <option>Wedding Events</option>
//               <option>Catering</option>
//             </select>
//             <br />
//             <button>Send Message</button>
//           </form>
//         </div> */}

//         <div className="form_div">
//           <form
//             action="https://formspree.io/f/xeovjalr"
//             method="POST"
//             className="form_main"
//           >
//             <input
//               type="hidden"
//               name="_redirect"
//               value="http://localhost:5173/thank-you"
//             />

//             <h1>Name</h1>
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               name="name"
//               required
//             />

//             <h1>Phone</h1>
//             <input
//               type="number"
//               placeholder="Enter Your Phone"
//               name="phoneno"
//               required
//             />

//             <h1>Select Event Type</h1>
//             <select name="event" required>
//               <option>Corporate Events</option>
//               <option>Wedding Events</option>
//               <option>Catering</option>
//             </select>

//             <br />
//             <button type="submit">Send Message</button>
//           </form>
//         </div>

//         {/* <div className="form_div">
//           <form
//             action="https://formspree.io/f/xeovjalr"
//             method="POST"
//             className="form_main"
//           >
//             <h1>Name</h1>
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               name="name"
//               id="name"
//               required
//             />

//             <h1>Phone</h1>
//             <input
//               type="number"
//               placeholder="Enter Your Phone"
//               name="phoneno"
//               id="phoneno"
//               required
//             />

//             <h1>Select Event Type</h1>
//             <select name="event" id="event" required>
//               <option>Corporate Events</option>
//               <option>Wedding Events</option>
//               <option>Catering</option>
//             </select>

//             <br />
//             <button type="submit">Send Message</button>
//           </form>
//         </div> */}
//       </div>
//     </>
//   );
// }

// export default Video;

import "./video.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

function Video() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // https://formspree.io/f/xeovjalr
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
      {/* <div className="videoDiv">
        <video autoPlay muted loop playsInline className="videoBg">
          <source src="/homeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <span className="facebook_icon">
        <FacebookOutlinedIcon color="white" />
      </span> */}

      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="./videos/homeVideo.mp4" type="video/mp4" />
        </video>

        {/* second comment
        <div className="content">
          <div className="icons_div">
            <span className="facebook_icon">
              <a
                href="https://www.facebook.com/share/1HyJRwxfu3/?mibextid=wwXIfr"
                className="link"
              >
                <FacebookOutlinedIcon fontSize="medium" />
              </a>
            </span>
            <span className="instagram_icon">
              <a
                href="https://www.instagram.com/event_.bliss?igsh=MWViZmNqa2xibWtnNw%3D%3D&utm_source=qr"
                className="link"
              >
                <InstagramIcon fontSize="medium" />
              </a>
            </span>
            till here */}

        {/* <span className="youtube_icon">
              <a href="" className="link">
                <YouTubeIcon fontSize="medium" />
              </a>
            </span>
            <span className="linkedin_icon">
              <a href="" className="link">
                <LinkedInIcon fontSize="medium" />
              </a>
            </span> */}
        {/* second comment
          </div>

          <p>Corporate</p> till here */}

        {/* <div className="icons_div">
            <span className="facebook_icon">
              <a href="" className="link">
                <FacebookOutlinedIcon fontSize="medium" />
              </a>
            </span>
            <span className="instagram_icon">
              <a href="" className="link">
                <InstagramIcon fontSize="medium" />
              </a>
            </span>
            <span className="youtube_icon">
              <a href="" className="link">
                <YouTubeIcon fontSize="medium" />
              </a>
            </span>
            <span className="linkedin_icon">
              <a href="" className="link">
                <LinkedInIcon fontSize="medium" />
              </a>
            </span>
          </div>
          <p>Personalized</p> */}
        {/* second comment
        </div> */}

        {/* form section */}
        {/* <div className="form_div">
          <form action="" className="form_main">
            <h1>Name</h1>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="name"
              id="name"
              required
            />
            <h1>Phone</h1>
            <input
              type="number"
              placeholder="Enter Your Phone"
              name="phoneno"
              id="phoneno"
              required
            />
            <h1>Select Event Type</h1>
            <select name="event" id="event" required>
              <option>Corporate Events</option>
              <option>Wedding Events</option>
              <option>Catering</option>
            </select>
            <br />
            <button>Send Message</button>
          </form>
        </div> */}

        <div className="form_div">
          <form
            onSubmit={handleSubmit}
            // action="https://formspree.io/f/xeovjalr"
            // method="POST"
            className="form_main"
          >
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

        {/* <div className="form_div">
          <form
            action="https://formspree.io/f/xeovjalr"
            method="POST"
            className="form_main"
          >
            <h1>Name</h1>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="name"
              id="name"
              required
            />

            <h1>Phone</h1>
            <input
              type="number"
              placeholder="Enter Your Phone"
              name="phoneno"
              id="phoneno"
              required
            />

            <h1>Select Event Type</h1>
            <select name="event" id="event" required>
              <option>Corporate Events</option>
              <option>Wedding Events</option>
              <option>Catering</option>
            </select>

            <br />
            <button type="submit">Send Message</button>
          </form>
        </div> */}
      </div>
    </>
  );
}

export default Video;
