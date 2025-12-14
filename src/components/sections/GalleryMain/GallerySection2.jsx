import React from 'react';
import styled from 'styled-components';
import s2_b2_i1 from '../../../assets/images/GalleryImages/s2-b2-i1.png';
import s2_b1_i1 from '../../../assets/images/GalleryImages/s2-b1-i1.png';
import s2_b1_i2 from '../../../assets/images/GalleryImages/s2-b1-i2.png';
import s2_b1_i3 from '../../../assets/images/GalleryImages/s2-b1-i3.png';
import s2_b1_i4 from '../../../assets/images/GalleryImages/s2-b1-i4.png';

const SectionContainer = styled.section`
  width: 1920px;
  height: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LargeImageBlock = styled.div`
  width: 960px;
  height: 960px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const GridBlock = styled.div`
  width: 960px;
  height: 960px;
  display: grid;
  grid-template-columns: repeat(2, 480px);
  grid-template-rows: repeat(2, 480px);
  gap: 0;
`;

const SmallImageBlock = styled.div`
  width: 480px;
  height: 480px;
  position: relative;
  overflow: hidden;
`;

const GallerySection2 = () => {
  return (
    <SectionContainer>
      {/* Лівий блок - Великий зображення */}
      <GridBlock>
        <SmallImageBlock>
          <Image src={s2_b1_i1} alt="Gallery image 1" />
        </SmallImageBlock>

        <SmallImageBlock>
          <Image src={s2_b1_i2} alt="Gallery image 2" />
        </SmallImageBlock>

        <SmallImageBlock>
          <Image src={s2_b1_i3} alt="Gallery image 3" />
        </SmallImageBlock>

        <SmallImageBlock>
          <Image src={s2_b1_i4} alt="Gallery image 4" />
        </SmallImageBlock>
      </GridBlock>

      {/* Правий блок - Grid 2x2 */}
      <LargeImageBlock>
        <Image src={s2_b2_i1} alt="Gallery main image" />
      </LargeImageBlock>
    </SectionContainer>
  );
};

export default GallerySection2;
