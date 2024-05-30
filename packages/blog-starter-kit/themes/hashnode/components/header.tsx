import { twJoin } from 'tailwind-merge';
import { lightOrDark } from '../utils/commonUtils';
import { useAppContext } from './contexts/appContext';
import { Button } from './custom-button';
import HeaderBlogSearch from './header-blog-search';
import HeaderLeftSidebar from './header-left-sidebar';
import PublicationLogo from './publication-logo';
import PublicationNavLinks from './publication-nav-links';
import PublicationSocialLinks from './publication-social-links';

type Props = {
	currentMenuId?: string | null;
	isHome: boolean;
};

export const Header = (props: Props) => {
	const { currentMenuId, isHome } = props;
	const { publication } = useAppContext();

	return (
		<header
			className="blog-header relative z-50 w-full border-b border-black/10 bg-white bg-opacity-70 dark:border-white/10 dark:bg-gray-950"
		>
			<div className="container mx-auto px-2 md:px-4 2xl:px-10">
        {/* Logo for mobile view */}
        <div className="mx-auto pt-2 flex w-2/3 flex-row items-center justify-center md:hidden">
          <PublicationLogo publication={publication} size="xl"/>
        </div>
				<div className="relative z-40 flex flex-row items-center justify-between pb-2 pt-4 md:mb-4">
					<div className="flex flex-row items-center py-1">
						{/* Navigation for mobile view */}
						<div
							className={twJoin(
								'md:hidden','dark:text-white',
							)}
						>
							<HeaderLeftSidebar publication={publication} />
						</div>
            <div className="hidden md:flex">
              <PublicationLogo publication={publication} size="lg" withProfileImage/>
              <div
                className="ms-4 relative hidden flex-row items-center justify-center overflow-hidden text-base md:flex"
                data-tom="hidden md:flex relative flex-row items-center justify-center overflow-hidden text-base mt-8"
              >
                <PublicationNavLinks
                  isHome={isHome}
                  currentActiveMenuItemId={currentMenuId}
                  enabledPages={publication.preferences?.enabledPages}
                  navbarItems={publication.preferences?.navbarItems || []}
                />
              </div>
            </div>
          </div>
          <div
            className={twJoin(
              'flex flex-row items-center', 'dark:text-white',
            )}
          >
            <div className="blog-sub-header flex items-center me-1" data-testid="blog-sub-header">
              {/* Desktop */}
              <div className="justify-betweem mx-0 hidden w-full flex-row items-center md:flex">
                <PublicationSocialLinks
                  links={publication.links}
                />
              </div>
              {/* Mobile view */}
              <div className=" flex w-full flex-col items-center md:hidden">
                <PublicationSocialLinks
                  links={publication.links}
                />
              </div>
            </div>
            <HeaderBlogSearch publication={publication}/>
          </div>
        </div>
			</div>
		</header>
	);
};
