
const useScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.pageYOffset > 300) {
    //
    //         }
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    const handleButtonClick = () => {
        scrollToTop();
    };

    return { handleButtonClick };
};

export default useScrollToTop;