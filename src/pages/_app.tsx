import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client'

// import '../components/editor/editor.css'
import '../styles/main.css';

const App = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Provider
    options={{
      clientMaxAge: 0,
      keepAlive: 0,
    }}
    session={pageProps.session}
  >
    <div className='h-screen antialiased text-gray-100 bg-ebonyClay-600'>
      <Component {...pageProps} />
    </div>
  </Provider>
);

export default App;
