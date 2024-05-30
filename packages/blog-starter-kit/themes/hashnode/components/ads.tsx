import Image from "next/legacy/image";

const Ads = (props: {
  adLocation: string;
}) => {
  const {adLocation} = props;
  if (adLocation === 'home-top') {
    return (
      <>
        <a className="hidden md:block" target="_blank" href="https://shipfa.st/?via=sotiris">
          <Image
            src='/shipfast-1-small.gif'
            alt="ad"
            width={1200}
            height={130}
            loading="lazy"
          />
        </a>
        <a target="_blank" href="https://shipfa.st/?via=sotiris" className="block md:hidden">
          <Image
            src='/shipfast-1-mobile.gif'
            alt="ad"
            width={1200}
            height={280}
            loading="lazy"
          />
        </a>
      </>
    );
  }
  if (adLocation === 'home-mid') {
    return (
      <>
        <a className="hidden md:block" target="_blank" href="https://shipfa.st/?via=sotiris">
          <Image
            src='/shipfast-1-small.gif'
            alt="ad"
            width={1200}
            height={130}
            loading="lazy"
          />
        </a>
        <a target="_blank" href="https://shipfa.st/?via=sotiris" className="block md:hidden">
          <Image
            src='/shipfast-1-mobile.gif'
            alt="ad"
            width={1200}
            height={280}
            loading="lazy"
          />
        </a>
      </>
    );
  }
  if (adLocation === 'post-mid') {
    return (
      <>
        <a className="hidden md:block" target="_blank" href="https://photoai.com/?via=sotiris">
          <Image
            src='/photoai-1.jpg'
            alt="ad"
            width={1200}
            height={480}
            loading="lazy"
          />
        </a>
        <a className="block md:hidden" target="_blank" href="https://photoai.com/?via=sotiris">
          <Image
            src='/photoai-1-mobile.jpg'
            alt="ad"
            width={1000}
            height={1200}
            loading="lazy"
          />
        </a>
      </>
    );
  }
  return (
    <img className="w-full object-cover" src="https://via.placeholder.com/728x90" alt="ad"/>
  );

}

export default Ads;
