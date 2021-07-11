import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import WithApollo from 'src/graphql/lib/WithApollo'

// import '../components/editor/editor.css'
import '../styles/main.css'

const App = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Provider
    options={{
      clientMaxAge: 0,
      keepAlive: 0,
    }}
    session={pageProps.session}
  >
    <div className="antialiased text-gray-100">
      <Component {...pageProps} />
    </div>
  </Provider>
)

export default WithApollo(App)
