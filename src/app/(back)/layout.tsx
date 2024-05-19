import Header from "../components/back/header/Header";
import Footer from "../components/back/footer/Footer";






export default function BackLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
       <Header />
      {children}
      <Footer />
  
      </>
        
    );
  }
  