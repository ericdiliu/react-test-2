import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=asdf';


const fetchPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

const createPost = (postContent, callback) => {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, postContent).then(()=>{
        callback();
    });

    return {
        type: CREATE_POST,
        payload: request
    };

}

const fetchPost = (postId) => {
    const request = axios.get(`${ROOT_URL}/posts/${postId}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

const deletePost = (postId, callback) => {
    const request = axios.delete(`${ROOT_URL}/posts/${postId}${API_KEY}`).then(()=>{
        callback();
    });

    return {
        type: DELETE_POST,
        payload: postId
    }
}

export { fetchPosts , createPost, fetchPost, deletePost };