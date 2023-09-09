import { AuthProvider, ReduxProvider } from "./Providers";
import './globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'Hotel Management',
  description: 'Developed by t4HM',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReduxProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
