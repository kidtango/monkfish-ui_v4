import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'

import WithApollo from 'src/graphql/lib/WithApollo'

// import '../components/editor/editor.css'
import '../styles/main.css'

const App = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SessionProvider session={pageProps.session}>
    <div className="antialiased text-gray-100">
      <Component {...pageProps} />
    </div>
  </SessionProvider>
)

export default WithApollo(App)
