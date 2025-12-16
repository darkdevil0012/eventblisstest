import "./gallery.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import pic1 from "/images/pic1.jpeg";
import pic2 from "/images/pic2.jpeg";
import pic3 from "/images/pic3.jpeg";
import pic4 from "/images/pic4.jpeg";
import pic5 from "/images/pic5.jpeg";
import pic6 from "/images/pic6.jpeg";
import { Container } from "@mui/material";

function Gallery() {
  return (
    <Container>
      <div className="gallery_main">
        <h1 className="gallery_heading">
          <span>Our</span> Gallery Showcase
        </h1>

        <div className="gallery_pics">
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={6} md={6} lg={3} xl={2}>
              <Card
                sx={{
                  // width: 155,
                  borderRadius: 3,
                  width: { xs: 155, sm: 250, md: 400, lg: 230 },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={pic1}
                    alt=""
                    className="gallery_img"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={6} lg={3} xl={2}>
              <Card
                sx={{
                  // width: 155,
                  borderRadius: 3,
                  width: { xs: 155, sm: 250, md: 400, lg: 230 },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={pic2}
                    alt=""
                    className="gallery_img"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={6} lg={3} xl={2}>
              <Card
                sx={{
                  // width: 155,
                  borderRadius: 3,
                  width: { xs: 155, sm: 250, md: 400, lg: 230 },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={pic3}
                    alt=""
                    className="gallery_img"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={6} lg={3} xl={2}>
              <Card
                sx={{
                  // width: 155,
                  borderRadius: 3,
                  width: { xs: 155, sm: 250, md: 400, lg: 230 },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={pic4}
                    alt=""
                    className="gallery_img"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={6} lg={3} xl={2}>
              <Card
                sx={{
                  // width: 155,
                  borderRadius: 3,
                  width: { xs: 155, sm: 250, md: 400, lg: 230 },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={pic5}
                    alt=""
                    className="gallery_img"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={6} lg={3} xl={2}>
              <Card
                sx={{
                  // width: 155,
                  borderRadius: 3,
                  width: { xs: 155, sm: 250, md: 400, lg: 230 },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    // sx={{
                    //   height: { xs: 200, sm: 200, md: 200, lg: 230 },
                    //   objectFit: "cover",
                    // }}
                    image={pic6}
                    alt=""
                    className="gallery_img"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default Gallery;
