import { imageBuilder } from 'lib/sanity';
import { HeaderProps } from 'types/header/Header';

const Header = ({ hero, page }: HeaderProps) => {
    return (
        <div
            className="w-full bg-cover bg-bottom mb-4"
            style={{
                backgroundImage: `url('${imageBuilder(hero.backgroundImage).width(1240).height(540).url()}')`,
                height: '60vh',
                maxHeight: '460px',
            }}>
            <div className="flex justify-center items-center h-full flex-col">
                <p className="text-white font-extrabold text-3xl md:text-5xl">{page.title}</p>
                {!!page.subtitle && <p className="text-xl md:text-2xl text-white pt-4">{page.subtitle}</p>}
            </div>
        </div>
    );
};

export default Header;
