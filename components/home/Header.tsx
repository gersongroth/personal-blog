const Header = ({ className = '', ...props }) => {
    console.log(props);
    return (
        <div
            className="w-full m-0 p-0 bg-cover bg-bottom"
            style={{
                backgroundImage: "url('cover.jpg')",
                height: '60vh',
                maxHeight: '460px',
            }}>
            <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
                <p className="text-white font-extrabold text-3xl md:text-5xl">Gerson Groth</p>
                <p className="text-xl md:text-2xl text-gray-500 pt-4">Programação, dicas e ideias.</p>
            </div>
        </div>
    );
};

export default Header;
