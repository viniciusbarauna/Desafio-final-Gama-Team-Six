function viewBTC(){
    const url = 'https://economia.awesomeapi.com.br/last/BTC-BRL'
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const moeda = data.BTCBRL
            let estaData = new Date(moeda.create_date)
            document.getElementById('title').innerHTML = moeda.name
            document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
            document.getElementById('maxvalue').innerHTML = parseFloat(moeda.high).toLocaleString('pt-br',{
                style: 'currency',
                currency: 'BRL'
            })
            document.getElementById('minvalue').innerHTML = parseFloat(moeda.low).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }) 
        })
    }
function viewETH(){
    const url = 'https://economia.awesomeapi.com.br/last/ETH-BRL'
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const moeda = data.ETHBRL
            let estaData = new Date(moeda.create_date)
            document.getElementById('title').innerHTML = moeda.name
            document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
            document.getElementById('maxvalue').innerHTML = parseFloat(moeda.high).toLocaleString('pt-br',{
                style: 'currency',
                currency: 'BRL'
            })
            document.getElementById('minvalue').innerHTML = parseFloat(moeda.low).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }) 
        })
    }
function viewUSDT(){
    const url = 'https://www.mercadobitcoin.net/api/BTC/ticker/'
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const moeda = data.USDTBRL
            let estaData = new Date(moeda.create_date)
            document.getElementById('title').innerHTML = moeda.name
            document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
            document.getElementById('maxvalue').innerHTML = parseFloat(moeda.high).toLocaleString('pt-br',{
                style: 'currency',
                currency: 'BRL'
            })
            document.getElementById('minvalue').innerHTML = parseFloat(moeda.low).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }) 
        })
    }