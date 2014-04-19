var fn = require('../functions');

describe('Text should be upsidedown:\n', function() {

  it('It should be upsidedown.', function() {
    
    var original = 'chocolate';
    var result   = 'ɔɥoɔoʃɐʇǝ';
    
    var flipped = fn.upsidedown(original);

    expect(result).toBe(flipped);
    
  });
  
  it('It should return the text lowercase and upsidedown.', function() {
    
    var original = 'chOcOlate';
    var result   = 'ɔɥoɔoʃɐʇǝ';
    
    var flipped = fn.upsidedown(original);

    expect(result).not.toBe(flipped);
    
  });
  
  it('It should keep the special character, eg \'_, /\', and numbers.', function() {
    
    var original = 'ch0co_laTe';
    var result   = 'ɔɥ0ɔo_ʃɐ⊥ǝ';
    
    var flipped = fn.upsidedown(original);

    expect(result).toBe(flipped);
    
  });
  
});
