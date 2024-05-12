const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43769783-4ebd08048bd6758fdf84d5c5e';

export const fetchPictureBySearch = (searchValue) => {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: searchValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });
    return fetch(`${BASE_URL}?${searchParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
};
