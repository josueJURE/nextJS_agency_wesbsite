import '../global.css'


export default function RootLayout({
    children,
  
  }: {
    children: React.ReactNode

  }) {
    return (
      <html lang="en">
      
          <body>
          {children}

          </body>
      </html>
    )
  }

//   export default function Button() {
//     return <button className={style.error
//     }>Click me</button>
// } 