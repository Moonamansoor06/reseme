import './globals.css'
import Footer from './components/footer'
import Header from './components/header'
import HeaderSelect from './components/headerSelect'


export const metadata = {
  title: 'Resume app',
  description: 'created by Moona mansoor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 

{
  
  return (
    <html lang="en">
      <body className='bg-rosywhite'>
    <HeaderSelect/>
       
        {children}
         <Footer/>
      </body>
     
    </html>
  )
}
 