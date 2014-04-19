var fn = require('../functions');

describe('Text should be reversed and upsidedown:\n', function() {

  it('It should be from right to left and on its head.', function() {
    
    var original = 'chocolate';
    var result   = 'ǝʇɐʃoɔoɥɔ';
    
    var reversflipped = fn.rtlusd(original);

    expect(result).toBe(reversflipped);
    
  });
  
});
