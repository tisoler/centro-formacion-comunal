import { NavBar } from '../..//components/Layout/NavBar/NavBar';
import { Logo } from '../../components/Logo/Logo';
import testIds from '../../utils/test-ids';

const Header = () => (
  <>
    <header
      className="w-full pt-2 pb-1 px-2 sm:px-8 fixed z-50 bg-white top-0"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="flex sm:px-6 sm:px-14 h-header sm:items-center sm:gap-4 sm:gap-8">
        <h2 className="flex-1">
          <a href="/" className="flex flex-col sm:flex-row items-center">
            <Logo />
            <div>
              <span className="block font-site text-purple-site">
                CFC | Máximo Paz
              </span>
              <div className="flex items-center justify-center p-1 border-r-2 border-b-2 border-yellow-200">
                <span className="text-xs font-black">
                  Centro de Formación Comunal
                </span>
              </div>
            </div>
          </a>
        </h2>
        <div className="h-[75px]">
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
