import 'normalize.css';
import '../sass/styles.scss';

const validations = {
  required: {
    message: 'digite seu',
    valid: function(value){
      return value !== ''
    }
  },
  email: {
    message: 'digite um email válido',
    valid: function(value){
      return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
  }
}

const formValidate = function () {
  let form = document.getElementById('form');
  if (form) {
    let inputsArr = form.querySelectorAll('input'),
        errorMessage = undefined;
  
    form.addEventListener('submit', function(e){
      let errors = [];
      var i = 0;
      while (i < inputsArr.length) {
        var attr = inputsArr[i].getAttribute('data-validation'),
            rules = attr ? attr.split(' ') : '',
            parent = inputsArr[i].closest(".field"),
            j = 0;
        while (j < rules.length) {
          errorMessage = parent.querySelector('.error-message')
          if(!validations[rules[j]].valid(inputsArr[i].value)) {
            e.preventDefault();
            errorMessage.innerHTML = rules[j] == 'email' ? validations[rules[j]].message : validations[rules[j]].message + ' ' + inputsArr[i].name;
            parent.className = "field error";
            errors.push(rules[j])
            return false;
          }
          errorMessage.className = "error-message hidden";
          parent.className = "field";
          j++;
        }
        i++;
      }
  
      if (errors.length == 0) {
        window.location.href = 'thankyou.html'
      }
      e.preventDefault();
    }, false)
  }
}
formValidate();