var fn = require('../functions');

describe('Text should change letter case:\n', function() {

  it('It should be all lowercase.', function() {
    
    var original = 'ChocoLate';
    var result   = 'chocolate';
    
    var lower = fn.lowercase(original);

    expect(result).toBe(lower);
    
  });
  
  it('It should be all uppercase.', function() {
    
    var original = 'choColAte';
    var result   = 'CHOCOLATE';
    
    var upper = fn.uppercase(original);

    expect(result).toBe(upper);
    
  });
  
});
