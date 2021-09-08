import Banner from '../components/Banner';
import ContentOne from '../components/ContentOne';
import ContentTwo from '../components/ContentTwo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../views/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner></Banner>
      <ContentOne content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
       title="For those about to rock..." 
       img={require('../assets/img/01.jpg').default}/>
      <ContentTwo title="We salute you!" 
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
      img={require('../assets/img/02.jpg').default}
      />
      <ContentOne
      title="Let there be rock!"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
      img={require('../assets/img/03.jpg').default}/>
    <Footer/>
    </div>
  );
}

export default App;
