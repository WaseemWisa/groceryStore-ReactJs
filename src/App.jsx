import { Global, MantineProvider } from '@mantine/core';
import { Routes , Route} from 'react-router-dom';
import MainLayout from './components/mainLayout/MainLayout';
import Home from './pages/Home/index'


function MyGlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*': { 
          boxSizing: 'border-box',
          padding: 0
        },
        body: {
          fontFamily: 'Poppins',
        },
        li: {
          listStyle: 'none'
        }
      })}
    />
  );
}
function App() {

  return (
    <MantineProvider  
        withNormalizeCSS
        theme={{
          breakpoints: {
            xs: '480px',
            sm: '48em',
            md: '64em',
            lg: '74em',
            xl: '90em',
          },
          colors: {
            colorPrimary: '#4b9634',
            colorThird: '#ea6c3c',
            colorSecondary: '#232323',
            colorBodyBg: '#fff',
          }
        }}
      >
        <MyGlobalStyles/>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index path='/' element={<Home/>} />
        </Route>
      </Routes>
    </MantineProvider>
  )
}

export default App