import Production1 from "../components/Production1";
import Production2 from "../components/Production2";
import Production3 from "../components/Production3";
import News from '../components/News'
import Contact from '../components/Contact'

import AppAbout from '../components/About'

function Products(params) {
  return (
    <>
      <AppAbout />
      <Production1 />
      <Production2 />
      <Production3 />
      <News />
      <Contact />
    
    </>
  );
}

export default Products;
