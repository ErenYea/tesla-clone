import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        btnright="Existing Inventory"
        btnleft="Custome Order"
        img = "model-3.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        btnright="Existing Inventory"
        btnleft="Custome Order"
        img = "model-y.jpg"
      />
      <Section
        title="Modal S"
        description="Order Online for Touchless Delivery"
        btnright="Existing Inventory"
        btnleft="Custome Order"
        img = "model-s.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        btnright="Existing Inventory"
        btnleft="Custome Order"
        img = "model-x.jpg"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        btnright="Learn More"
        btnleft="Order Now"
        img = "solar-panel.jpg"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        btnright="Learn More"
        btnleft="Order Now"
        img = "solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        btnleft="Shop Now"
        img = "accessories.jpg"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
