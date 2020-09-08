import React from 'react';

import TrendingPanel from './TrendingPanel';
import LoadingTredingPanel from '../Shimmer/LoadingTredingPanel';

import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
     {isLoading ? (
       <LoadingTredingPanel/>
     ) : (
       <>
        <TrendingPanel />
        <TrendingPanel />
      </>
     )}
    </Container>
  );
};

export default RightColumn;
