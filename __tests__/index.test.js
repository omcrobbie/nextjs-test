import { shallow } from 'enzyme'
import React from 'react'
import { About } from '../pages/about'

describe('Page tests', () => {
    it('About page', () => {
        const about = shallow(<About />)
        expect(about.find('p').text().toEqual('This is the about page'))
    })
})