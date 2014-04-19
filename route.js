var fn = require('./functions');

var options = {
  upsidedown:'Flip text',
  righttoleft:'Reverse Text',
  rtlusd:'Flip and reverse text',
  uppercase: 'Make text uppercase',
  lowercase: 'Make text lowercase',
  upperusd: 'Make text uppercase and flip',
  lowerusd: 'Make text lowercase and flip'
};

exports.index = function(req, res){
  
  var original  = req.body.input;
  var operation = req.body.operation;
  
  var converted;
  var error;
  
  switch (operation) {
    
    case 'upsidedown':
      converted = fn.upsidedown(original);
      break;
      
    case 'righttoleft':
      converted = fn.righttoleft(original);
      break;
      
    case 'rtlusd':
      converted = fn.rtlusd(original);
      break;
      
    case 'uppercase':
      converted = fn.uppercase(original);
      break;
      
    case 'lowercase':
      converted = fn.lowercase(original);
      break;
    
    case 'upperusd':
      converted = fn.upperusd(original);
      break;
      
    case 'lowerusd':
      converted = fn.lowerusd(original);
      break;
    
    default:
      error = 'Given tranfromation tool is not valid.';

  }
  
  if ( req.body.input === undefined) {
    console.log('GET');
    error = null;
  }
  
  res.render('index', { options: options, original: original, operation: operation, converted: converted, error: error });
  
};
