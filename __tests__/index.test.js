import { shallow } from 'enzyme'
import React from 'react'
import About from '../src/pages/about'
import { Post } from '../src/pages/post'
import { Index } from '../src/pages/index'

describe('Page tests', () => {
    it('About page', () => {
        const about = shallow(<About />)
        expect(about.find('p').text()).toEqual('This is the about page')
    })
    it('Post page -- connected component', () => {
        const data = {
            post: {
                t: 'test post!',
                c: 'test post content!'
            }
        }
        const post = shallow(<Post {...data} />)
        expect(post.find('h1').text()).toEqual('test post!')
    })
    it('Index component', () => {
        const props = {
            data: []
        }
        const index = shallow(<Index {...props} />)
        expect(index).toBeTruthy()
    })
})