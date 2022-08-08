import { useState, useEffect } from "react";

const localCache = {};
// revisting the custom hooks chapter 
// https://frontendmasters.com/courses/complete-react-v7/custom-hooks/
// 2:17
// https://github.com/btholt/citr-v7-project/blob/main/06-custom-hooks/src/useBreedList.js
export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev.apis.com/breeds?animal=${animal}`
            )
            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }

    }, [animal]);

    return [breedList, status];
}