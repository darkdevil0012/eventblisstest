import "./footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="main_div">
      <div className="info_span">
        <div>
          <span>
            CEO: Aamir Edhi Directors: Humza Aamir Edhi & Muhammad Shafeen Edhi
          </span>
        </div>
        <div>
          <span>
            For inquiries and bookings: Muhammad Shafeen Edhi (+92 324 2591541)
          </span>
        </div>
      </div>

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
      </div>
      <div className="copyright_maindiv">
        <span className="copyright">Copyright</span>
        <CopyrightIcon fontSize="small" className="copyright_logo" />
        <span>2025 - Powered By Event Bliss</span>
      </div>
    </div>
  );
}

export default Footer;
