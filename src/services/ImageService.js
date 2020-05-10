class ImageService {

    async getImages() {
        const imageUrl = `src/mock-api/ImageList.json`;
        return fetch(imageUrl, 
            {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => {
            return response.json();
        });
    }
}

export default ImageService;