import Type from './post.actionTypes'

export const initialState = {
    posts: [
        {
            id:'hello-nextjs',
            t:'Hello Next.js',
            c:'Content for Hello Next.js'
        },
        {
            id:'nextjs-awesome',
            t:'Learn Next.js is awesome',
            c:'Next.js is awesome!'
        }, 
        {
            id:'deploy-apps',
            t:'Deploy apps with Zeit',
            c:'We\'re not going to do that...'
        }
    ],
    currentPost: 0
}
export const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Type.SET_POST:
            return Object.assign({}, state, {
                currentPost: payload
            })
        default: 
            return state
    }
}