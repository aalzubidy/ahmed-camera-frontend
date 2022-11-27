import CustomAxios from "./CustomAxios";

const API = {
  posts: {
    getAll: async (body: any) => {
      try {
        const response = await CustomAxios().post('/posts/all', body);
        return response;
      } catch (error) {
        throw error;
      }
    },
    getById: async (postId: string | number) => {
      try {
        const response = await CustomAxios().get(`/posts/${postId}`);
        return response;
      } catch (error) {
        throw error;
      }
    },
    newPost: async (body: any) => {
      try {
        const response = await CustomAxios().post('/posts', body);
        return response;
      } catch (error) {
        throw error;
      }
    }
  }
}

export default API;
