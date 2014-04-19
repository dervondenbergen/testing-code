var fn = require('../functions');

describe('Text should be reversed:\n', function() {

  it('It should be from right to left.', function() {
    
    var original = 'chocolate';
    var result   = 'etalocohc';
    
    var reversed = fn.righttoleft(original);

    expect(result).toBe(reversed);
    
  });
  
});
