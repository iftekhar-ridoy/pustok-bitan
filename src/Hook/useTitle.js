import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Pustok Bitan`
    }, [title])
};

export default useTitle;