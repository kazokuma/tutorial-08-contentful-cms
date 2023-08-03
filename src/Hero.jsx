import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Godard succulents meh thundercats. Portland flexitarian iPhone deep
            v hell of tofu raw denim mlkshk biodiesel disrupt gastropub offal
            ramps. Chillwave fingerstache jean shorts, next level banjo prism
            live-edge ramps raclette. Jawn fam prism jianbing echo park
            wayfarers cold-pressed flannel retro. Poke kitsch neutra, pork
            belly.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and browser' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
