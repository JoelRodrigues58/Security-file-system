$(()=>{
    $('#validar').click(e => {
        e.preventDefault()
        ajaxPost()
    })

    function ajaxPost(){
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:12345",
            data: JSON.stringify({code: $('#texto').val()}),
            success: p => alert('Codigo gravado com sucesso: '+ p),
            error: e => {
                alert('Erro no POST: '+ JSON.stringify(e))
                console.log('ERRO: ' + e)
            }
        })
        $('#texto').val('')
    }
})