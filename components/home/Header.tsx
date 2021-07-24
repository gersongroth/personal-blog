import { imageBuilder } from 'lib/sanity';
import { HeaderProps } from 'types/header/Header';

const Header = ({ className = '', hero, page }: HeaderProps) => {
    return (
        <div
            className="w-full bg-cover bg-bottom mb-4"
            style={{
                backgroundImage: `url('${imageBuilder(hero.backgroundImage).width(1240).height(540).url()}')`,
                height: '60vh',
                maxHeight: '460px',
            }}>
            <div className="flex justify-center items-center h-full">
                {/* <p className="text-white font-extrabold text-3xl md:text-5xl">Gerson Groth</p>
                <p className="text-xl md:text-2xl text-gray-500 pt-4">Programação, dicas e ideias.</p> */}
                <p className="text-white font-extrabold text-3xl md:text-5xl">{page.title}</p>
            </div>
        </div>
    );
};

export default Header;
