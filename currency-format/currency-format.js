
//função baseada em armazenamento flot
//cujo database separa decimais com "."(ponto)

var v1 = 12345.6;           //R$ 12.345,60
var v2 = "12345.67";        //R$ 12.345,67
var v3 = 12345;             //R$ 12.345,00
var v4 = "12345";           //R$ 12.345,00

var v5 = "R$ 12345";        //12345.00
var v6 = "R$ 12345,00";     //12345.00
var v7 = "R$ 12.345,60"     //12345.60
var v8 = "R$ 123456,67";    //12345.67 


var Dinheiro = (function () {

    var inserirSeparadorMilhar = function (v) {
        return v.replace(/[.]/g, ",").replace(/\d(?=(?:\d{3})+(?:\D|$))/g, "$&.");//separa milhares com ponto.
    };
    var limpaDigitos = function (v) {
        return v.replace(/[^0-9]+/g, '');
    };
    var converterValorInteiroParaMoeda = function (v) {
        v = limpaDigitos(v);
        v = parseFloat(v).toFixed(2);
        v = inserirSeparadorMilhar(v);
        return v;
    };
    var converterValorComCentavosParaMoeda = function (v) {
        var arr = v.split(".");
        var inteiro = inserirSeparadorMilhar(limpaDigitos(arr[0]));
        var decimal = arr[1];
        if (decimal.length === 1) {
            decimal += 0;
        }
        return inteiro + "," + decimal;
    };

    var converterValorInteiroParaDecimal=function(v){
        v = limpaDigitos(v);
        v = parseFloat(v).toFixed(2);
        return v;
    }
    var converterValorComCentavosParaDecimal = function (v) {
        var arr = v.split(",");
        var inteiro = limpaDigitos(arr[0]);
        var decimal = arr[1];
        if (decimal.length === 1) {
            decimal += 0;
        }
        return inteiro + "." + decimal;
    };

    return {
        converterParaMoeda: function (v) {
            var regExp = /[.]/; 
            if (v == undefined) { return; }
            v = v.toString();
            if (!regExp.test(v)) {// se não for um número quebrado (com centavos)
                return 'R$ ' + converterValorInteiroParaMoeda(v);
            }
            return 'R$ ' + converterValorComCentavosParaMoeda(v);

        },
        converterParaDecimal: function (v) {
            var regExp = /[,]/;
            if (v == undefined) { return; }
            v = v.toString()

            if (v.length > 0) {
                if (!regExp.test(v)) { //"R$ 12345"
                    return converterValorInteiroParaDecimal(v);
                }
                return converterValorComCentavosParaDecimal(v);
            }
        }
    }
})();



console.log(Dinheiro.converterParaMoeda(v1)); //R$ 12.345,60
console.log(Dinheiro.converterParaMoeda(v2)); //R$ 12.345,67
console.log(Dinheiro.converterParaMoeda(v3)); //R$ 12.345,00
console.log(Dinheiro.converterParaMoeda(v4)); //R$ 12.345,00
console.log(Dinheiro.converterParaDecimal(v5)); //12345.00
console.log(Dinheiro.converterParaDecimal(v6)); //12345.00
console.log(Dinheiro.converterParaDecimal(v7)); //12345.60
console.log(Dinheiro.converterParaDecimal(v8)); //12345.67 

