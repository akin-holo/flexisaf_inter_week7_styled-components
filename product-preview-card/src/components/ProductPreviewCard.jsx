import styled from "styled-components";
import mobileImage from "../assets/image-product-mobile.jpg";
import desktopImage from "../assets/image-product-desktop.jpg";
import { FaShoppingCart } from "react-icons/fa";

// Styled components
const Card = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  margin: 50px auto;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (min-width: 901px) {
    flex-direction: row;
    max-width: 600px;
  }
`;

const ProductPicture = styled.div`
  width: 100%;

  @media (min-width: 901px) {
    width: 50%;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Perfume = styled.h2`
  text-transform: uppercase;
  font-size: 14px;
  color: gray;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

const PriceArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;

  ins {
    font-size: 24px;
    color: green;
    text-decoration: none;
  }

  del {
    color: gray;
    font-size: 14px;
  }
`;

const Button = styled.button`
  background: green;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: darkgreen;
  }
`;

const ProductCard = () => {
  return (
    <Card>
      <ProductPicture>
        <picture>
          <source srcSet={mobileImage} media="(max-width: 900px)" />
          <source srcSet={desktopImage} media="(min-width: 901px)" />
          <img src={desktopImage} alt="perfume in a bottle" />
        </picture>
      </ProductPicture>
      <ProductInfo>
        <Perfume>Perfume</Perfume>
        <Title>Gabrielle Essence Eau de Parfum</Title>
        <Description>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </Description>
        <PriceArea>
          <PriceTag>
            <ins>$149.99</ins> <del>$169.99</del>
          </PriceTag>
          <Button>
            <FaShoppingCart /> Add to Cart
          </Button>
        </PriceArea>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;
