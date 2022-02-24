import React, {useContext, useEffect, useState} from 'react';
import PlatformsList from '../../components/PlatformsList';
import {ContainerPages} from '../../components/styled.components';

function HomePage() {
  return (
    <div>
      <ContainerPages>
        <h1>Home page</h1>
          <PlatformsList />
        </ContainerPages>
    </div>
  );
}

export default HomePage;