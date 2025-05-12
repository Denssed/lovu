import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import fire from "../configuration";

const useSetData = <T,>() => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const setData = async (path: string, data: T) => {
        setLoading(true);
        setError(null);

        try {
            const db = getDatabase(fire);
            const dbRef = ref(db, path);
            await set(dbRef, data);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return { setData, loading, error };
};

export default useSetData;