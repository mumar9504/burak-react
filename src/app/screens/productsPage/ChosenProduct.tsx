import React, { useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Divider from "../../components/divider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setRestaurant, setChoosenProduct } from "./slice";
import { createSelector } from "reselect";
import { retrieveRestaurant, retrieveChoosenProduct } from "./selector";
import { Product } from "../../../lib/types/product";
import { useParams } from "react-router-dom";
import MemberService from "../../services/MemberService";
import ProductService from "../../services/ProductService";
import { Member } from "../../../lib/types/member";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setRestaurant: (data: Member) => dispatch(setRestaurant(data)),
  setChoosenProduct: (data: Product) => dispatch(setChoosenProduct(data)),
});
const restaurantRetriever = createSelector(
  retrieveRestaurant,
  (restaurant) => ({ restaurant })
);
const choosenProductRetriever = createSelector(
  retrieveChoosenProduct,
  (choosenProduct) => ({ choosenProduct })
);

export default function ChosenProduct() {
  const { productId } = useParams<{ productId: string }>();
  const { setRestaurant, setChoosenProduct } = actionDispatch(useDispatch());
  const { restaurant } = useSelector(restaurantRetriever);
  const { choosenProduct } = useSelector(choosenProductRetriever);

  useEffect(() => {
    const product = new ProductService();
    product
      .getProduct(productId)
      .then((data) => setChoosenProduct(data))
      .catch((err) => console.log(err));

    const member = new MemberService();
    member
      .getRestaurant()
      .then((data) => setRestaurant(data))
      .catch((err) => console.log(err));
  }, []);

  if (!choosenProduct) return null;
  return (
    <div className={"chosen-product"}>
      <Box className={"title"}>Product Detail</Box>
      <Container className={"product-container"}>
        <Stack className={"chosen-product-slider"}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-area"
          >
            {choosenProduct?.productImages.map((ele: string, index: number) => {
              const imagePath = `${serverApi}/${ele}`;
              return (
                <SwiperSlide key={index}>
                  <img className="slider-image" src={imagePath} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <Stack className={"chosen-product-info"}>
          <Box className={"info-box"}>
            <strong className={"product-name"}>
              {choosenProduct?.productName}
            </strong>
            <span className={"resto-name"}>{restaurant?.memberNick}</span>
            <span className={"resto-name"}>{restaurant?.memberPhone}</span>
            <Box className={"rating-box"}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <div className={"evaluation-box"}>
                <div className={"product-view"}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>{choosenProduct?.productViews}</span>
                </div>
              </div>
            </Box>
            <p className={"product-desc"}>
              {choosenProduct?.productDesc
                ? choosenProduct?.productDesc
                : "No Description"}
            </p>
            <Divider height="1" width="100%" bg="#000000" />
            <div className={"product-price"}>
              <span>Price:</span>
              <span>${choosenProduct?.productPrice}</span>
            </div>
            <div className={"button-box"}>
              <Button variant="contained">Add To Basket</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
