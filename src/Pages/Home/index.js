import React, {useContext, useEffect, useState} from 'react';
import PlatformsList from '../../components/PlatformsList';

function HomePage() {
  return (
    <div>
        <h1>Home page</h1>
        <header className="App-header">
          <PlatformsList />
        </header>
    </div>
  );
}

export default HomePage;