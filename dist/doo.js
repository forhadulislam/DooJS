
const _$ = function(selector) {
	var doElement = Object;

	if(selector === window){
  	function loaded(fn) {
      
        if( fn ){          
            window.addEventListener('load', fn, false);         
        }

      return this;
    }
    
    return doElement.freeze({
      loaded: loaded,
    });
    
  }else if( (selector === 'doc') || (selector === 'dom') || (selector === document) ){
  	function ready(fn) {      
        if( fn ){          
            document.addEventListener('DOMContentLoaded', fn, false);         
        }
      return this;
    }
    
    return doElement.freeze({
      ready: ready,
    });
    
  }else{
  		
      this.selectedElem = document.querySelectorAll(selector);  
  		this.length = selectedElem.length;
  
  /*for(var i=0; i<length; i++){
    console.log( Date.now() )
  }*/
  
  function get() {
    return this;
  }
  function click(fn) {
  	if(length){
    	if(fn === undefined){
      	for(var i=0; i<length; i++){
          selectedElem[i].click();
        }
      }else{
      	for(var i=0; i<length; i++){
          selectedElem[i].addEventListener('click', fn, false);
        }
      }
    	
    }
    return this;
  }
  function height(value) {
  	if(value){
    	for(var i=0; i<length; i++){
      	if( isNaN(value) ){
        	selectedElem[i].style.height = value;
          return false;
        }
      	selectedElem[i].style.height = value + 'px';
      }
    }
  }
  
  function data(key,value) {
  	if(value === undefined){
    	if(typeof key === 'object'){
        
      }else{
      	for(var i=0; i<length; i++){      	
            return selectedElem[i].getAttribute("data-" + key);       
        }
      }
    }else{
    	for(var i=0; i<length; i++){      	
        	selectedElem[i].setAttribute("data-" + key, value);
      }
    }
    	
    
  }
  
  function setElement(age) {
     this.elem = selectedElem;
  }
  return doElement.freeze({
    length: length,
    data: data,
    height: height, 
    get: get, 
    click: click
  });
  }
  
}
const d_ = _$;
const $$ = _$;
const $_ = _$;
