import axios from "axios";

const getArticleFromURL = async (articleId, Identity) => {
    console.log(articleId, Identity);
    return await axios.get(
        `${process.env.REACT_APP_API_URL}/makaledinle?articleId=${articleId}&Identity=${Identity}`,
        // {
        //     data: {
        //         ipAddress: ipAddress
        //     }
        // }
    );
};

export default getArticleFromURL;
