import React from 'react'
import App from './components/App.jsx';
import { shallow, mount, render } from 'enzyme';
import Price from './components/Price.jsx';



test('expects App to have state listingInfo', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveState('listingInfo');
    expect(wrapper.state().listingInfo).toBeDefined();
    expect(wrapper.state().id).not.toBeUndefined();
    expect(wrapper.state().month).not.toBeUndefined();
});

test('expects Price to render a number', () => {
    const wrapper = shallow(<Price price={37}/>);
    expect(wrapper.find('.price')).toBeDefined();
    
    //const appWrapper = mount(<App/>)
});

test('expects Price to render a number', () => {
    const wrapper = shallow(<Price price={37}/>);
    expect(wrapper.find('.price')).toBeDefined(); 
})


