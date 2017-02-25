var AemAngularBridge = (function(){

    var listenerRef;
    return {
        initialize:function(listenerRef){
            this.listenerRef = listenerRef;
        },
        updateAngular:function(){
            this.listenerRef.call(null,arguments);
        },

        destroy:function(){
            this.listenerRef = null;
        }

    };

})();