import React from 'react';
import Responsive from '../src/components/Responsive';

describe('Responsive item', () => {
  const wrapper = shallow(<Responsive />);

  it('has a class name of "container-second"', () => {
    expect(wrapper.find('.container-second')).to.have.length(1);
  });

  it('the h1 length should be one', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('the h2 length should be one', () => {
    expect(wrapper.type('h2')).to.have.length(3);
  });

  it('the hElement data lenght', () => {
    const hElement = { tea: [ 'chai', 'matcha', 'oolong' ] };
    
    assert.lengthOf(hElement.tea, 3, 'beverages has 3 types of tea');

  });
  it('the somString text should be string', () => {
    const somString = 'iam rect test';
    assert.typeOf(somString, 'string');
    assert.lengthOf(somString, 13, 'foo`s value has a length of 13');
    

  });
});

