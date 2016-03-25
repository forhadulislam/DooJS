// usage



$$(window).loaded(function(){
	
})

$$('dom').ready(function(){
    
    var ul =  _$('ul')
   ,a = _$('a');

  $$('a').click(function(e){
    console.log(this);
  });

  console.log($$('a').length);

  $$('a').height(100);

  $$('button').height('50px');

  $$('button').click(function(e){
    $$('a').click();
  });

	console.log( document.readyState );
  
  $$('a').data("keydata","valueData");
	console.log( $$('a').data("keydata") );

	console.log( $$('a') ); 
  
})


