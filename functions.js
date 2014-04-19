var UPSIDEDOWN = require('./upsidedown');

module.exports = {
  
  upsidedown: function ( original ) {
      
    string = original.split('');
    
    for (var i = 0; i < string.length; i++) {
      
      for (var j = 0; j < UPSIDEDOWN.length; j++) {
        
        if ( string[i] == UPSIDEDOWN[j].normal) {
          
          string[i] = UPSIDEDOWN[j].flipped;
          
        }
        
      }
      
    }
    
    string = string.join('');
    
    return string;
    
  },
  
  righttoleft: function ( original ) {
    
    var temp_string = original.split('');
    
    var string = [];
    
    for (var i = temp_string.length; i >= 0; i--) {
      
      string.push(temp_string[i]);
      
    }
    
    string = string.join('');
    
    return string;
    
  },
  
  rtlusd: function ( original ) {
    
    var string = this.upsidedown(original);
    
    string = this.righttoleft(string);
    
    return string;
    
  },
  
  uppercase: function ( original ) {
    
    var string = original.toUpperCase();
    
    return string;
    
  },
  
  lowercase: function ( original ) {
    
    var string = original.toLowerCase();
    
    return string;
    
  },
  
  upperusd: function ( original ) {
    
    var string = this.uppercase(original);
    
    string = this.upsidedown(string);
    
    return string;
    
  },
  
  lowerusd: function ( original ) {
    
    var string = this.lowercase(original);
    
    string = this.upsidedown(string);
    
    return string;
    
  }
  
};
