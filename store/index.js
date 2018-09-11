import Vuex from 'vuex';
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editPost) {
                const postIndex = state.loadedPosts.findIndex(post =>  post.id === editPost.id)
                state.loadedPosts[postIndex] = editPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) { 
                return axios.get(process.env.baseUrl + '/posts.json')
                .then(res => {
                    const postsArray = []
                    for (const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key})
                    }
                    vuexContext.commit('setPosts', postsArray)
                })
                .catch (e => context.error(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            addPost({commit}, post) {
                const createdPost = {
                  ...post,
                  updatedDate: new Date()
                }
                return axios.post(process.env.baseUrl + '/posts.json', createdPost)
                  .then(result => {
                    commit('addPost', {...createdPost, id: result.data.name});
                  }).catch(e => {
                    console.log(e);
                })
            },
            editPost({commit}, editedPost) {
                 return axios.put(process.env.baseUrl + '/posts/' + editedPost.id + '.json', editedPost)
                   .then(result => {
                     commit('editPost', editedPost);
                   })
                   .catch(e => console.log(e))
              
            }
        },
        getters: {
            loadedPosts (state) {
                return state.loadedPosts
            }
        }
    });
};

export default createStore