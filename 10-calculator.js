let calculation= localStorage.getItem('result') || '';
    
    document.querySelector('.js-display').innerHTML=calculation;

    function updateCalculation(pressed)
    {
      calculation+=pressed;
      document.querySelector('.js-display').innerHTML=calculation;

      localStorage.setItem('result',calculation);
    }
    function evaluateCalculation()
    {
      calculation=eval(calculation);
      document.querySelector('.js-display').innerHTML=calculation;   
      
      localStorage.setItem('result',calculation);
    }
    function clearCalculaion()
    {
      calculation='';
      document.querySelector('.js-display').innerHTML='';
      localStorage.removeItem('result');
    }
    function backSpace()
    {
      let lastChar=calculation.charAt(calculation.length-1);
      let lastSec=calculation.charAt(calculation.length-2);
      if(lastChar!==' ')
        calculation=calculation.slice(0,-1);
      else if(lastSec===' ')
      calculation=calculation.slice(0,-3);
      else
        calculation=calculation.slice(0,-2);
      updateCalculation('');
    }