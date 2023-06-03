import './style/index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  let bannerTitle = 'Welcome to Web Development course';
  let bannerText = 'We are a Winnipeg base company providing excellent services using front end technologies HTML, CSS, JavaScript And React for Web Development. Our mission and Vision to fulfill customer needs by providing quality services. We deliver responsive design for multiple screen sizes. Join us to learn new technologies.';
  let footerInfo = 'All Rights Reserved. ©2023 Inder Cheema';
  const gallery = [
    {
      id: 1001,
      url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      info: 'HTML/CSS Course'
    },
    {
      id: 1002,
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      info: 'JavaScript Course'
    },
    {
      id: 1003,
      url: 'https://images.unsplash.com/photo-1672307974995-cd253f7f7eeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      info: 'React Course'
    },
    {
      id: 1004,
      url: 'https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      info: 'Web Development Course'
    }
  ]
  return (
    <main>
      <Header />
      <Banner
        title={bannerTitle}
        text={bannerText}
      />
      <section class="section-heading">
            <div class="heading">
                <h2 class="course-heading">Our Courses</h2>
            </div>
        </section>
      <Gallery
      gallery={gallery}
      />
      <Footer
      info={footerInfo}
      />
    </main>
  );
}

export default App;
