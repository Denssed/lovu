import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import fire from '../configuration';

const useGetData = <T,>(path: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const db = getDatabase(fire);
        const dbRef = ref(db, path);

        const unsubscribe = onValue(
            dbRef,
            (snapshot) => {
                setData(snapshot.val() as T);
                setLoading(false);
            },
            (err) => {
                setError(err.message);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [path]);

    return { data, loading, error };
};

export default useGetData;