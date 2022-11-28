import { useEffect, useState } from 'react';

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://pustok-bitan-server.vercel.app/users/Seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false);
                })
        }
    }, [email]);
    return [isSeller, isSellerLoading]
};

export default useSeller;