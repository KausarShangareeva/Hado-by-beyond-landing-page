import { GlobalStyles } from "./GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import PreLaunch from "./components/PreLaunch";
import PhotoCarousel from "./components/PhotoCarousel";
import AboutSiora from "./components/AboutSiora";
import SioraPhilosophy from "./components/SioraPhilosophy";
import Infrastructure from "./components/Infrastructure";
import Location from "./components/Location";
import AboutHado from "./components/AboutHado";
import FloorPlans from "./components/FloorPlans";
import SalesTicker from "./components/SalesTicker";
import PaymentPlan from "./components/PaymentPlan";
import FAQ from "./components/FAQ";
import FooterMenu from "./components/Footer";

// const DragonIMG1 = styled.img`
//   position: absolute;
//   top: 24%;
//   left: 78.25%;
//   width: 30%;
//   height: auto;
//   object-fit: contain;

//   @media (max-width: 1000px) {
//     display: none;
//   }
// `;

// const DragonIMG2 = styled.img`
//   position: absolute;
//   top: 50%;
//   left: -11.6%;
//   width: 30%;
//   height: auto;
//   object-fit: contain;

//   @media (max-width: 1000px) {
//     display: none;
//   }
// `;

// const DragonIMG3 = styled.img`
//   position: absolute;
//   top: 60%;
//   left: 81.35%;
//   width: 30%;
//   height: auto;
//   object-fit: contain;

//   @media (max-width: 1000px) {
//     display: none;
//   }
// `;

// const DragonIMG4 = styled.img`
//   position: absolute;
//   top: 84%;
//   left: -11.6%;
//   width: 30%;
//   height: auto;
//   object-fit: contain;

//   @media (max-width: 1000px) {
//     display: none;
//   }
// `;

// const DragonIMG5 = styled.img`
//   position: absolute;
//   top: 96%;
//   left: 74%;
//   width: 35%;
//   height: auto;
//   object-fit: contain;

//   @media (max-width: 1000px) {
//     display: none;
//   }
// `;

const Background = styled.div`
  max-width: 130rem;
  background-color: #fff;
  border-left: 1px solid var(--color-black);
  border-right: 1px solid var(--color-black);
  margin: 0 auto;
  background-image: url("/path/to/noise.png");
  opacity: 1;
  padding: 3rem 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    overflow: hidden;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/noise.png");
    background-repeat: repeat;
    opacity: 0.2; /* регулируй шум */
    pointer-events: none;
    z-index: -1;
  }
`;

const ContentColumn = styled.div`
  max-width: 118rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15rem;
  overflow: hidden;
`;
export default function App() {
  return (
    <>
      <GlobalStyles />

      <Background>
        <ContentColumn>
          <Header />
          <PreLaunch />
          <PhotoCarousel />

          {/* <DragonIMG1 src="/DragonIMG/Dragon-1.png" alt="Dragon" />
          <DragonIMG2 src="/DragonIMG/Dragon-2.png" alt="Dragon" />
          <DragonIMG3 src="/DragonIMG/Dragon-3.png" alt="Dragon" />
          <DragonIMG4 src="/DragonIMG/Dragon-2.png" alt="Dragon" />
          <DragonIMG5 src="/DragonIMG/Dragon-5.png" alt="Dragon" /> */}

          <AboutSiora />
          <SioraPhilosophy />
          <Infrastructure />
          <Location />

          <AboutHado />
          <FloorPlans />

          <SalesTicker />

          <PaymentPlan />
          <FAQ />

          <FooterMenu />
        </ContentColumn>
      </Background>
    </>
  );
}
