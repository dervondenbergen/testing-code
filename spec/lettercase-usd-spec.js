var fn = require('../functions');

describe('Text should change letter case and be upsidedown:\n', function() {

  it('It should be all lowercase and flipped.', function() {
    
    var original = 'ChocoLate';
    var result   = 'ɔɥoɔoʃɐʇǝ';
    
    var lowusd = fn.lowerusd(original);

    expect(result).toBe(lowusd);
    
  });
  
  it('It should be all uppercase and flipped.', function() {
    
    var original = 'choColAte';
    var result   = 'ƆHOƆO⅂∀⊥Ǝ';
    
    var uppusd = fn.upperusd(original);

    expect(result).toBe(uppusd);
    
  });
  
});
