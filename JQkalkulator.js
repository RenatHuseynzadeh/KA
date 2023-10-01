



$('.btn').click(function(){
    let text = $(this).text()
    $('input').val($('input').val() + text)

    
    
})



$('#emp').click(function(){
    
    $('input').val('')

    
    
})

$('#back').click(function(){
    
    let vaal = $('input').val()

    $('input').val(vaal.substring(0, vaal.length - 1))
    
})

$('#egu').click(function(){
    $('input').val(eval($('input').val()))
})

$('.btn21').click(function(){
     let valProc = $('input').val()
    // let valLen = $('input').val().length
    // if(valLen == 1){
        // $('input').val(`0.0${valProc}`)
    // }


    $('input').val(`0.${valProc}`)
})

$('.btn22').click(function(){
   let delX = $('input').val()
   let delXx = 1
   


   $('input').val(delXx / delX)
})

$('.btn23').click(function(){
    // let delX = $('input').val()
    //  let plMn = $('input').val().length
    // $('input').val()[0]
    if ($('input').val()[0] === '-') {
        $('input').val(`${$('input').val()[1]}${$('input').val()[2]}`)
    } else{
        $('input').val(`-${$('input').val()}`)
    }
    
 
 
    // $('input').val()
 })



 $('.btn24').click(function(){
    let lklk = $('input').val() * $('input').val()
    $('input').val(lklk)
    // $('input').val()
 }) 




 $('.btn25').click(function(){
    $('input').val(Math.sqrt($('input').val()))
    // $('input').val()
 }) 