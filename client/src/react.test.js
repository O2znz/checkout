import React from 'react'
import App from './components/App.jsx';
import { shallow, mount, render } from 'enzyme';
import Price from './components/Price.jsx';
import Reviews from './components/Reviews.jsx'


test('expects App to have state listingInfo', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveState('listingInfo');
    expect(wrapper.state().listingInfo).toBeDefined();
    expect(wrapper.state().id).not.toBeUndefined();
    expect(wrapper.state().month).not.toBeUndefined();

});

test('expect Price to render a number', () => {
    const wrapper = shallow(<Price price={37}/>);
    expect(wrapper.find('.price')).toBeDefined();
    expect(wrapper.find('.price')).toHaveText('$37 per price');
});

test('expect Reviews have a review count and rating', () => {
    const wrapper = shallow(<Reviews rating={4.5} reviewsCount={300}/>);
    expect(wrapper.find('.rating')).toIncludeText('4.5');
    expect(wrapper.find('.reviews')).toIncludeText('(300 reviews)');
});



