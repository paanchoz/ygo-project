import { useState, useEffect } from 'react';
import { MainNavbar } from './components/main-navbar';
import { Overview } from './pages/overview'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import './App.css';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 0
}));

const ContentLayout = styled('div')(({ theme }) => ({

  margin: 40
}));

export default function App({ children }) {

  const [data, setData] = useState([]);

  const callbackFunction = (data) => {
    setData(data);
  }

  return (
    <MainLayoutRoot>
      <MainNavbar parentCallback={callbackFunction} />
      <ContentLayout>
        <Overview cardsSearch={data} ></Overview>
      </ContentLayout>


    </MainLayoutRoot>
  )
};

App.propTypes = {
  children: PropTypes.node
};
