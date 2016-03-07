function Calci() {
    var inputElements = [],
        numericBtn    = ['9', '8', '7','/','6','5','4','*','3','2','1','-','0','.','=','+','C','DLT'],
        operandBtn    = ['*', '+', '-'],
        calcTemplate  = '',
        containerElement;

    containerElement           = document.getElementById("mainContainer");
    containerElement.innerHTML = '';

    function createElementMarkup(type, value) {
        var markupEl = document.createElement(type);
        markupEl.setAttribute('value', value);
        if (type === 'button') {
            markupEl.innerHTML = value;
            markupEl.setAttribute('class', 'btn btn-default col-xs-3');
        } 
        else if(type === 'input'){
            markupEl.setAttribute('disabled','true');
            markupEl.setAttribute('style', 'cursor: text;');
        }

        return markupEl;
    }

    function generateRowMarkup(width) {
        var rowEl = document.createElement('div');
        rowEl.setAttribute('class', 'col-xs-' + width);
        rowEl.setAttribute('style','padding:0px;');
        return rowEl;
    }

    function generateCalc() {
        var inputRow = generateRowMarkup(12),
        btnRow,
        btn;
        inputRow.appendChild(createElementMarkup('input', ''));
        containerElement.appendChild(inputRow);
        for (var i = 0; i <= numericBtn.length-1 ; i++) {
            if (i%4 === 0 || i === 0) {
                btnRow = generateRowMarkup(12);
            }
            if (btnRow) {
                btnRow.appendChild(createElementMarkup('button', numericBtn[i]));
            } else {
                btn = createElementMarkup('button', numericBtn[i]);
            }
            
            containerElement.appendChild(btnRow || btn);
        }
    }

    generateCalc();
}

var calc1 = new Calci();