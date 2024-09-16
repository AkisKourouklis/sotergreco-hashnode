import Image from 'next/legacy/image';

const Ads = (props: { adLocation: string }) => {
	const { adLocation } = props;
	if (adLocation === 'home-top') {
		return (
			<>
				<a className="hidden md:block" target="_blank" href="https://reporanger.xyz">
					<Image src="/banner-1.png" alt="ad" width={1342} height={136} loading="lazy" />
				</a>
				<a target="_blank" href="https://reporanger.xyz" className="block md:hidden">
					<Image src="/banner-1-mobile.png" alt="ad" width={1200} height={280} loading="lazy" />
				</a>
			</>
		);
	}
	if (adLocation === 'home-mid') {
		return (
			<>
				<a className="hidden md:block" target="_blank" href="https://reporanger.xyz">
					<Image src="/banner-1.png" alt="ad" width={1342} height={136} loading="lazy" />
				</a>
				<a target="_blank" href="https://reporanger.xyz" className="block md:hidden">
					<Image src="/banner-1-mobile.png" alt="ad" width={1200} height={280} loading="lazy" />
				</a>
			</>
		);
	}
	if (adLocation === 'post-mid') {
		return (
			<>
				<a className="hidden md:block" target="_blank" href="https://reporanger.xyz">
					<Image src="/banner-2.png" alt="ad" width={1200} height={480} loading="lazy" />
				</a>
				<a className="block md:hidden" target="_blank" href="https://reporanger.xyz">
					<Image src="/banner-2.png" alt="ad" width={1000} height={480} loading="lazy" />
				</a>
			</>
		);
	}
	return <img className="w-full object-cover" src="https://via.placeholder.com/728x90" alt="ad" />;
};

export default Ads;
